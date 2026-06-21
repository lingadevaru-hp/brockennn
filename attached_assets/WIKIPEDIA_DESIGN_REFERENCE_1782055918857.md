# Wikipedia Design Reference - Exact Implementation Guide

## Homepage Layout Structure

### Header
- **Logo:** Wikipedia wordmark on left (clickable to homepage)
- **Search Bar:** Centered, full-width search input with "Search" button
- **Top Right:** Donate, Create account, Log in links
- **Language:** Bottom left, language selector
- **Appearance Toggle:** Top right, Light/Dark/Auto toggle

### Main Content (Desktop - 3 Column)
```
[Left Sidebar - Navigation]  [Center - Main Content]  [Right - Sidebar Tools]
- Main Page                  - Welcome section        - Appearance settings
- Contents                   - Featured Article       - Text size
- Current events             - In the news            - Width settings
- Random article             - Did you know
- Help                        - On this day
                             - Recently featured
                             - Article teasers grid
```

### Mobile Layout
- **Header:** Logo + Search bar (full width)
- **Hamburger Menu:** Left side, opens navigation drawer
- **Content:** Full width, single column
- **No sidebars visible** - all hidden behind hamburger

## Color Scheme - EXACT Wikipedia Dark Theme

### Dark Mode (#101418 base)
```
Background:      #101418 (near-black)
Text:            #E8E8E8 (light gray)
Links:           #3366CC (Wikipedia blue - NOT teal/sage)
Link Visited:    #6B4C9A (purple)
Borders:         #404040 (dark gray)
Hover BG:        #1A1A1A (slightly lighter black)
Code BG:         #1A1A1A (dark)
```

### Light Mode
```
Background:      #FFFFFF (white)
Text:            #202122 (dark gray/black)
Links:           #0645AD (Wikipedia blue)
Link Visited:    #0B0080 (purple)
Borders:         #A2A9B1 (light gray)
Hover BG:        #F8F9FA (very light gray)
Code BG:         #F8F9FA (light gray)
```

## Typography - EXACT Wikipedia Style

### Fonts
- **Headings:** Georgia, serif (NOT Fraunces)
- **Body:** -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif
- **Code:** Monospace (monospace)

### Sizes
- **Page Title (H1):** 1.6em (26px), bold
- **Section Heading (H2):** 1.5em (24px), bold, border-bottom
- **Subsection (H3):** 1.3em (20px), bold
- **Body:** 0.875em (14px) on desktop, 1em on mobile
- **Small text:** 0.8em (12px)

## Key Components

