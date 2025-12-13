import { Badge } from '@/shared/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'

export function HomePage() {
  const stack = [
    {
      category: 'Core',
      items: ['Electron', 'React 18', 'TypeScript', 'Vite'],
    },
    {
      category: 'UI & Styling',
      items: ['Tailwind CSS v4', 'Shadcn/ui', 'Lucide Icons'],
    },
    {
      category: 'Data & State',
      items: ['SQLite (better-sqlite3)', 'Drizzle ORM', 'Zustand', 'React Query'],
    },
    {
      category: 'Validation & Forms',
      items: ['Zod', 'React Hook Form'],
    },
    {
      category: 'Tooling & Quality',
      items: ['ESLint', 'Prettier', 'Plop (Scaffolding)', 'Husky', 'Commitlint'],
    },
  ]

  return (
    <div className="container mx-auto max-w-5xl space-y-16 py-10">
      {/* Overview Section */}
      <section id="overview" className="space-y-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Electron App Template
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Uma fundação robusta e moderna para construir aplicações desktop de alta performance.
        </p>
      </section>

      {/* Stack Section */}
      <section id="stack" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <Card key={group.category} className="h-full">
              <CardHeader>
                <CardTitle>{group.category}</CardTitle>
                <CardDescription>Tecnologias principais</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item} variant="secondary">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Arquitetura</h2>
        <div className="rounded-lg border bg-card p-8 text-card-foreground shadow-sm">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-primary">Backend (Main Process)</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>Node.js environment</li>
                <li>SQLite Database com Drizzle</li>
                <li>IPC Handlers Type-Safe</li>
                <li>Arquitetura segura (Sandbox ativado)</li>
              </ul>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-primary">Frontend (Renderer Process)</h3>
              <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                <li>React + Vite</li>
                <li>Feature-based Folder Structure</li>
                <li>Componentes Shadcn/ui</li>
                <li>Separação estrita via ContextBridge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Database Section */}
      <section id="database" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">Database</h2>
        <p className="text-muted-foreground">
          O projeto utiliza <strong>better-sqlite3</strong> para alta performance e{' '}
          <strong>Drizzle ORM</strong> para type-safety. O arquivo do banco de dados é criado
          automaticamente no diretório de dados do usuário.
        </p>
      </section>

      {/* IPC Section */}
      <section id="ipc" className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight">IPC & Segurança</h2>
        <p className="text-muted-foreground">
          A comunicação entre processos é feita exclusivamente via <strong>ContextBridge</strong> e{' '}
          <strong>ipcRenderer.invoke</strong>. Todos os canais são tipados em{' '}
          <code>src/shared/types/ipc.ts</code>.
        </p>
      </section>
    </div>
  )
}
