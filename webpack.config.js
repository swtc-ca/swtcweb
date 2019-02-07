const path=require('path')

module.exports = {
	mode: 'development',
	//entry: './src',
	//output: {
	//	path: path.resolve(__dirname, 'dist'),
	//	//filename: 'bundle.js',
	//	//publicPath: '/assets/',
	//	//library: 'MyLibrary',
	//	//libraryTarget: 'umd',
	//},
	//context: __dirname,
	//module: {},
	//resolve: {
	//	aliasFields: ["browser"],
	//	mainFields: ['browser', 'module', 'main']
	//},
	//performance: {},
	//stats: "errors-only",
	//devServer: {},
	//plugins: [],
	node: {
		Buffer: true,
		crypto: true,
	},
	//target: 'web',
	//externals: [{
	//	'jingtum': 'jingtum',
	//	'base': 'base',
	//}],
}
