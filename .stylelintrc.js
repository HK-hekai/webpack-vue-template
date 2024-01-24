module.exports = {
	root: true,
	defaultSeverity: 'error',
	extends: [
		'stylelint-config-standard', // 配置stylelint拓展插件
		'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
		'stylelint-config-standard-scss', // 配置stylelint scss插件
		'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
		'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
		// 'stylelint-config-prettier', // 配置stylelint和prettier兼容
	],
	// plugins: ['stylelint-order', 'stylelint-scss'],
	plugins: ['stylelint-order'], // stylelint-order是CSS属性排序插件
	// 不同格式的文件指定自定义语法
	overrides: [
		{
			files: ['**/*.scss', '*.scss'],
			customSyntax: 'postcss-scss',
		},
		{
			files: ['**/*.(html|vue)'],
			customSyntax: 'postcss-html',
		},
	],
	rules: {
		// 允许空源
		// 'no-empty-source': null,
		// 'color-hex-case': 'lower',
		// 'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
		// // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		// 'no-descending-specificity': null,
		// // 不允许未知函数
		// 'function-no-unknown': null,
		// // 指定类选择器的模式
		// 'selector-class-pattern': null,
		// // 禁止空源码
		// 'no-empty-source': null,
		// // 指定字符串使用单引号
		// 'string-quotes': 'single',
		// // 禁止未知的@规则
		// 'at-rule-no-unknown': [
		// 	true,
		// 	{
		// 		ignoreAtRules: [
		// 			'tailwind',
		// 			'apply',
		// 			'variants',
		// 			'responsive',
		// 			'screen',
		// 			'function',
		// 			'if',
		// 			'each',
		// 			'include',
		// 			'mixin',
		// 		],
		// 	},
		// ],
		// // 指定@规则名的大小写
		// 'at-rule-name-case': 'lower',
		// // 指定缩进
		// indentation: [
		// 	2,
		// 	{
		// 		severity: 'warning',
		// 	},
		// ],
		// // 禁止未知的伪类选择器
		// 'selector-pseudo-class-no-unknown': [
		// 	true,
		// 	{
		// 		ignorePseudoClasses: ['global', 'v-deep', 'deep'],
		// 	},
		// ],
		// // 禁止未知的伪元素选择器
		// 'selector-pseudo-element-no-unknown': [
		// 	true,
		// 	{
		// 		ignorePseudoElements: ['v-deep', ':deep'],
		// 	},
		// ],
		'order/properties-order': [
			'position',
			'top',
			'right',
			'bottom',
			'left',
			'z-index',
			'display',
			'justify-content',
			'align-items',
			'float',
			'clear',
			'overflow',
			'overflow-x',
			'overflow-y',
			'margin',
			'margin-top',
			'margin-right',
			'margin-bottom',
			'margin-left',
			'padding',
			'padding-top',
			'padding-right',
			'padding-bottom',
			'padding-left',
			'width',
			'min-width',
			'max-width',
			'height',
			'min-height',
			'max-height',
			'font-size',
			'font-family',
			'font-weight',
			'border',
			'border-style',
			'border-width',
			'border-color',
			'border-top',
			'border-top-style',
			'border-top-width',
			'border-top-color',
			'border-right',
			'border-right-style',
			'border-right-width',
			'border-right-color',
			'border-bottom',
			'border-bottom-style',
			'border-bottom-width',
			'border-bottom-color',
			'border-left',
			'border-left-style',
			'border-left-width',
			'border-left-color',
			'border-radius',
			'text-align',
			'text-justify',
			'text-indent',
			'text-overflow',
			'text-decoration',
			'white-space',
			'color',
			'background',
			'background-position',
			'background-repeat',
			'background-size',
			'background-color',
			'background-clip',
			'opacity',
			'filter',
			'list-style',
			'outline',
			'visibility',
			'box-shadow',
			'text-shadow',
			'resize',
			'transition',
		],
	},
};
