const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: {
      //Styles
      bootstrap: [path.resolve(__dirname,'src/wp/bootstrap.js')],
      main: [path.resolve(__dirname,'src/wp/main.js')],
      home: [path.resolve(__dirname,'src/wp/home.js')],
      post: [path.resolve(__dirname,'src/wp/post.js')]
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'distWp'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css'
      }),
      new CleanWebpackPlugin()
    ]
};
