const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: 'base.css',
		}),
		new MiniCssExtractPlugin({
			filename: 'footer.css',
		}),
		new MiniCssExtractPlugin({
			filename: 'form.css',
		}),
		new MiniCssExtractPlugin({
			filename: 'header.css',
		}),
		new MiniCssExtractPlugin({
			filename: 'messages.css',
		}),
		new MiniCssExtractPlugin({
			filename: 'resets.css',
		}),
	],
};
