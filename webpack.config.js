const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const outPath = path.resolve(__dirname, 'dist')
const entryPath = path.resolve(__dirname, 'src')

module.exports = {
  mode: 'production',
  entry: ['@babel/polyfill', entryPath + '/index.js'],
  output: {
    path: outPath,
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'fl'

  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
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
    new ExtractTextPlugin('css/base.css')
  ]
}
