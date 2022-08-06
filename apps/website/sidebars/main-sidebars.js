/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  pluginsGeneralSidebar: [{
    label: 'Introduction',
    id: "plugins/intro",
    type: 'doc'
  }],
  migrate2typescriptSidebar: [
    {
      type: 'doc',
      id: 'plugins/migrate-to-typescript/getting-started'
    },
    {
      type: "category",
      label: "Rules",
      link: {
        type: 'generated-index',
      },
      items: [
        'plugins/migrate-to-typescript/rules/index',
        'plugins/migrate-to-typescript/rules/no-commonjs-dynamic-require',
        'plugins/migrate-to-typescript/rules/no-commonjs-exports',
        'plugins/migrate-to-typescript/rules/no-commonjs-module-exports',
        'plugins/migrate-to-typescript/rules/no-esm-dynamic-import',
        'plugins/migrate-to-typescript/rules/no-esm-export-default',
        'plugins/migrate-to-typescript/rules/no-require',
        {
          type: 'doc',
          id: 'plugins/migrate-to-typescript/rules/esm-consistent-type-import',
        }
      ],
    },
    {
      type: "category",
      label: "Configs",
      link: {type: 'doc',id: 'plugins/migrate-to-typescript/configs/index'},
      items: [
        {
          dirName: "plugins/migrate-to-typescript/configs",
          type: "autogenerated",
        },
      ],
    },
  ],
  eslintPluginSideBar: [
    {
      type: 'doc',
      id: 'plugins/eslint-plugin/getting-started'
    },
    {
      type: "category",
      label: "Configs",
      link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
      items: [
        {
          type: "category",
          label: "Eslint",
          link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
          items: [
            'plugins/eslint-plugin/configs/eslint',
          ]
        },
        {
          type: "category",
          label: "ESM",
          link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
          items: [
            'plugins/eslint-plugin/configs/esm-javascript',
            'plugins/eslint-plugin/configs/esm-js-with-ts',
            'plugins/eslint-plugin/configs/esm-typescript',
            'plugins/eslint-plugin/configs/esm-opinionated-no-internal-modules',
          ]
        },
        {
          type: "category",
          label: "Jest",
          link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
          items: [
            'plugins/eslint-plugin/configs/jest',
            'plugins/eslint-plugin/configs/jest-for-typescript',
            'plugins/eslint-plugin/configs/jest-formatting',
            'plugins/eslint-plugin/configs/jest-opinionated-consistent-it',
            'plugins/eslint-plugin/configs/jest-opinionated-consistent-test',
            'plugins/eslint-plugin/configs/jest-opinionated-max-nested-describe',
          ]
        },
        {
          type: "category",
          label: "Node",
          link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
          items: [
            'plugins/eslint-plugin/configs/node-js',
            'plugins/eslint-plugin/configs/node-js-with-ts',
            'plugins/eslint-plugin/configs/node-ts',
            'plugins/eslint-plugin/configs/node-plus-jest-js',
            'plugins/eslint-plugin/configs/node-plus-jest-js-with-ts',
            'plugins/eslint-plugin/configs/node-plus-jest-ts',
          ]
        },
        {
          type: "category",
          label: "Promise",
          link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
          items: [
            'plugins/eslint-plugin/configs/promise',
          ]
        },
        {
          type: "category",
          label: "React",
          link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
          items: [
            'plugins/eslint-plugin/configs/react-js',
            'plugins/eslint-plugin/configs/react-js-opinionated-jsx',
            'plugins/eslint-plugin/configs/react-js-with-ts',
            'plugins/eslint-plugin/configs/react-ts',
            'plugins/eslint-plugin/configs/react-ts-opinionated',
            'plugins/eslint-plugin/configs/react-plus-jest-js',
            'plugins/eslint-plugin/configs/react-plus-jest-js-with-ts',
            'plugins/eslint-plugin/configs/react-plus-jest-ts',
          ]
        },
        {
          type: "category",
          label: "Typescript-eslint",
          link: {type: 'doc', id: 'plugins/eslint-plugin/configs/index'},
          items: [
            'plugins/eslint-plugin/configs/ts-eslint-opinionated-naming-convention',
            'plugins/eslint-plugin/configs/ts-eslint-with-type-checking',
            'plugins/eslint-plugin/configs/ts-eslint',
          ],
        },
      ],
    },
  ]
  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
