# complete deploy to github pages
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b dev
git add -A
git commit -m 'deploy'

#git push -f git@github.com:lunafrancisco.github.io/github-actions/