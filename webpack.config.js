const path = require('path');

module.exports = {
  entry: './app.js',
  module: {
    rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.(png|svg|jpg|gif)$/, use: 'file-loader' },
        { test: /\.(js)/, use: 'babel-loader' }
    ]
  },
  output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js'
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
}