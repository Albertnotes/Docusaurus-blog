---
id: edfb4e08-2758-486c-b963-a37633bb1bf7
title: flutter components
sidebar_label: '[flutter] components'
slug: /flutter/edfb4e08-2758-486c-b963-a37633bb1bf7
---

## AppBar

```
AppBar(
    title: const Text('AppBar Demo'),
),
```

- elevation -> 決定 Z 軸
- leading -> 標題前的 Widget? (IconButton)

## Stateless widget

- 無狀態更新的 widget，即 App 初始化後狀態隨即固定(靜態 widget)，若想改變需要 new 新的 Stateless widget
- 常見的 StatelessWidget 有：
  - Icon
  - Text
  - RaisedButton

## Stateful widget

- 有狀態更新的 widget，即 App 內可無限次數的重繪與更新狀態。
- 常見的 StatefulWidget 有：
  - Radio
  - Form
  - Checkbox

## Stack class

- 堆疊類別可讓子樹於畫面疊加的視覺

## BorderRadius class

- 製作圓角

## Expanded class

- A widget that expands a child of a Row, Column, or Flex so that the child fills the available space.
- 適用於 Row , Column , Flex 盡可能的填滿可用空間
