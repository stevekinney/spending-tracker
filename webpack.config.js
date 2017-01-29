const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: [
      'babel-polyfill',
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      './src/index.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel?' + JSON.stringify({
          cacheDirectory: true,
          plugins: [
            'transform-runtime',
          ],
          presets: ['es2015', 'es2017', 'stage-0', 'react'],
          env: {
            production: {
              presets: ['react-optimize']
            }
          }
        }), 'eslint'],
        exclude: /node_modules/
      }
    ],
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
  },
};
