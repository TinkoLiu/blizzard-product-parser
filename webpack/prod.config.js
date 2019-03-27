const path = require('path')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  bail: true,
  entry: {
    'blizzparser': './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].min.js',
    library: '[name]',
    libraryTarget: 'umd',
    libraryExport: 'default',
    umdNamedDefine: true,
    publicPath: '/'
  },
  target: 'node'
}
