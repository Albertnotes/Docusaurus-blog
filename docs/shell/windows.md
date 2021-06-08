---
id: ae2c572d-c5e9-49b6-9daa-450424eb33d4
title: '[指令] windows'
sidebar_label: '[指令] windows'
slug: /shell/ae2c572d-c5e9-49b6-9daa-450424eb33d4
---

## xcopy

### 多路徑 for 搭配 xcopy

```sh
for %a in (
    "C:\Program Files\Microsoft SQL Server\MSSQL.1\MSSQL\Data\city2.mdf"
    "C:\Program Files\Microsoft SQL Server\MSSQL.1\MSSQL\Data\city2_log.ldf"
    ) do (
        xcopy /s /d "%a" "\\SUD107DB2\DBData"
    )
```

- [參數設定](https://docs.microsoft.com/zh-tw/windows-server/administration/windows-commands/xcopy)

## Del

### 參數

`<names>`

- 指定一或多個檔案或目錄的清單。 您可以使用萬用字元來刪除多個檔案。 如果指定目錄，則會刪除目錄內的所有檔案。
- /p 在刪除指定的檔案之前提示您確認。
- /f 強制刪除唯讀檔案。
- /s 從目前目錄和所有子目錄中刪除指定的檔案。 顯示正在刪除之檔案的名稱。
- /q 指定安靜模式。 系統不會提示您確認刪除。
- 如果您在參數中指定特定資料夾 `<names>` ，則也會一併刪除所有包含的檔案。 例如，如果您想要刪除 \work 資料夾中的所有檔案，請輸入：

```sh
del \work
```
