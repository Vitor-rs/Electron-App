import os
import datetime
import argparse
import sys

# Configurações Globais
IGNORE_DIRS = {'.git', 'node_modules', 'out', 'dist', '.vscode', '.idea', '__pycache__', '.agent', 'coverage', 'resources'}
IGNORE_FILES = {'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock', 'PROJECT_STRUC_DOCS.md', '.DS_Store', 'thumbs.db'}
OUTPUT_FILE = 'PROJECT_STRUC_DOCS.md'

# Mapeamento de extensões
EXT_MAP = {
    'ts': 'typescript', 'tsx': 'tsx', 'js': 'javascript', 'jsx': 'jsx',
    'py': 'python', 'ps1': 'powershell', 'bat': 'batch',
    'md': 'markdown', 'json': 'json', 'yml': 'yaml', 'yaml': 'yaml',
    'html': 'html', 'css': 'css', 'scss': 'scss',
    'sql': 'sql', 'sh': 'bash'
}

def is_binary(file_path):
    try:
        with open(file_path, 'rb') as f:
            chunk = f.read(1024)
            return b'\0' in chunk
    except Exception:
        return True

def generate_tree_recursive(current_path, prefix, ignore_dirs, ignore_files):
    output = []
    try:
        items = sorted(os.listdir(current_path))
    except PermissionError:
        return []

    items = [i for i in items if i not in ignore_dirs and i not in ignore_files]
    
    for i, item in enumerate(items):
        path = os.path.join(current_path, item)
        is_last = (i == len(items) - 1)
        marker = "\\--- " if is_last else "+--- "
        
        output.append(f"{prefix}{marker}{item}")
        
        if os.path.isdir(path):
            next_prefix = prefix + ("     " if is_last else "|    ")
            output.extend(generate_tree_recursive(path, next_prefix, ignore_dirs, ignore_files))
            
    return output

def main():
    parser = argparse.ArgumentParser(description="Ferramenta unificada de documentação e visualização de estrutura.")
    
    # Argumento Posicional: Path (Opcional, default=current)
    parser.add_argument("path", nargs="?", default=".", help="Diretório alvo.")
    
    # Flags Mutuamente Exclusivas (para evitar confusão)
    group = parser.add_mutually_exclusive_group()
    group.add_argument("-t", "--terminal", action="store_true", help="Exibe APENAS a árvore no terminal (sem gerar arquivo).")
    group.add_argument("-n", "--no-content", action="store_true", help="Gera o arquivo de documentação APENAS com a árvore (sem conteúdo dos arquivos).")
    
    args = parser.parse_args()
    
    # Validação e Setup
    root_execution_dir = os.getcwd()
    target_path = os.path.abspath(args.path)
    
    # Configuração do diretório de saída (docs/)
    docs_dir = os.path.join(root_execution_dir, 'docs')
    if not os.path.exists(docs_dir):
        try:
            os.makedirs(docs_dir)
        except OSError as e:
            print(f"Erro ao criar diretório 'docs': {e}")
            sys.exit(1)
            
    # Determina o nome base do arquivo
    base_filename = OUTPUT_FILE
    
    # Se um path específico foi passado (não é o diretório atual)
    if os.path.abspath(target_path) != root_execution_dir:
        # Pega o caminho relativo e sanitiza para usar no nome do arquivo
        rel_path_name = os.path.relpath(target_path, root_execution_dir)
        # Substitui separadores de diretório por underscore e remove caracteres inválidos
        safe_name = rel_path_name.replace(os.sep, '_').replace(':', '').replace('.', '')
        name_part, ext_part = os.path.splitext(OUTPUT_FILE)
        base_filename = f"{name_part}_{safe_name}{ext_part}"
            
    output_path = os.path.join(docs_dir, base_filename)
    
    # Versionamento de arquivo: se existir, cria _v1, _v2, etc.
    if os.path.exists(output_path):
        base_name, ext = os.path.splitext(base_filename)
        counter = 1
        while True:
            new_filename = f"{base_name}_v{counter}{ext}"
            new_output_path = os.path.join(docs_dir, new_filename)
            if not os.path.exists(new_output_path):
                output_path = new_output_path
                break
            counter += 1
    
    # Adiciona o próprio arquivo de saída à lista de ignorados
    IGNORE_FILES.add(os.path.basename(output_path))

    if not os.path.exists(target_path):
        print(f"Erro: O caminho '{target_path}' não existe.")
        sys.exit(1)
        
    if not os.path.isdir(target_path):
        print(f"Erro: O caminho '{target_path}' não é um diretório.")
        sys.exit(1)

    # Lógica Principal
    
    # 1. Modo Terminal (-t): Apenas imprime a árvore e sai.
    if args.terminal:
        tree_lines = generate_tree_recursive(target_path, "", IGNORE_DIRS, IGNORE_FILES)
        print(os.path.basename(target_path))
        print("\n".join(tree_lines))
        sys.exit(0)

    # 2. Modo Arquivo (Default ou -n): Gera PROJECT_DOCS.md
    print(f"Gerando documentação para: {target_path}")
    print(f"Arquivo de saída: {output_path}")
    
    if args.no_content:
        print("Modo: Apenas Estrutura (Conteúdo ignorado)")
    else:
        print("Modo: Completo (Estrutura + Conteúdo)")

    print("Gerando estrutura de árvore...")
    tree_lines = generate_tree_recursive(target_path, "", IGNORE_DIRS, IGNORE_FILES)
    
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write("# Documentação do Projeto\n\n")
            f.write(f"> Gerado automaticamente em {datetime.datetime.now().strftime('%d/%m/%Y %H:%M:%S')}\n")
            f.write(f"> Caminho documentado: `{target_path}`\n\n")
            
            f.write("## Estrutura de Arquivos\n\n")
            f.write("```text\n")
            f.write(os.path.basename(target_path) + "\n")
            f.write("\n".join(tree_lines))
            f.write("\n```\n\n")
            
            # Se NÃO tiver a flag --no-content, escreve o conteúdo
            if not args.no_content:
                f.write("## Conteúdo dos Arquivos\n")
                print("Escrevendo conteúdo dos arquivos...")
                
                file_count = 0
                for root, dirs, files in os.walk(target_path):
                    dirs[:] = [d for d in dirs if d not in IGNORE_DIRS]
                    files = sorted([f for f in files if f not in IGNORE_FILES])
                    
                    for file in files:
                        file_path = os.path.join(root, file)
                        # Ignora o próprio arquivo de saída se estiver no caminho
                        if os.path.abspath(file_path) == os.path.abspath(output_path): continue

                        rel_path = os.path.relpath(file_path, target_path)
                        
                        f.write(f"\n## {rel_path}\n\n")
                        
                        ext = os.path.splitext(file)[1].lower().lstrip('.')
                        lang = EXT_MAP.get(ext, ext)
                        
                        f.write(f"```{lang}\n")
                        
                        if is_binary(file_path):
                            f.write("*(Arquivo binário ou ilegível)*\n")
                        else:
                            try:
                                with open(file_path, 'r', encoding='utf-8', errors='replace') as source:
                                    f.write(source.read())
                            except Exception as e:
                                f.write(f"*(Erro ao ler arquivo: {e})*\n")
                        
                        f.write("\n```\n")
                        file_count += 1
                print(f"Concluído! {file_count} arquivos documentados.")
            else:
                print("Concluído! Apenas estrutura gerada.")
                
    except PermissionError:
        print(f"Erro: Permissão negada ao escrever em {output_path}")
        sys.exit(1)
    except Exception as e:
        print(f"Erro inesperado: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
