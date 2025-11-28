# Customization Guide

## Quick Updates

### 1. Personal Links
Update in `components/Hero.tsx` and `components/Contact.tsx`:
- GitHub URL
- LinkedIn URL  
- Email address

### 2. Add More Projects
Edit `components/Projects.tsx` and add to the `projects` array:
```typescript
{
  title: "Your Project",
  description: "Description here",
  tech: ["Tech1", "Tech2"],
  highlights: ["Achievement 1", "Achievement 2"]
}
```

### 3. Update Experience
Edit `components/Experience.tsx` to add/modify work experience.

### 4. Modify Skills
Edit `components/Skills.tsx` to update your skill categories.

### 5. Change Colors
The site uses Tailwind CSS. Main colors used:
- Blue: `blue-400`, `blue-500`
- Purple: `purple-400`, `purple-500`, `purple-600`
- Green: `green-400`, `green-500`
- Gray: `gray-700`, `gray-800`, `gray-900`, `gray-950`

Search and replace these in components to change the theme.

### 6. Add Resume Download
Add a button in the Hero section:
```tsx
<a 
  href="/resume.pdf" 
  download
  className="px-8 py-3 bg-white text-gray-900 rounded-full"
>
  Download Resume
</a>
```

Place your resume.pdf in the `public` folder.

## Advanced Customization

### Add Blog Section
Create `components/Blog.tsx` and add to `app/page.tsx`

### Add Analytics
Install analytics package and add to `app/layout.tsx`

### Contact Form Backend
Integrate with services like:
- Formspree
- EmailJS
- Netlify Forms
- Custom API route
