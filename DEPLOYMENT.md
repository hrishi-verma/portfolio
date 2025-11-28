# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## Environment Variables

If needed, add these in your deployment platform:

- `NEXT_PUBLIC_GITHUB_URL` - Your GitHub profile URL
- `NEXT_PUBLIC_LINKEDIN_URL` - Your LinkedIn profile URL

## Other Platforms

### Netlify
```bash
npm run build
```
Build command: `npm run build`
Publish directory: `.next`

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## Custom Domain

After deployment, add your custom domain in your platform's settings.

## Performance Tips

- Images are optimized automatically by Next.js
- Static pages are pre-rendered at build time
- Enable caching headers for better performance
