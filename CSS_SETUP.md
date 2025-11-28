# CSS Setup Explanation

## Tailwind CSS v4 (Latest)

This project uses **Tailwind CSS v4**, which has a different setup than v3.

### Key Differences from v3

#### ❌ Old Way (v3)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### ✅ New Way (v4)
```css
@import "tailwindcss";
```

### Configuration

**No `tailwind.config.js` needed!** 

Instead, configuration is done directly in CSS using the `@theme` directive:

```css
@theme {
  --color-background: #0a0a0f;
  --color-foreground: #f8fafc;
}
```

### How It Works

1. **PostCSS Plugin**: `@tailwindcss/postcss` processes the CSS
2. **Import Statement**: `@import "tailwindcss"` loads Tailwind
3. **Theme Variables**: Custom values defined in `@theme` block
4. **Utility Classes**: All standard Tailwind classes work as expected

### Files Involved

```
portfolio/
├── postcss.config.mjs       # PostCSS configuration
│   └── Uses @tailwindcss/postcss plugin
├── app/
│   ├── globals.css          # Tailwind import + custom styles
│   └── layout.tsx           # Imports globals.css
└── package.json             # Dependencies
    ├── tailwindcss: ^4
    └── @tailwindcss/postcss: ^4
```

### What's in globals.css

```css
@import "tailwindcss";        // Loads Tailwind CSS

@theme {                      // Custom theme configuration
  --color-background: #0a0a0f;
  --color-foreground: #f8fafc;
  // ... more custom values
}

@keyframes fadeIn { ... }     // Custom animations
@keyframes slideUp { ... }
// ... more keyframes
```

### Utility Classes Available

All standard Tailwind classes work:
- Layout: `flex`, `grid`, `container`
- Spacing: `p-4`, `m-6`, `gap-8`
- Colors: `bg-gray-950`, `text-white`
- Typography: `text-xl`, `font-bold`
- Effects: `hover:scale-105`, `transition-all`
- And 1000+ more...

### Custom Animations

Defined in `globals.css` and used via classes:
- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up from bottom
- `animate-slide-in-left` - Slide in from left
- `animate-slide-in-right` - Slide in from right

### Why v4?

Benefits of Tailwind CSS v4:
- ⚡ **Faster**: Better performance
- 🎯 **Simpler**: No config file needed
- 🔧 **Flexible**: CSS-based configuration
- 🆕 **Modern**: Latest features and improvements

### Verification

To verify Tailwind is working:

1. **Check the page**: Dark background, styled text
2. **Inspect element**: See Tailwind classes applied
3. **Browser console**: No CSS errors
4. **Build output**: Should compile successfully

### Troubleshooting

If styles aren't loading:

```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

If still not working:
- Check `app/layout.tsx` imports `./globals.css`
- Verify `postcss.config.mjs` has the plugin
- Hard refresh browser (Cmd+Shift+R)

### Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Next.js + Tailwind](https://nextjs.org/docs/app/building-your-application/styling/tailwind-css)
