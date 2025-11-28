#!/bin/bash

# Portfolio GitHub Setup Script
# This script helps you push your portfolio to GitHub

echo "🚀 Portfolio GitHub Setup"
echo "========================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Error: Not a git repository"
    exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  You have uncommitted changes. Committing them now..."
    git add .
    git commit -m "chore: prepare for deployment"
fi

# Get GitHub username
echo "📝 Enter your GitHub username:"
read github_username

if [ -z "$github_username" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

# Get repository name (default: portfolio)
echo ""
echo "📝 Enter repository name (press Enter for 'portfolio'):"
read repo_name
repo_name=${repo_name:-portfolio}

# Construct GitHub URL
github_url="https://github.com/${github_username}/${repo_name}.git"

echo ""
echo "🔗 GitHub URL: $github_url"
echo ""

# Check if remote already exists
if git remote | grep -q "^origin$"; then
    echo "⚠️  Remote 'origin' already exists. Removing it..."
    git remote remove origin
fi

# Add remote
echo "➕ Adding GitHub remote..."
git remote add origin "$github_url"

echo ""
echo "✅ Remote added successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a repository named: $repo_name"
echo "3. Make it Public"
echo "4. DO NOT initialize with README"
echo "5. Click 'Create repository'"
echo ""
echo "Then run:"
echo "   git push -u origin main"
echo ""
echo "After pushing, deploy on Vercel:"
echo "   https://vercel.com/new"
echo ""
