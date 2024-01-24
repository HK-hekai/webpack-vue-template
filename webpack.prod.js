const path = require('path');
const { DefinePlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const { default: AutoImport } = require('unplugin-auto-import/webpack');
const { default: Components } = require('unplugin-vue-components/webpack');
const { TDesignResolver } = require('unplugin-vue-components/resolvers');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].bundle.js',
		clean: true,
		publicPath: '/webpack-vue-template/',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './index.html'),
			title: 'webpack + vue3',
		}),
		// 提取css成单独文件
		new MiniCssExtractPlugin({
			// 定义输出文件名和目录
			filename: 'assets/styles/[name].css',
		}),
		// 定义环境变量
		new DefinePlugin({
			// 解决vue3页面警告问题
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: true,
			__VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true,
		}),
		// 处理Vue
		new VueLoaderPlugin(),
		// 组件库的按需导入
		AutoImport({
			resolvers: [
				TDesignResolver({
					library: 'vue-next',
				}),
			],
			// 解决 import { ref , reactive ..... } from 'vue' 大量引入的问题
			imports: ['vue', 'vue-router', 'pinia'],
		}),
		Components({
			resolvers: [
				TDesignResolver({
					library: 'vue-next',
				}),
			],
		}),
	],
	devtool: 'source-map',
};
