const webpackConfig = require('webpack-vue-config')

if (process.env.NODE_ENV === 'production') {
	module.exports = webpackConfig.prod
}
module.exports = webpackConfig.dev
