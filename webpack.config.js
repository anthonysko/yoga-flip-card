const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');

module.exports = {
  entry: './public/script.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inlineSource: '.(js|css)$', // Inline JS and CSS
    }),
    new InlineSourceWebpackPlugin({
      compress: true,
      rootpath: './public',
    }),
  ],
};