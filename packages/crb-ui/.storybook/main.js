module.exports = {
  core: {
    builder: {
      name: 'webpack5',
      options: {
        fsCache: true
      }
    }
  },
  stories: ['../src/**/*stories.mdx', '../src/**/*stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react'
};
