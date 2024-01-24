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
		// 定义环境变量给源代码使用(cross-env定义的环境变量是给webpack使用的)，
		new DefinePlugin({
			// 解决vue3页面警告问题
			__VUE_OPTIONS_API__: true,
			__VUE_PROD_DEVTOOLS__: false,
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
			eslintrc: {
				enabled: false, // 1、改为true用于生成eslint配置。2、生成后改回false，避免重复生成消耗
			},
		}),
		Components({
			resolvers: [
				TDesignResolver({
					library: 'vue-next',
				}),
			],
		}),
	],
	devtool: 'cheap-module-source-map',
	devServer: {
		host: 'localhost', // 启动服务器域名
		port: '3000', // 启动服务器端口号
		open: true, // 是否自动打开浏览器
		// 解决createWebHistory的页面刷新404问题
		// 上线时解决方案：需要在服务器端配置，将所有的路由请求都返回首页，再由前端代码进行路由的匹配和处理。
		historyApiFallback: true,
		proxy: {
			'/api': {
				target: 'https://www.fastmock.site/mock/371af8ed18f7a6713e78a50f99b88f66/api',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
};
