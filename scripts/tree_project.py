import os

def print_tree(startpath):
    for root, dirs, files in os.walk(startpath):
        # Exclusions
        if 'node_modules' in dirs:
            dirs.remove('node_modules')
        if '.git' in dirs:
            dirs.remove('.git')
        if '.agent' in dirs:
            dirs.remove('.agent')
        if 'out' in dirs:
             dirs.remove('out') # Optional build artifact exclusion

        level = root.replace(startpath, '').count(os.sep)
        indent = '|   ' * (level)
        print('{}{}/'.format(indent, os.path.basename(root)))
        subindent = '|   ' * (level + 1)
        for f in files:
            print('{}{}'.format(subindent, f))

if __name__ == "__main__":
    print_tree('.')
