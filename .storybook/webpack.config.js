const path = require('path');

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(js|jsx)$/,
    loader: require.resolve('babel-loader'),
    exclude: /(node_modules|dist)/,
    options: {
      presets: [require.resolve('babel-preset-react-app')]
    }
  });

  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve('./')
  ];

  config.resolve.extensions.push('.js', '.jsx');
  return config;
};
