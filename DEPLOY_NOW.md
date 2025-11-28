# 🚀 Deploy Your Portfolio - Step by Step

Your code is committed and ready to push! Follow these steps:

## Step 1: Create GitHub Repository

### Option A: Using GitHub CLI (if installed)
```bash
gh repo create portfolio --public --source=. --remote=origin --push
```

### Option B: Using GitHub Website (Recommended)
1. Go to https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Description: "My personal portfolio website"
4. Choose **Public**
5. **DO NOT** initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Push to GitHub

After creating the repo on GitHub, you'll see commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push the code
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/hrishikeshverma/portfolio.git
git push -u origin main
```

## Step 3: Deploy to Vercel (Easiest & Free)

### Why Vercel?
- ✅ Made by Next.js creators
- ✅ Zero configuration needed
- ✅ Automatic deployments on push
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Free custom domain support

### Deploy Steps:

1. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" or "Login"
   - Choose "Continue with GitHub"

2. **Import Repository**
   - Click "Add New..." → "Project"
   - Find your `portfolio` repository
   - Click "Import"

3. **Configure (Auto-detected)**
   - Framework Preset: **Next.js** ✅ (auto-detected)
   - Root Directory: `./` ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `.next` ✅
   - Install Command: `npm install` ✅
   
   **No changes needed!** Just click "Deploy"

4. **Wait for Deployment**
   - Takes 1-2 minutes
   - You'll see a progress bar
   - ✅ Build successful!

5. **Your Site is Live!**
   - You'll get a URL like: `portfolio-username.vercel.app`
   - Click "Visit" to see your live site
   - Share this URL with anyone!

## Step 4: Add Custom Domain (Optional)

### Free Vercel Domain
You already have: `your-project.vercel.app`

### Custom Domain (if you own one)
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `hrishikeshverma.com`)
4. Follow DNS configuration instructions
5. Wait for DNS propagation (5-30 minutes)

### Get a Free Domain
- **Freenom**: Free domains (.tk, .ml, .ga)
- **GitHub Student Pack**: Free .me domain (if you're a student)

## Alternative Deployment Options

### Netlify (Also Great)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
cd portfolio
netlify deploy --prod
```

### GitHub Pages (Static Export)
1. Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }
};
```

2. Build and deploy:
```bash
npm run build
# Push to gh-pages branch
```

## Automatic Deployments

Once connected to Vercel:
- Every `git push` triggers a new deployment
- Preview deployments for branches
- Production deployment for `main` branch

## Environment Variables (If Needed Later)

In Vercel dashboard:
1. Go to Project Settings
2. Click "Environment Variables"
3. Add any secrets (API keys, etc.)

## Your Deployment Checklist

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Sign up for Vercel
- [ ] Import repository to Vercel
- [ ] Wait for deployment
- [ ] Visit your live site!
- [ ] Share the URL

## Quick Commands Summary

```bash
# 1. Add GitHub remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 2. Push to GitHub
git push -u origin main

# 3. Go to vercel.com and import your repo
# That's it! Your site will be live in 2 minutes.
```

## Need Help?

- **GitHub Issues**: Check if remote URL is correct
- **Vercel Issues**: Check build logs in dashboard
- **Domain Issues**: Wait for DNS propagation

## What's Next?

After deployment:
1. Update your resume with the live URL
2. Share on LinkedIn
3. Add to your GitHub profile README
4. Send to potential employers

---

**Ready to deploy? Start with Step 1!** 🚀
