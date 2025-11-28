# Troubleshooting Guide

## CSS Not Loading?

### Quick Fix
1. Stop the dev server (Ctrl+C)
2. Delete the `.next` folder: `rm -rf .next`
3. Restart: `npm run dev`

### Verify Tailwind is Working
Open http://localhost:3000 - you should see:
- Dark background (almost black)
- White text
- Blue and purple gradient on name
- Smooth animations on scroll

### Common Issues

**Issue: Styles not applying**
- Clear browser cache (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- Check browser console for errors
- Ensure `globals.css` is imported in `app/layout.tsx`

**Issue: Build fails**
- Run `npm install` to ensure all dependencies are installed
- Check Node version (should be 18+)

**Issue: Port 3000 in use**
- Kill the process: `lsof -ti:3000 | xargs kill -9`
- Or use a different port: `npm run dev -- -p 3001`

## Expected Appearance

### Colors
- Background: Very dark gray (#0a0a0f)
- Text: White/light gray
- Accents: Blue (#3b82f6) and Purple (#a855f7)
- Cards: Semi-transparent dark gray with borders

### Animations
- Hero section fades in on load
- Sections have hover effects
- Smooth scroll between sections
- Cards scale up slightly on hover

## Still Having Issues?

1. Check the browser console (F12) for errors
2. Verify all files are saved
3. Try a hard refresh (Cmd+Shift+R)
4. Restart your code editor

## Tailwind CSS v4

This project uses Tailwind CSS v4 (latest version) which has a different configuration than v3:
- No `tailwind.config.js` file needed
- Uses `@import "tailwindcss"` in CSS
- Configuration via `@theme` directive
