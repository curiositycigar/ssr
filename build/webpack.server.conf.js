/**
 * Created by YOU on 2018/1/15.
 */
const path = require('path')
const utils = require('./utils')
function resolve(dir) {
  return path.join(__dirname, '..', dir || '')
}
const projectRoot = path.resolve(__dirname, '..');
module.exports = {
  target: 'node', // 这里必须是node，因为打包完成的运行环境是node
  entry: resolve('src/server-main.js'),
  output: {
    libraryTarget: 'commonjs2', // !different
    // 打包出的路径
    path: resolve('build'),
    // 打包最终的文件名
    filename: 'bundle.server.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    // 因为使用webpack2，这里必须是rules，如果使用use，会报错：vue this._init is not a function
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve(),
        // 这里会把node_modules里面的东西排除在外，提高打包效率
        exclude: /node_modules/,
      }
    ]
  },
}
