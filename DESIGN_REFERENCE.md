# Design Reference

## Color Palette

### Background Colors
- `bg-gray-950` - Main background (#0a0a0f) - Very dark, almost black
- `bg-gray-900` - Section backgrounds (#111827) - Slightly lighter
- `bg-gray-800` - Card backgrounds (#1f2937) - Medium dark
- `bg-gray-700` - Borders and accents (#374151)

### Text Colors
- `text-white` - Primary text (#ffffff)
- `text-gray-300` - Body text (#d1d5db)
- `text-gray-400` - Secondary text (#9ca3af)
- `text-gray-500` - Muted text (#6b7280)

### Accent Colors
- **Blue**: `blue-400` (#60a5fa), `blue-500` (#3b82f6)
- **Purple**: `purple-400` (#c084fc), `purple-500` (#a855f7), `purple-600` (#9333ea)
- **Green**: `green-400` (#4ade80), `green-500` (#22c55e)

### Gradients
- Hero name: `from-blue-400 to-purple-500`
- Buttons: `from-blue-500 to-purple-600`
- Background: `from-blue-900/20 via-gray-950 to-purple-900/20`

## Typography

### Font
- **Family**: Inter (Google Font)
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Sizes
- Hero H1: `text-5xl md:text-7xl` (48px → 72px)
- Section H2: `text-4xl` (36px)
- Card H3: `text-xl` or `text-2xl` (20px → 24px)
- Body: `text-lg` (18px)
- Small: `text-sm` (14px)

## Spacing

### Sections
- Vertical padding: `py-20` (80px top/bottom)
- Horizontal padding: `px-4` (16px left/right)
- Max width: `max-w-6xl` or `max-w-4xl`

### Cards
- Padding: `p-6` (24px all sides)
- Gap between cards: `gap-6` (24px)
- Border radius: `rounded-xl` (12px)

## Effects

### Borders
- Default: `border border-gray-700`
- Hover: `hover:border-blue-500/50` or `hover:border-purple-500/50`

### Shadows
- Button hover: `hover:shadow-lg hover:shadow-purple-500/50`

### Transitions
- All: `transition-all`
- Colors: `transition-colors`
- Duration: Default (150ms) or `duration-1000` (1000ms)

### Hover Effects
- Scale: `hover:scale-105` (5% larger)
- Transform: `hover:transform`

### Animations
- Fade in: `animate-fade-in` (0.6s)
- Slide up: `animate-slide-up` (0.6s)
- Bounce: `animate-bounce` (scroll indicator)

## Layout Patterns

### Hero Section
```
Full screen height (min-h-screen)
Centered content (flex items-center justify-center)
Gradient background overlay
Z-index layering for depth
```

### Card Pattern
```
Semi-transparent background (bg-gray-800/50)
Backdrop blur (backdrop-blur-sm)
Border (border border-gray-700)
Rounded corners (rounded-xl)
Padding (p-6)
Hover effects (scale + border color change)
```

### Timeline Pattern
```
Vertical line in center (absolute positioning)
Dots on line (rounded-full with border)
Alternating left/right content
Responsive: stacked on mobile
```

### Grid Layouts
- Skills: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Projects: `grid-cols-1 md:grid-cols-2`
- Achievements: `grid-cols-1 md:grid-cols-3`

## Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (≥ 768px)
- **Desktop**: `lg:` (≥ 1024px)

## Interactive Elements

### Buttons
- Primary: Gradient background, white text, rounded-full
- Hover: Shadow glow, scale up
- Icons: Circular, gray background, hover effect

### Form Inputs
- Background: `bg-gray-800/50`
- Border: `border-gray-700`
- Focus: `focus:border-blue-500`
- Text: White with gray placeholder

### Links
- Default: Gray text
- Hover: Blue color change
- Transition: Smooth color change

## Accessibility

- Semantic HTML (section, nav, main)
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for icons (via aria-labels)
- Focus states on interactive elements
- Sufficient color contrast (WCAG AA)
- Smooth scroll behavior

## Performance

- Static generation (SSG)
- Optimized fonts (next/font)
- Lazy loading (React.lazy for heavy components)
- Minimal JavaScript
- CSS purging (automatic with Tailwind)
