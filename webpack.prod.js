var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');


var config = {
	entry: './scripts/index.js',
	output: {
		path: path.resolve(__dirname, 'build/'),
		filename: 'bundle.js',
		publicPath: '/',
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
				use: ExtractTextPlugin.extract({
					use: ["css-loader", "sass-loader"],
					fallback: "style-loader"
				})
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loader: 'file-loader?name=/resources/images/[name].[ext]'
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=./assets/fonts/[name].[ext]',
				exclude: /node_modules/
			}
		]
	},

	plugins: [
	    new webpack.LoaderOptionsPlugin({
	      minimize: true,
	      debug: false
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	      beautify: false,
	      mangle: {
	        screw_ie8: true,
	        keep_fnames: true
	      },
	      compress: {
	        screw_ie8: true
	      },
	      comments: false
	    }),
	    new ExtractTextPlugin({filename: 'styles.css', publicPath: '/'}),
	    new HtmlWebpackPlugin({
	    	template: './scripts/index.template.ejs',
	    	inject: 'body'
	    })
  ]
}

module.exports = config;