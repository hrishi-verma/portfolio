# Style Test Checklist

Open http://localhost:3000 and verify these visual elements:

## ✅ Hero Section
- [ ] Dark background with subtle blue/purple gradient
- [ ] Large white heading "Hi, I'm"
- [ ] "Hrishikesh Verma" has blue-to-purple gradient text
- [ ] Gray subtitle text
- [ ] Three circular social media buttons (GitHub, LinkedIn, Email)
- [ ] Blue-purple gradient "Learn More" button
- [ ] Animated scroll indicator at bottom

## ✅ About Section
- [ ] Slightly lighter dark background
- [ ] White heading "About Me"
- [ ] Semi-transparent card with gray border
- [ ] Three stat cards showing GPA, Experience, Students Mentored
- [ ] Blue, purple, and green accent colors on stats

## ✅ Skills Section
- [ ] Six category cards in a grid
- [ ] Each card has blue heading
- [ ] Skill tags with gray background
- [ ] Cards have hover effect (scale up, border changes)

## ✅ Experience Section
- [ ] Timeline with vertical line in center
- [ ] Blue dots on timeline
- [ ] Experience cards alternate left/right
- [ ] Cards have gray background with borders
- [ ] Hover effect on cards

## ✅ Projects Section
- [ ] Four project cards in 2x2 grid
- [ ] Purple accent color
- [ ] Highlight badges with purple background
- [ ] Tech stack tags with gray background
- [ ] Cards scale up on hover

## ✅ Achievements Section
- [ ] Three cards with icons
- [ ] Green accent color
- [ ] Icon backgrounds are green/transparent
- [ ] Hover effects work

## ✅ Contact Section
- [ ] Contact form with dark inputs
- [ ] Blue border on input focus
- [ ] Gradient submit button
- [ ] Social links with icons
- [ ] Footer text at bottom

## 🎨 General Styling
- [ ] Smooth scrolling between sections
- [ ] All text is readable (white/gray on dark)
- [ ] Buttons have hover effects
- [ ] Page is responsive (try resizing browser)
- [ ] No layout shifts or broken elements

## 🐛 If Something Looks Wrong

1. **No colors at all** → Tailwind CSS not loading
   - Solution: Clear `.next` folder and restart

2. **Wrong colors** → Check browser dark mode settings
   - This site is dark mode only

3. **Layout broken** → Browser cache issue
   - Solution: Hard refresh (Cmd+Shift+R)

4. **Animations not working** → JavaScript not loaded
   - Check browser console for errors
