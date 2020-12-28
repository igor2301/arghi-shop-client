const path = require('path');
const webpackReference = require('../config/webpack.config');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    const webpackConfig = webpackReference();
    config.module.rules.push({
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      ...webpackConfig.resolve.alias
    };
    return config;
  }
};
