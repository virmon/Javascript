const path = require('path');

module.exports = {
  entry: ['./app.js', './app.css'],
  module: {
    rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
        { test: /\.(js)/, use: 'babel-loader' }
    ]
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}