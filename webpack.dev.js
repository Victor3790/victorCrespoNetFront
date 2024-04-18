const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: [path.resolve(__dirname,'src/devEntry.js')],
    post:  [path.resolve(__dirname,'src/devPostEntry.js')]
  },
  mode: 'development',
  devServer: {
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /\.html$/,
        use: [ {loader:'html-loader-srcset'} ]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              //outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src/index.html'),
      chunks: ['index'],
      filename: './index.html'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'src/post.html'),
      chunks: ['post'],
      filename: './post.html'
    })
  ]
};
