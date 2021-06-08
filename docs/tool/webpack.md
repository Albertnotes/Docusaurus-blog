---
id: 04777850-69f0-49e9-867d-914199cf60e7
title: '[模組] webpack'
sidebar_label: '[模組] webpack'
slug: /
---

Webpack 前端打包工具(提供模組化開發模式)

## 環境

1. [nvm 工具 (nodejs 版控工具)](https://github.com/coreybutler/nvm-windows/releases)
2. npm 套件管理工具

### nvm 常用指令

```
nvm install <version>
nvm list
nvm uninstall <version>
nvm version
```

## 開始前套件

```
npm init -y
npm install webpack webpack-cli --save-dev
```

## 概念

webpack 透過編寫設定檔，去設定一套自動化指令的工具，核心概念為注入。
設定檔會有 entry 的屬性，表示告知 webpack 進入點從哪一隻 js 開始，並且透過這支檔案的相關 import 找到其他 js，
藉由 Webpack 引入的相關 Preprocess 進行編譯，接著可以設定 output 的屬性，得到編譯後的檔案。

## 實作

### 起手式

- webpack.config.js

```js
const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
};
```

:::note

- `path.resolve()` 是 nodejs 相對路徑 轉為絕對路徑的方式。
- \_\_dirname 是 nodejs 環境變數，指當前執行文件資料夾的完整路徑。
- server 環境的不同，使用相對路徑可能會有資料夾層級不同的問題，故盡量使用絕對路徑。

:::

### 生產、開發模式

關於 [mode](https://webpack.js.org/configuration/mode/#root)
為 webpack 配置模式，可以提升執行效能。

- development 開發模式 => 會以編譯效能為考量不進行壓縮 webpack --mode development
- production 生產模式 => 會盡可能的壓縮程式碼 webpack --mode production

上述是在指令執行指定模式，另外也可以在設定檔撰寫。

```js
const path = require('path');

module.exports = {
    mode: 'development'
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
};
```

但是會有寫死的問題，可以利用 nodejs 的環境變數 `NODE_ENV=development` 把它在指令的前面

`NODE_ENV=development webpack`

```js
const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
};
```

:::important

跨平台上 windows 必須要安裝另外的套件 `npm install cross-env --save-dev`

Ps. Mac 環境下會自動忽略，故不會有問題
:::

指令改如下:  
`cross-env NODE_ENV=development webpack`

### 複數 entry

```js
const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, 'src'),
	entry: {
		index: './index.js'),
		bar: './bar.js'),
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
};
```

:::note

- 之前提到絕對路徑的用意，上述使用 context 指定 entry 的目錄，所以後續只需要用相對路徑指向當前資料夾即可。
- filename 的 [name] 分別對應 entry 的 key。

:::

## 套件區

### style-loader、css-loader

```
npm install --save-dev css-loader
```

```js
module.exports = {
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
};
```

:::important

請注意 Loader 類的套件是由後往前的執行順序
該套件可以讀取純 css 、則 style-loader 提供 JS import
:::

### extract-text-webpack-plugin

舊版套件，僅為了未來可能遇到故留檔。
適用產出獨立的 css

[Github](https://github.com/webpack-contrib/extract-text-webpack-plugin)

:::important

請注意如果要支援 webpack 4
npm 需要安裝 `npm install --save-dev extract-text-webpack-plugin@next`
:::

### mini-css-extract-plugin

[Github](https://github.com/webpack-contrib/mini-css-extract-plugin)
適用產出獨立的 css

```
npm install --save-dev mini-css-extract-plugin
```

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	plugins: [new MiniCssExtractPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
};
```

### file-loader

透過進入點 JS import/require() 解析 file 後複製到 output

`npm install file-loader --save-dev`

撰寫正則驗證檔案類型可被搬運

```js
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
			options:{
				name: '[path][name].[ext]', // 原檔案資料夾結構、名稱、副檔名完全相同的進行產出
			}
          },
        ],
      },
    ],
  },
};
```

## Reference

- [webpack 文件](https://webpack.js.org/guides/getting-started/)
- [Loaders 一覽表](https://webpack.js.org/loaders/)
- [Plugins 一覽表](https://webpack.js.org/plugins/)
