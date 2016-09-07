const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),

  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  module: {
    loaders: [
      { test: /\.js$/, include: path.resolve(__dirname, './src'), loader: 'babel' },
      { test: /\.css$/, include: path.resolve(__dirname, './src'), loader: 'style!css?modules&localIdentName=[path][name]---[local]' },
      { test: /\.css$/, exclude: path.resolve(__dirname, './src'), loader: 'style!css' },
    ],
  },
};
