const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const outPath = path.resolve(__dirname, 'dist')
const entryPath = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', entryPath + '/index.js'],
  output: {
    path: outPath,
    filename: 'index.js',
    library: 'fl'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 9000,
    hot: true
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader', options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader',
              options: {
                ident: 'postcss',
                plugins: (loader) => [
                  require('autoprefixer')()
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('css/base.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: entryPath + '/index.html'
    })
  ]
}
