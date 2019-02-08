var nodeExternals = require('webpack-node-externals')
//const path=require('path')
module.exports = {
	mode: 'development',
	target: 'node',
	externals: [ nodeExternals() ]
}
