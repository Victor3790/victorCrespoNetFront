'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    index: [path.resolve(__dirname,'src/devEntry.js')],
    post:  [path.resolve(__dirname,'src/devPostEntry.js')],
    archive: [path.resolve(__dirname,'src/devArchiveEntry.js')],
    notFound: [path.resolve(__dirname,'src/dev404Entry.js')],
  },
  /*output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },*/
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html', filename: 'index.html' }),
    new HtmlWebpackPlugin({ template: './src/post.html', filename: 'post.html' }),
    new HtmlWebpackPlugin({ template: './src/archive.html', filename: 'archive.html' }),
    new HtmlWebpackPlugin({ template: './src/404.html', filename: '404.html' }),
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader',
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader',
            options: {
              sassOptions: {
                // Optional: Silence Sass deprecation warnings. See note below.
                silenceDeprecations: [
                  //'mixed-decls',
                  'color-functions',
                  'global-builtin',
                  'import'
                ],
              }
            }
          }
        ]
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
     },
    ]
  },
  target: 'web',
}
