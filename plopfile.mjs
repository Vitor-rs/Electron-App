export default function (plop) {
  // Feature generator
  plop.setGenerator('feature', {
    description: 'Create a new feature module',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Feature name (kebab-case):',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/index.ts',
        templateFile: 'plop-templates/feature/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/components/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/hooks/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/stores/{{kebabCase name}}.store.ts',
        templateFile: 'plop-templates/feature/store.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/schemas/{{kebabCase name}}.schema.ts',
        templateFile: 'plop-templates/feature/schema.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/services/{{kebabCase name}}.service.ts',
        templateFile: 'plop-templates/feature/service.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{kebabCase name}}/types/index.ts',
        templateFile: 'plop-templates/feature/types.ts.hbs',
      },
    ],
  })

  // Component generator
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (PascalCase):',
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name (leave empty for shared):',
      },
    ],
    actions: (data) => {
      const basePath = data.feature
        ? `src/features/${data.feature}/components`
        : 'src/shared/components'

      return [
        {
          type: 'add',
          path: `${basePath}/{{pascalCase name}}/{{pascalCase name}}.tsx`,
          templateFile: 'plop-templates/component/component.tsx.hbs',
        },
        {
          type: 'add',
          path: `${basePath}/{{pascalCase name}}/index.ts`,
          templateFile: 'plop-templates/component/index.ts.hbs',
        },
      ]
    },
  })

  // Store generator
  plop.setGenerator('store', {
    description: 'Create a new Zustand store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Store name (kebab-case):',
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name (leave empty for shared):',
      },
    ],
    actions: (data) => {
      const basePath = data.feature
        ? `src/features/${data.feature}/stores`
        : 'src/shared/stores'

      return [
        {
          type: 'add',
          path: `${basePath}/{{kebabCase name}}.store.ts`,
          templateFile: 'plop-templates/store/store.ts.hbs',
        },
      ]
    },
  })
}
