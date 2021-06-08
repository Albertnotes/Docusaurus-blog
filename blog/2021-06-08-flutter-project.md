---
slug: 2021/06/08/flutter-ui
title: Flutter-UI
author: Albert
author_title: Front End Engineer
author_url: https://github.com/Albertnotes
author_image_url: https://avatars.githubusercontent.com/u/57343359?s=460&u=196d3b133abafbd8294ac0cfb8713961291bb1a3&v=4
tags: [flutter]
---

[The Flutter Way 版面參考來源 ](https://youtu.be/LN668OAUrK4)

<!--truncate-->

## 佈局

1. 集中 App 切版的常數，與 Web 佈局概念相似
2. 建立一個 lib/constants.dart 存放顏色、間距等數據

```
import 'package:flutter/material.dart';
```

3. 片中有引入 material library, [深入學習請點我](https://api.flutter.dev/flutter/material/material-library.html)
4. 接著建立
   - lib/components 共有元件
   - lib/screens (相當於 Web 會建立 page 頁面)
   - lib/screens/home/components, home 路由底下的私有元件(作邏輯拆分)
5. 建立畫面
   - lib/screens/home/components
     - 新增 home_screen.dart

:::note
Flutter 由多個部件所組成，則它們的根部件都需要 MaterialApp 才能正確顯示。
從設計稿轉換由 App 會有很多通用性的骨架，例如 Bar、content、footer 垂直從上到下。
這時你可能會做成自己的元件，隨著需求變化不斷地重構。
影片中 Flutter 就有提供 Scaffold Class 可以使用。
:::
