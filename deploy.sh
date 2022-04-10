# !/usr/bin/env sh

npm run build
cd dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Yumashev-Nikita/todolist.git master:gh-pages

cd -