### Featured Article Box
- **Background:** Light gray (#F8F9FA light / #1A1A1A dark)
- **Border:** 1px solid border
- **Layout:** Image on left (200px), text on right
- **Title:** Bold, links to article
- **Text:** 2-3 sentences max
- **"Full article..." link:** Bottom right

### Did You Know Box
- **Background:** Light blue (#E7F3FF light / #1A3A52 dark)
- **Layout:** Bullet points with images
- **Format:** "...that [article] [fact]?"
- **Images:** Small thumbnails (100px)

### In The News / On This Day
- **Background:** Light yellow (#FFF8E7 light / #3A3A1A dark)
- **Format:** Bullet list with links
- **No decorative elements**

### Article Teasers Grid
- **Layout:** 2-3 columns on desktop, 1 on mobile
- **Each teaser:**
  - Thumbnail image (if available)
  - Article title (link)
  - 1-2 sentence excerpt
  - "Read more" link

## Navigation - EXACT Wikipedia Behavior

### Desktop
- **Left sidebar:** Always visible, sticky
- **Main nav items:** Main Page, Contents, Current events, Random article, Help
- **Bottom:** Language selection

### Mobile
- **Hamburger menu:** Top left, opens drawer
- **Drawer:** Slides in from left, overlays content
- **Close:** Click outside or X button
- **No sidebar visible** when drawer is closed

## Responsive Breakpoints

### Mobile (<768px)
- Single column layout
- Hamburger menu active
- Full-width content
- Stacked boxes (Featured, Did you know, News)
- Tables scroll horizontally
- Text wraps properly (no word-per-line bug)

### Tablet (768px-1024px)
- 2 columns (content + narrow sidebar)
- Hamburger menu still active
- Boxes in single column

### Desktop (1024px+)
- 3 columns (nav + content + tools)
- All sidebars visible
- Boxes in 2-column grid

## Text Rendering - CRITICAL FIXES

### Paragraph Wrapping
- **Line-height:** 1.6 (generous)
- **Max-width:** 50-60em for readability
- **Word-break:** break-word (prevent overflow)
- **Overflow-wrap:** break-word

### Table Overflow
- **Desktop:** Full width, scroll if needed
- **Mobile:** Horizontal scroll container
- **CSS:** `overflow-x: auto` on table wrapper
- **Font-size:** Reduced on mobile (0.85em)

### Code Blocks
- **Overflow:** Horizontal scroll
- **Padding:** 1em
- **Border:** 1px solid
- **Background:** Darker shade

## Dark Mode Toggle

### Implementation
- **Location:** Top right corner, next to appearance settings
- **Options:** Light / Dark / Auto (system preference)
- **Storage:** localStorage key "mw-user-preferences"
- **CSS:** `.dark` class on `<html>` element
- **Instant:** No page reload

### CSS Variables
```css
:root {
  --color-background: #FFFFFF;
  --color-text: #202122;
  --color-link: #0645AD;
  --color-border: #A2A9B1;
}

.dark {
  --color-background: #101418;
  --color-text: #E8E8E8;
  --color-link: #3366CC;
  --color-border: #404040;
}
```

## Remove These (NOT Wikipedia)
- ❌ Colored callout boxes (blue, yellow, green, red)
- ❌ Heavy shadows
- ❌ Gradients
- ❌ Rounded corners (except subtle 2-4px)
- ❌ Decorative icons
- ❌ Animations on scroll
- ❌ Teal/sage green accents
- ❌ Serif body text

## Keep These (Wikipedia Standard)
- ✅ Blue links (#0645AD light / #3366CC dark)
- ✅ Georgia serif headings
- ✅ Sans-serif body text
- ✅ Thin 1px borders
- ✅ Minimal styling
- ✅ Generous whitespace
- ✅ Clear hierarchy
- ✅ Responsive tables with scroll
- ✅ Hamburger menu on mobile
- ✅ Full-width content on mobile

## Exact Color Values to Use

### Dark Theme (Reference: en.wikipedia.org dark mode)
```
#101418 - Background
#E8E8E8 - Text
#3366CC - Links
#6B4C9A - Visited links
#404040 - Borders
#1A1A1A - Code/Hover background
#E7F3FF - Info box (blue tint)
#FFF8E7 - News box (yellow tint)
```

### Light Theme
```
#FFFFFF - Background
#202122 - Text
#0645AD - Links
#0B0080 - Visited links
#A2A9B1 - Borders
#F8F9FA - Code/Hover background
#E7F3FF - Info box (blue tint)
#FFF8E7 - News box (yellow tint)
```

## Mobile-First Approach

1. **Start mobile:** Single column, hamburger menu, full-width content
2. **Tablet:** Add sidebar when space allows
3. **Desktop:** Full 3-column layout
4. **Always:** Content readable, no horizontal scroll for text, tables scroll if needed

## No Interpretation - Exact Match

This is NOT a "modern interpretation" of Wikipedia. This is the ACTUAL Wikipedia design:
- Same colors (use color picker on en.wikipedia.org)
- Same typography (Georgia + system sans-serif)
- Same layout (3-column desktop, hamburger mobile)
- Same components (featured article, did you know, news boxes)
- Same behavior (dark mode toggle, responsive, no decorations)

Build to this spec exactly. Don't add "improvements" or "modern touches" — Wikipedia's design is already proven and works.
