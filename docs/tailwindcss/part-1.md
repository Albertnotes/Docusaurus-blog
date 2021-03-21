---
id: tailwindcss-part1
title: Tailwindcss 入門
sidebar_label: 入門篇
slug: /tailwindcss/part1
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

- 可以安裝 postcss-cli 這是官方文件沒有提到的

:::

## 配置

### 設定檔

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

### theme

[詳細文件](https://tailwindcss.com/docs/theme)
