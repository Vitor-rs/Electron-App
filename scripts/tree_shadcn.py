import os

def print_tree(startpath):
    root_guide = os.path.join(startpath, '.agent', 'shadcn_guide')
    if not os.path.exists(root_guide):
        print(f"Error: {root_guide} not found.")
        return

    for root, dirs, files in os.walk(root_guide):
        # Allow all dirs inside shadcn_guide
        level = root.replace(startpath, '').count(os.sep)
        indent = '|   ' * (level)
        print('{}{}/'.format(indent, os.path.basename(root)))
        subindent = '|   ' * (level + 1)
        for f in files:
            print('{}{}'.format(subindent, f))

if __name__ == "__main__":
    print_tree('.')
