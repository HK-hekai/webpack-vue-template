## webpack-vue-init

### 介绍

webpack+vue 项目初始化

### Node版本和包管理器工具

v21.3.0 + yarn

### 技术栈

- ⚡️ Vite 3[2] - 构建工具（就是快！）

- 🖖 Vue 3[3] - 渐进式 JavaScript 框架
- 🚦 Vue Router[4] - 官方路由管理器
- 📦 Pinia[5] - 值得你喜欢的 Vue Store
- 💻 TDesign[6] - TDesign 适配桌面端的组件库
- 🎨 Less[7] - CSS 预处理器
- 🔗 Axios[8] - 一个基于 promise 的网络请求库，可以用于浏览器和 node.js
- 🧰 Husky[9] + Lint-Staged[10] - Git Hook 工具
- 🛡️ EditorConfig[11] + ESLint[12] + Prettier[13] + Stylelint[14] - 代码规范
- 🔨 Commitizen[15] + Commitlint[16] - 提交规范
- 💡 GitHub Actions[17] - 自动部署

### 项目搭建

#### 初始化项目

1. 安装依赖

   ```bash
   yarn add webpack webpack-cli vue -D
   ```

2. 编写`webpack.config.js`配置文件

#### 集成 Vue Router 路由工具

1. 安装依赖

   ```
   yarn add vue-router@4
   ```

2. 创建路由配置文件

   在 `src/router` 目录下新建 `index.js` 文件与 `modules` 文件夹

   ```
   └── src/
       ├── router/
       	├── modules/  // 路由模块
           ├── index.js  // 路由配置文件
   ```

   关于路由表，建议根据功能的不同来拆分到 `modules` 文件夹中，好处是：

   - 方便后期维护；

   - 减少 Git 合并代码冲突可能性

3. 挂载路由配置

   在 `main.js` 文件中挂载路由配置

#### 集成 Pinia 全局状态管理工具

1. 安装依赖

   ```
   yarn add pinia
   ```

2. 创建仓库配置文件

   在 `src/store` 目录下新建 `index.js` 文件与 `modules` 文件夹

   ```
   └── src/
       ├── store/
       	├── modules/  // 仓库模块
           ├── index.js  // 仓库配置文件
   ```

3. 挂载 Pinia 配置

   在 `main.js` 文件中挂载 `Vuex` 配置

#### 集成 TDesign Vue Next 组件库

1. 安装依赖

   ```
   yarn add yarn add tdesign-vue-next
   ```

2. 按需引入

   仍需在项目引入组件库的少量全局样式变量

   ```js
   import { createApp } from 'vue';
   // 引入组件库的少量全局样式变量
   import 'tdesign-vue-next/es/style/index.css';
   
   const app = createApp(App);
   ```

   使用 `unplugin-vue-components` 和 `unplugin-auto-import` 来实现自动导入：

   ```bash
   yarn add unplugin-vue-components unplugin-auto-import -D
   ```

   在 webpack对应的配置文件 `webpack.config.js` 添加上述插件

#### 集成 Axios HTTP 工具

1. 安装依赖

   ```
   yarn add axios
   ```

2. 请求配置

   在 `utils` 目录下创建 `request.js` 文件，配置好适合自己业务的请求拦截和响应拦截：

   ```
   └── src/
   	├── api  // 接口
       ├── utils/
           ├── request.js  // axios 请求库二次封装
   ```

### 代码规范化

**EditorConfig + ESLint + Prettier + Stylelint** 组合来实现代码规范化。

这样做带来好处：

- 解决团队之间代码不规范导致的可读性差和可维护性差的问题。
- 解决团队成员不同编辑器导致的编码规范不统一问题。
- 提前发现代码风格问题，给出对应规范提示，及时修复。
- 减少代码审查过程中反反复复的修改过程，节约时间。
- 自动格式化，统一编码风格，从此和脏乱差的代码说再见。

#### 集成 EditorConfig 配置

**EditorConfig**[24] 主要用于统一不同 IDE 编辑器的编码风格。

在项目根目录下添加 `.editorconfig` 文件

#### 集成 ESLint 配置

`ESLint` 是针对 EScript 的一款代码检测工具，它可以检测项目中编写不规范的代码，如果写出不符合规范的代码会被警告。

由此我们就可以借助于 ESLint 强大的功能来统一团队的编码规范。

