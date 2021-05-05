# !/usr/bin sh

# 發生錯誤時執行終止指令
set -e

# 操作

git add .
git commit -m "update"
git push origin master
GIT_USER=Albertnotes USE_SSH=true yarn deploy

# 操作指令
# sh updateSh.sh