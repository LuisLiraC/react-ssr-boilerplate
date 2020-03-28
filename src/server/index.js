require('@babel/register')({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env', '@babel/preset-react']
})

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif', 'jpeg'],
  name: 'assets/[hash].[ext]',
  publicPath: '/'
})

require('./server')