1. 安装依赖

   - **`ESLint`**[26] - ESLint 本体
   - **`eslint-define-config`**[27] - 改善 ESLint 规范编写体验
   - **`eslint-plugin-vue`**[28] - 适用于 Vue 文件的 ESLint 插件
   - **`eslint-config-airbnb-base`**[29] - Airbnb JavaScript 风格指南
   - **`eslint-plugin-import`**[30] - 使用 `eslint-config-airbnb-base` 时必须安装的前置插件
   - **`vue-eslint-parser`**[31] - 使用 `eslint-plugin-vue` 时必须安装的 ESLint 解析器

   ```
   yarn add eslint eslint-define-config eslint-config-airbnb-base eslint-plugin-import eslint-plugin-vue vue-eslint-parser -D
   ```

2. 创建 ESLint 配置文件

   在项目根目录创建 `.eslintrc.js` 文件

3. 创建 ESLint 过滤规则

   在项目根目录添加一个 `.eslintignore` 文件

#### 集成 Prettier 配置

**Prettier**[33] 是一款强大的代码格式化工具，支持 JavaScript、TypeScript、CSS、SCSS、Less、JSX、Angular、Vue、GraphQL、JSON、Markdown 等语言，基本上前端能用到的文件格式它都可以搞定，是当下最流行的代码格式化工具。

1. 安装依赖

   ```
   yarn add prettier -D
   ```

2. 创建 Prettier 配置文件

   Prettier 支持多种格式的**配置文件**[34]，比如 `.json`、`.yml`、`.yaml`、`.js`等。

   在项目根目录创建 `.prettierrc.js` 文件

3. 创建 Prettier 过滤规则

   在项目根目录添加一个 `.prettierignore` 文件

#### 解决 Prettier 和 ESLint 冲突

本项目中的 ESLint 配置使用了 Airbnb JavaScript 风格指南校验，其规则之一是_代码结束后面要加分号_，而在 Prettier 配置文件中加了_代码结束后面不加分号_配置项，从而冲突了。

解决两者冲突问题，需要用到 **eslint-plugin-prettier** 和 **eslint-config-prettier**。

- `eslint-plugin-prettier` 将 Prettier 的规则设置到 ESLint 的规则中
- `eslint-config-prettier` 关闭 ESLint 中与 Prettier 中会发生冲突的规则

最后形成优先级：`Prettier 配置规则` > `ESLint 配置规则`

1. 安装依赖

   ```
   yarn add eslint-plugin-prettier eslint-config-prettier -D
   ```

2. 修改 ESLint 配置文件

   修改 `.eslintrc.js` 文件，在 `extends` 中添加 `plugin:prettier/recommended` 规则（此规则一定要加在最后）。

   ```
   module.exports = {
     extends: [
       'airbnb-base',
       'eslint:recommended',
       'plugin:vue/vue3-essential',
       'plugin:vue/vue3-recommended',
       'plugin:prettier/recommended'
     ],
   }
   ```

#### 集成 Stylelint 配置

Stylelint 是一个强大、先进的 CSS 代码检查器（linter），可以帮助你规避 CSS 代码中的错误并保持一致的编码风格。

