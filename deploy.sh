#!/usr/bin/env bash
# Tiny Shadows — Deploy to GitHub Pages
# Usage: ./deploy.sh

set -e

echo "🔨 Building site..."
npm run build

echo "🚀 Deploying to GitHub Pages (gh-pages branch)..."

# Use git worktree to push _site to gh-pages without affecting main branch
if git show-ref --verify --quiet refs/remotes/origin/gh-pages; then
  git worktree add gh-pages-deploy origin/gh-pages
else
  git worktree add --orphan -b gh-pages gh-pages-deploy
fi

cp -r _site/. gh-pages-deploy/
cd gh-pages-deploy
git add -A
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M')"
git push origin HEAD:gh-pages
cd ..
git worktree remove gh-pages-deploy --force

echo "✅ Deployed! Your site will be live at:"
REMOTE_URL=$(git remote get-url origin)
GITHUB_USER=$(echo "$REMOTE_URL" | sed 's/.*github.com[:/]\([^/]*\)\/.*/\1/')
REPO_NAME=$(echo "$REMOTE_URL" | sed 's/.*\/\([^/]*\)\.git$/\1/' | sed 's/.*\/\([^/]*\)$/\1/')
echo "   https://${GITHUB_USER}.github.io/${REPO_NAME}/"
