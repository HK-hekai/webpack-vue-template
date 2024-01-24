const path = require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 获取处理样式的Loaders
const getStyleLoaders = (preProcessor) => {
	return [
		// MiniCssExtractPlugin.loader,
		'vue-style-loader', // 与MiniCssExtractPlugin.loader冲突，但是react可以使用
		'css-loader',
		{
			// 处理css兼容性问题，还需要配合package.json中的"browserslist"来指定兼容性程度
			loader: 'postcss-loader',
			options: {
				postcssOptions: {
					plugins: [
						'postcss-preset-env', // 能解决大多数样式兼容性问题
					],
				},
			},
		},
		preProcessor,
	].filter(Boolean); // 过滤undefined的值
};

module.exports = {
	entry: './src/main.js',
	module: {
		rules: [
			{
				// 用来匹配 .css 结尾的文件
				test: /\.css$/,
				// use 数组里面 Loader 执行顺序是从右到左
				use: getStyleLoaders(),
			},
			{
				test: /\.less$/,
				// loader: 'xxx', // 只能使用一个loader
				use: getStyleLoaders('less-loader'),
			},
			{
				test: /\.s[ac]ss$/,
				use: getStyleLoaders({
					loader: 'sass-loader',
					options: {
						// 在这里设置共享的Sass变量
						additionalData: `@import "@/assets/styles/variables.scss";`,
					},
				}),
			},
			{
				test: /\.styl$/,
				use: getStyleLoaders('stylus-loader'),
			},
			// 处理图片等静态资源
			{
				test: /\.(png|svg|jpe?g|gif|webp)$/,
				type: 'asset', // 相当于 file-loader , 将文件转化成 Webpack 能识别的资源，其他不做处理,小于8kb的文件会自动转为base64
				// type: 'asset/resource', // 相当于 url-loader , 将文件转化成 Webpack 能识别的资源，同时小于某个大小的资源会处理成 data URI 形式
				parser: {
					dataUrlCondition: {
						maxSize: 6 * 1024,
					},
				},
				generator: {
					filename: 'assets/images/[name].[hash][ext][query]',
				},
			},
			// 处理字体资源
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				// 不添加resource，文件过小会自动转base64
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[hash:8][ext][query]',
				},
			},
			// 处理其他资源，如音视频等
			{
				test: /\.(map4|map3|avi)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/media/[hash:8][ext][query]',
				},
			},
			// {
			// 	test: /\.js$/,
			// 	exclude: /node_modules/, // 排除node_modules代码不编译
			// 	use: [
			// 		{
			// 			loader: 'babel-loader',
			// 			options: {
			// 				cacheDirectory: true, // 开启babel编译缓存
			// 				cacheCompression: false // 缓存文件不要压缩
			// 			}
			// 		}
			// 	]
			// },
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			/* cacheGroups 继承 splitChunks 里的所有属性的值，
      如 chunks、minSize、minChunks、maxAsyncRequests、maxInitialRequests，
      我们还可以在 cacheGroups 中重新赋值，覆盖 splitChunks 的值
       */
			cacheGroups: {
				// 抽离第三方插件
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					// chunks: 'all',
					reuseExistingChunk: true, // 如果当前的 chunk 包含的模块，已经被之前引入的 vendor chunk 引入，那么直接引用之前引入的
				},
			},
		},
		runtimeChunk: 'single',
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'], // 自动补全文件扩展名，让jsx可以使用
		alias: {
			'@': path.resolve(__dirname, 'src/'),
		},
	},
};
