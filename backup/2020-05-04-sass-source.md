---
slug: 2020/05/04/sass
title: Sass Source Map
author: Albert
author_title: Front End Engineer
author_url: https://github.com/Albertnotes
author_image_url: https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4
tags: [sass]
---

## 前言

這是一篇筆者參加六角學院 - 網頁直播切版班擔任志工
撰寫的 Sass Source Map 意義

<!--truncate-->

## 開始前注意事項

- Live Sass Compiler 預設產生 Source Map 是打開的

![](https://i.imgur.com/Iv9vK9P.png)

- 課程所提供的 Gulp 有引入 Source Map 套件

![](https://i.imgur.com/HGCvO8c.png)

> 使用 Gulp 不能用 Sass 寫法哦，編譯副檔名並不包含 `.sass`

以上注意事項，不用設定
僅告知我們提供的編譯方式有提供 Source Maps

## 名詞介紹

Source Map 翻譯可以稱為 "來源地圖"，也就是它的程式碼來源是從哪裡來的，功用是提供編譯後的 css 檔案，找到編譯前的位置。

## 使用方式

![](https://i.imgur.com/5Ki8CAD.png)

由上圖可以發現以下兩點

- 編譯後的檔案，最後一行有以下的註解

```
/*# sourceMappingURL=all.min.css.map */
```

- 資料夾裡出現 all.min.css.map 檔案，這個就是對應上方的註解

> 以上會是自動產生，註解別刪、兩隻檔案不要分開的話，Source map 的功能就還在。

## 影片介紹

接下來是以修改 CSS 去介紹 `map` 檔案的效果。

> 請注意有聲音:speaker:

[影片連結](https://youtu.be/bSAK2MFNcTY)

## 圖解

> 以下圖示是影片總結

- 使用 Source map 的話，Chrome 檔案指向**編譯前**的 `.scss`

![](https://i.imgur.com/1rTfOjN.png)

- 未使用 Source map 的話，Chrome 檔案指向**編譯後**的 `.css`

![](https://i.imgur.com/RHt0pCZ.jpg)