1. 安装依赖

   - **`Stylelint`**[36] - Stylelint 本体
   - **`stylelint-config-prettier`**[37] - 关闭 Stylelint 中与 Prettier 中会发生冲突的规则
   - **`stylelint-config-standard`**[38] - Stylelint 官方推荐规则
   - **`stylelint-config-recommended-vue`**[39] - 检验 vue 文件中的样式
   - **`stylelint-order`**[40] - CSS 属性顺序规则插件
   - [stylelint](https://link.juejin.cn?target=https%3A%2F%2Fstylelint.io%2F): `css`样式lint工具
   - [postcss](https://link.juejin.cn?target=https%3A%2F%2Fwww.postcss.com.cn%2F): 转换`css`代码工具
   - [postcss-less](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fshellscape%2Fpostcss-less): 识别`less`语法
   - [postcss-html](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fgucong3000%2Fpostcss-html): 识别html/vue 中的`<style></style>`标签中的样式
   - [stylelint-config-standard](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fstylelint%2Fstylelint-config-standard): `Stylelint`的标准可共享配置规则，详细可查看官方文档
   - [stylelint-config-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Fstylelint-config-prettier): 关闭所有不必要或可能与`Prettier`冲突的规则
   - [stylelint-config-recommended-less](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fssivanatarajan%2Fstylelint-config-recommended-less): `less`的推荐可共享配置规则，详细可查看官方文档
   - [stylelint-config-standard-vue](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fota-meshi%2Fstylelint-config-standard-vue): lint`.vue`文件的样式配置
   - [stylelint-less](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fssivanatarajan%2Fstylelint-less): `stylelint-config-recommended-less`的依赖，`less`的`stylelint`规则集合
   - [stylelint-order](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fhudochenkov%2Fstylelint-order): 指定样式书写的顺序，在`.stylelintrc.js`中`order/properties-order`指定顺序

   ```
   yarn add stylelint stylelint-config-prettier stylelint-config-standard stylelint-config-recommended-vue stylelint-order -D
   ```

2. 创建 Stylelint 配置文件

   在项目根目录创建 `.stylelintrc.js` 文件

3. 创建 Stylelint 过滤规则

   在项目根目录添加一个 `.stylelintignore` 文件

4. 启用 Vue 文件支持

   `Stylelint` v14 版本默认不支持 vue 文件中的 style 代码自动检测，详情查看**官方迁移指南**[41]

   安装依赖

   - **`stylelint-config-html`**[42] - 解析 vue 文件
   - **`postcss-html`**[43] - 使用 `stylelint-config-html` 依赖的模块
   - **`postcss-less`**[44] - 对 less 文件进行解析[postcss-scss- 对 scss 文件进行解析]

   ```
   yarn add stylelint-config-html postcss-html postcss-scss -D
   ```

5. 修改 Stylelint 配置文件

   修改 `.stylelintrc.js` 文件，添加如下配置：

   ```js
   module.exports = {
   	root: true,
   	defaultSeverity: 'error',
   	extends: [
   		'stylelint-config-standard', // 配置stylelint拓展插件
   		'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
   		'stylelint-config-standard-scss', // 配置stylelint scss插件
   		'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
   		'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
   		// 'stylelint-config-prettier', // 配置stylelint和prettier兼容，14版本可以，最新版本规则有变化
   	],
   	// plugins: ['stylelint-order', 'stylelint-scss'],
   	plugins: ['stylelint-order'], // stylelint-order是CSS属性排序插件
   	// 不同格式的文件指定自定义语法
   	// overrides: [
   	// 	{
   	// 		files: ['**/*.scss', '*.scss'],
   	// 		customSyntax: 'postcss-scss',
   	// 	},
   	// 	{
   	// 		files: ['**/*.(html|vue)'],
   	// 		customSyntax: 'postcss-html',
   	// 	},
   	// ],
   	rules: {
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
   ```

6. 修改 Visual Studio Code 工作区配置

   Visual Studio Code 在 `settings.json` 设置文件中，增加以下代码：

   ```
   {
     "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"]
   }
   ```

#### 集成 husky

在项目中已集成 ESLint 和 Prettier，在编码时，这些工具可以对代码进行实时校验，在一定程度上能有效规范所写代码，但有些人可能觉得这些限制很麻烦，从而选择视“提示”而不见，依旧按自己编程风格来写代码，或者干脆禁用掉这些工具，开发完成就直接把代码提交到了仓库，日积月累，ESLint 也就形同虚设。

所以，还需要做一些限制，让没通过 ESLint 检测和修复的代码禁止提交，从而保证仓库代码都是符合规范的。

为了解决这个问题，需要用到 Git Hook，在本地执行 `git commit` 的时候，就对所提交的代码进行 ESLint 检测和修复（即执行 `eslint \--fix`），如果这些代码没通过 ESLint 规则校验，则禁止提交。

实现这一功能，需要借助 **husky**[45] + **lint-staged**[46] 。

**安装依赖**

```shell
yarn add husky -D
```

在`package.json`中的`script`中添加一条脚本命令

```json
{
    "scripts": {
        "prepare": "husky install"
    },
}
```

该命令会在`pnpm install`之后运行，这样其他克隆该项目的人就在装包的时候就会自动执行该命令来安装`husky`。

执行`pnpm prepare`，这个时候你会发现多了一个`.husky`目录。

然后使用`husky`命令添加`pre-commit`钩子，运行

```shell
yarn husky add .husky/pre-commit "yarn eslint && yarn format && yarn stylelint"
```

执行完上面的命令后，会在`.husky`目录下生成一个`pre-commit`文件

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

yarn eslint && yarn format && yarn stylelint
```

现在当我们执行`git commit`的时候就会执行`pnpm lint`与`pnpm format`，当这两条命令出现报错，就不会提交成功。以此来保证提交代码的质量和格式。

但是又存在一个问题：有时候明明只改动了一两个文件，却要对所有的文件执行 `eslint \--fix`等。

假如这是一个历史项目，在中途配置了 ESLint 规则，那么在提交代码时，也会对其他未修改的“历史”文件都进行检查，可能会造成大量文件出现 ESLint 错误，显然这不是我们想要的结果。

所以只需要用 ESLint 修复此次写的代码，而不去影响其他的代码，此时需要借助 **lint-staged** 工具。

#### 集成 lint-staged

lint-staged 可以让你在 Git 暂存（staged）区域中的文件上运行脚本，通常用于在提交前对代码进行格式化、静态检查等操作。

可以在项目中使用 lint-staged 配合 husky 钩子来执行针对暂存文件的脚本。

**安装依赖**

```
yarn add lint-staged -D
```

**新增配置**

在 `package.json` 里增加 `lint-staged` 配置项：

```
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --fix"
    ],
    "*.vue": [
      "prettier --write",
      "eslint --fix",
      "stylelint --fix"
    ],
    "*.{html,vue,vss,sass,less}": [
      "prettier --write",
      "stylelint --fix"
    ],
    "package.json": [
      "prettier --write"
    ],
    "*.md": [
      "prettier --write"
    ]
  },
}
```

注意： 最好不要加 --fix 参数，某些场景下自动修复会导致代码莫名其妙的bug，如果自动修复了你可能都不知道就合了

#### 集成 Commitizen 实现规范提交

多人协作项目中，在提交代码环节，也存在一种情况：不能保证每个人对提交信息的准确描述，因此会出现提交信息紊乱、风格不一致的情况。

如果 `git commit` 的描述信息精准，在后期维护和 Bug 处理时会变得有据可查，项目开发周期内还可以根据规范的提交信息快速生成开发日志，从而方便我们追踪项目和把控进度。

**安装依赖**

```
yarn add commitizen cz-conventional-changelog -D
```

**指定适配器**

修改 `package.json` 文件，添加 `config` 指定使用的适配器

```
{
  "scripts": {},
  "config": {
      "commitizen": {
        "path": "./node_modules/cz-conventional-changelog"
      }
    }
}
```

使用 **Commitizen**

以前我们提交代码都是 `git commit -m "xxx"`，现在改为 `git cz`，然后按照终端操作提示，逐步填入信息，就能自动生成规范的 commit message。

#### **自定义配置提交说明**

`git cz` 终端操作提示都是英文的，如果想改成中文的或者自定义这些配置选项，我们使用 **cz-customizable** 适配器

**安装依赖**

```
yarn add cz-customizable -D
```

**指定适配器**

修改 `package.json` 中的 `config.commitizen` 字段为：

```json
"config": {
  "commitizen": {
    "path": "./node_modules/cz-customizable"
  }
}
```

##### 使用 cz-customizable

在项目根目录下创建 `.cz-config.js` 文件，然后按照官方提供的[示例](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fleoforfree%2Fcz-customizable%2Fblob%2Fmaster%2Fcz-config-EXAMPLE.js)来配置。

#### 集成 commitlint 验证提交规范

在“代码规范”章节，我们已经讲到过，尽管制定了规范，但在多人协作的项目中，总有些人依旧我行我素，因此提交代码这个环节，我们也增加一个限制：**只让符合 Angular 规范的 commit message 通过**，我们借助 @commitlint/config-conventional 和 @commitlint/cli 来实现。

**安装依赖**

- [`@commitlint/cli`](https://link.juejin.cn/?target=https%3A%2F%2Fcommitlint.js.org) - Commitlint 本体
- [`@commitlint/config-conventional`](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fcommitlint) - 通用提交规范

```
yarn add @commitlint/config-conventional @commitlint/cli -D
```

**配置**

在项目根目录创建 `commitlint.config.js` 文件，并填入以下内容：

```
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

使用 husky 命令在 `.husky` 目录下创建 `commit-msg` 文件，并在此执行验证命令：

```
yarn husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```
