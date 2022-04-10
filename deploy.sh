#!/usr/bin/env sh

set -e
npm run build
cd dist

echo 'www.todolist.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:Yumashev-Nikita/todolist.git master:gh-pages

cd -