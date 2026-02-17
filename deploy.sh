#!/usr/bin/env bash
# Tiny Shadows — Deploy to GitHub Pages
# Usage: ./deploy.sh

set -e

echo "🔨 Building site..."
npm run build

echo "🚀 Deploying to GitHub Pages (gh-pages branch)..."
git add _site -f
git stash

# Use git worktree to push _site to gh-pages without affecting main branch
if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
  git worktree add gh-pages-deploy origin/gh-pages
else
  git worktree add --orphan gh-pages-deploy gh-pages
fi

cp -r _site/. gh-pages-deploy/
cd gh-pages-deploy
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin HEAD:gh-pages
cd ..
git worktree remove gh-pages-deploy --force

echo "✅ Deployed! Your site will be live at:"
echo "   https://$(git remote get-url origin | sed 's/.*github.com[:/]\([^/]*\)\/.*/\1/').github.io/tiny-shadows/"
