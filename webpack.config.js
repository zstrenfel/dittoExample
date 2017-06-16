var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
	devtool: 'eval-source-map',

	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8000',
		'webpack/hot/only-dev-server',
		'./scripts/index.js'
	],

	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '/build'),
		publicPath: '/'
	},

	module: {
		rules: [
			{
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/
			},
			{
				test: /\.(scss|css)$/,
				loader: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader?name=./assets/images/[name].[ext]',
				exclude: /node_modules/
			}, 
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]',
				exclude: /node_modules/
			}

		]
	},


	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),
	    new HtmlWebpackPlugin({
	    	template: 'scripts/index.template.ejs',
	    	inject: 'body'
	    })
	],

	devServer: {
		clientLogLevel: "warning",
		hot: true,
		contentBase: path.join(__dirname, '/build'),
		publicPath: '/',
		compress: true, 
		port: 8000,
		watchContentBase: true,
		overlay: false,
		historyApiFallback: true
	},

    stats: {
    	colors: true,
    	errorDetails: true,
    	moduleTrace: true
    }
}

module.exports = config