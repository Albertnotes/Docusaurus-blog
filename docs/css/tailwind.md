---
id: 45ccf4c1-5b1e-4a0c-8e0b-f28dca0e25a3
title: '[框架] tailwind'
sidebar_label: '[框架] tailwind'
slug: /css/45ccf4c1-5b1e-4a0c-8e0b-f28dca0e25a3
---

## 環境

- 安裝 nodejs
- 使用 npm or yarn 安裝 tailwindcss

## Install

- tailwindcss@latest tailwind 本體
- postcss@latest js 轉換 css
- autoprefixer@latest 自動添加前綴支援瀏覽器

```
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

:::note

編譯 CSS 兩種方式

1. 運行自己設定 Webpack
2. 或者 npm install postcss-cli 安裝 CLI 執行 PostCss

:::

## 設定檔

- js 轉換 css => 新增 postcss.config.js

```js
module.exports = {
	plugins: {
		tailwindcss: {},
		autoprefixer: {},
	},
};
```

- 建立 tailwind.config.js

```js
module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {},
	plugins: [],
};
```

上述建立提供快速產生的指令

```
npx tailwindcss init -p
npx tailwindcss init --full // 腳手架產生完整的配置
```

## theme

[詳細文件](https://tailwindcss.com/docs/theme)

- 主題底下的第一層除了 extend(擴展) 以外，都是覆蓋的設定值

```js
theme: {
	// 覆蓋 webpack 預設 gray 的顏色
    colors: {
      gray: colors.coolGray,
    },
	extend: {
		// 新增 colors 顏色的設定 gray
    	colors: {
      		gray: colors.coolGray,
    	},
    }
  }

```

## plugins

### 斷點 Debug

- tailwindcss-debug-screens

:::note
[GitHub 來源](https://github.com/jorenvanhee/tailwindcss-debug-screens) :
隨著瀏覽器縮放，自動於畫面上顯示當前斷點，是相當好用的套件
:::

```
npm install tailwindcss-debug-screens --save-dev
```

```js
// plugins 引入 tailwindcss-debug-screens
module.exports = {
	theme: {
		debugScreens: {
			position: ['top', 'left'],
		},
		extend: {
			...
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
};
```

```html
<body class="debug-screens"></body>
```

## tailwind.css

- tailwind 分為三個部分

```css
/* reset  552 行*/
@tailwind base;

/* 元件 296 行
- container 
- plugins 的 css
 */
@tailwind components;

/* 工具類 class 183,241 行 */
@tailwind utilities;
```

- 使用 `@layer` 指令是告知 Tailwind 要自定義上述三個部分
- 使用 `@apply` 指令是組合 class
- 使用 `@variants` 指令是帶入 css 狀態如 hover focus
- 使用 `@screen` 指令可以指定斷點下生效的 css
- 使用 `@responsive` 指令快速生成預設斷點的 css
  - 註: 搭配 `@variants responsive` 可以產生 css 狀態下，各斷點的效果

```css
@layer base {
	/* 如果有引入字型，則引入點會是在 base */
	@font-face {
		font-family: 'Open Sans';
		src: url('/dist/fonts/Open_Sans/OpenSans-Bold.ttf') format('truetype');
	}

	h1 {
		@apply text-2xl;
	}
	h2 {
		@apply text-xl;
	}
}

@layer components {
	.btn-blue {
		@apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
	}
}

@layer utilities {
	@variants hover, focus {
		.filter-none {
			filter: none;
		}
		.filter-grayscale {
			filter: grayscale(100%);
		}
	}
}
```

:::note

- tailwind 會根據 HTML classname build 有使用到的 css
- 使用斷點的 class => lg:bg-gray
- 使用狀態的 class => hover:shadow-none
- 組合使用一律斷點先開始 => lg:hover:bg-gray

:::

## package.json

- 透過 postcss-cli 編譯如下

```json
"scripts": {
	"build": "postcss tailwind.css -o dist/css/styles.css",
	"watch": "postcss tailwind.css -o dist/css/styles.css --watch"
}
```
