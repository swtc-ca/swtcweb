const path=require('path')

module.exports = {
	mode: 'development',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000
	}
	//target: 'web',
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
	//node: {
	//	Buffer: true,
	//	crypto: true,
	//},
	//externals: [{
	//	'jingtum': 'jingtum',
	//	'base': 'base',
	//}],
}
