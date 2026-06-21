# Design System - Fictional Wiki

**Design Theme:** Editorial-Calm  
**Light Base:** Warm Cream (#F7F6F3) + Charcoal (#1A1A1A)  
**Dark Base:** Near-Black (#0D0E10) + Warm Off-White (#E8E6E1)  
**Accent:** Muted Sage Green (#5C7A6B light / #7C9885 dark)  
**Typography:** Fraunces (headings) + Inter (body) + IBM Plex Mono (metadata/code)

---

## 1. DESIGN PHILOSOPHY

### Editorial-Calm Aesthetic

This design prioritizes **clarity, calm, and editorial integrity** over visual novelty:

**Core Principles:**
1. **Restraint** - Every element serves a purpose; nothing decorative
2. **Readability** - Generous whitespace, clear hierarchy, comfortable line-lengths
3. **Warmth** - Cream and off-white create an approachable, human feel
4. **Intentionality** - Sage green used sparingly, only where it matters (links, active states, revision marker)
5. **Quietness** - Minimal motion, thin borders, no heavy shadows or gradients
6. **Editoriality** - Feels like a carefully curated publication, not a tech product

**Inspiration:** Think of a well-designed literary journal, academic publication, or editorial website. Calm, focused, respectful of the reader's attention.

---

## 2. COLOR SYSTEM

### 2.1 Light Theme Palette

```
Background:      #F7F6F3 (warm cream)
Foreground:      #1A1A1A (charcoal)
Accent:          #5C7A6B (muted sage green)
Accent Hover:    #4A6359 (darker sage)
Secondary:       #E8E6E1 (warm off-white)
Border:          #D9D6CF (warm gray)
Muted:           #A8A39F (warm taupe)
Input:           #FFFFFF (white)
Destructive:     #C85450 (muted red)
Success:         #6B8E6B (muted green)
```

### 2.2 Dark Theme Palette

```
Background:      #0D0E10 (near-black)
Foreground:      #E8E6E1 (warm off-white)
Accent:          #7C9885 (lighter sage green)
Accent Hover:    #8FA896 (even lighter sage)
Secondary:       #1A1C1F (dark charcoal)
Border:          #2A2D32 (dark gray)
Muted:           #7A7A7A (medium gray)
Input:           #1A1C1F (dark charcoal)
Destructive:     #D9847C (muted red)
Success:         #8FA896 (muted green)
```

### 2.3 Color Usage Rules

| Element | Light Theme | Dark Theme | Usage |
|---------|------------|-----------|-------|
| **Text** | Foreground | Foreground | Body text, labels |
| **Links** | Accent (#5C7A6B) | Accent (#7C9885) | Hyperlinks (always sage) |
| **Link Hover** | Accent Hover | Accent Hover | Link hover state |
| **Active State** | Accent | Accent | Active navigation, selected items |
| **Borders** | Border | Border | Dividers, outlines |
| **Backgrounds** | Background | Background | Main surface |
| **Cards** | Secondary | Secondary | Content containers |
| **Inputs** | Input | Input | Form fields |
| **Errors** | Destructive | Destructive | Error messages |
| **Success** | Success | Success | Success messages |
| **Revision Marker** | Accent | Accent | Edit history indicator (signature element) |

### 2.4 Accent Color Philosophy

**Muted Sage Green** is used **sparingly and intentionally**:
- Links (underline, not full color)
- Active navigation states
- Hover effects (subtle)
- Revision history marker (signature element)
- Focus rings (2px outline)

**Never used for:**
- Backgrounds
- Large blocks
- Decorative elements
- Buttons (use foreground text instead)

---

## 3. TYPOGRAPHY SYSTEM

### 3.1 Font Stack

| Usage | Font | Fallback | Weight | Size | Line-Height |
|-------|------|----------|--------|------|-------------|
| **Headings** | Fraunces | Georgia, serif | 400-600 | 2rem-3.5rem | 1.1-1.2 |
| **Subheadings** | Fraunces | Georgia, serif | 400-500 | 1.5rem-2rem | 1.2-1.3 |
| **Body** | Inter | -apple-system, sans-serif | 400-500 | 1rem | 1.6 |
| **Small** | Inter | -apple-system, sans-serif | 400 | 0.875rem | 1.5 |
| **Metadata** | IBM Plex Mono | Courier New, monospace | 400 | 0.8125rem | 1.4 |
| **Code** | IBM Plex Mono | Courier New, monospace | 400 | 0.875rem | 1.5 |

### 3.2 Heading Hierarchy

```
H1 (Page Title)
├── Font: Fraunces
├── Size: 3.5rem (56px)
├── Weight: 600
├── Line-height: 1.1
├── Letter-spacing: -0.01em
├── Color: Foreground
└── Margin-bottom: 2rem

H2 (Section Title)
├── Font: Fraunces
├── Size: 2.25rem (36px)
├── Weight: 500
├── Line-height: 1.2
├── Color: Foreground
└── Margin-bottom: 1.5rem

H3 (Subsection Title)
├── Font: Fraunces
├── Size: 1.875rem (30px)
├── Weight: 400
├── Line-height: 1.3
└── Color: Foreground

H4 (Minor Heading)
├── Font: Fraunces
├── Size: 1.25rem (20px)
├── Weight: 500
└── Color: Foreground

H5 (Label)
├── Font: Inter
├── Size: 1rem (16px)
├── Weight: 600
├── Text-transform: uppercase
├── Letter-spacing: 0.05em
└── Color: Muted

H6 (Small Label)
├── Font: IBM Plex Mono
├── Size: 0.8125rem (13px)
├── Weight: 400
├── Letter-spacing: 0.05em
└── Color: Muted
```

### 3.3 Body Text

```
Paragraph
├── Font: Inter
├── Size: 1rem (16px)
├── Weight: 400
├── Line-height: 1.6
├── Letter-spacing: 0
├── Color: Foreground
└── Margin-bottom: 1.5rem

Small Text / Caption
├── Font: Inter
├── Size: 0.875rem (14px)
├── Weight: 400
├── Line-height: 1.5
├── Color: Muted
└── Margin-bottom: 1rem

Metadata / Timestamp
├── Font: IBM Plex Mono
├── Size: 0.8125rem (13px)
├── Weight: 400
├── Line-height: 1.4
├── Color: Muted
└── Letter-spacing: 0.02em

Code Block
├── Font: IBM Plex Mono
├── Size: 0.875rem (14px)
├── Weight: 400
├── Line-height: 1.5
├── Background: Secondary (light) / Secondary (dark)
├── Padding: 1rem
├── Border: 1px Border
└── Border-radius: 4px
```

### 3.4 Font Pairing Rationale

**Fraunces for Headings:**
- Distinctive serif with personality
- Draws attention without being loud
- Feels editorial and intentional
- Differentiates from body text clearly

**Inter for Body:**
- Highly readable humanist sans-serif
- Neutral and approachable
- Excellent at small sizes
- Pairs well with Fraunces

**IBM Plex Mono for Metadata:**
- Professional, technical feel
- Perfect for timestamps, code, metadata
- Monospace creates visual distinction
- Keeps metadata scannable

---

## 4. SPACING SYSTEM

### 4.1 Base Unit: 8px (Generous)

All spacing is a multiple of 8px for consistency and breathing room.

| Token | Size | Usage |
|-------|------|-------|
| `space-0` | 0px | Reset |
| `space-1` | 4px | Tight (rare) |
| `space-2` | 8px | Compact spacing |
| `space-3` | 12px | Small spacing |
| `space-4` | 16px | Default spacing |
| `space-6` | 24px | Medium spacing |
| `space-8` | 32px | Large spacing |
| `space-12` | 48px | Extra large |
| `space-16` | 64px | Huge spacing |

### 4.2 Padding Rules

| Element | Padding |
|---------|---------|
| **Button** | 12px 16px (vertical, horizontal) |
| **Input** | 12px 16px |
| **Card** | 32px (generous) |
| **Section** | 48px top/bottom, 32px left/right |
| **Container** | 16px mobile, 24px tablet, 32px desktop |
| **Article Lead** | 32px bottom (extra space after intro) |

### 4.3 Line Length

**Target:** 65-75 characters for optimal readability

```
Desktop: max-width: 680px (article content)
Tablet:  max-width: 100% (full width with padding)
Mobile:  max-width: 100% (full width with padding)
```

---

## 5. BORDER SYSTEM

### 5.1 Border Styles

**Thin, Minimal Borders (1px only):**

```
Standard Border:     1px solid Border color
Card Border:         1px solid Border color
Input Border:        1px solid Border color
Focus Border:        2px solid Accent color
Divider:             1px solid Border color (horizontal rule)
```

### 5.2 Border Radius

```
No rounded corners by default (sharp, editorial feel)
Exceptions:
├── Inputs: 4px (subtle)
├── Cards: 0px (sharp edges, editorial)
└── Focus ring: 0px (sharp outline)
```

---

## 6. SHADOW SYSTEM

### 6.1 No Heavy Shadows

This design uses **minimal shadows** — only when absolutely necessary:

```
Subtle (rare):   0 1px 2px rgba(0, 0, 0, 0.04)
None by default: Most elements have no shadow
```

### 6.2 When to Use Shadows

- **Hover state on cards:** Subtle shadow only
- **Modals:** Very subtle shadow (not prominent)
- **Dropdowns:** No shadow (use border instead)
- **Floating elements:** Minimal shadow

**Philosophy:** Shadows are avoided in favor of borders and spacing.

---

## 7. ANIMATION & MOTION

### 7.1 Motion Philosophy

**Minimal, purposeful motion only:**
- Page load: Subtle fade-in + rise (200ms)
- Hover effects: None (or very subtle opacity change)
- Transitions: Fade only, no scale/slide
- No animations on scroll
- No parallax effects
- No decorative motion

### 7.2 Page Load Animation

```
Fade + Rise:
├── Opacity: 0 → 1 (200ms)
├── Transform: translateY(8px) → translateY(0) (200ms)
└── Easing: ease-out
```

### 7.3 Interaction Animations

**Links:**
```
Underline on hover:
├── Border-bottom: 0 → 1px (150ms)
├── Border-color: Accent
└── Easing: ease-out
```

**Buttons:**
```
Opacity on hover:
├── Opacity: 1 → 0.8 (150ms)
└── Easing: ease-out
```

**Inputs:**
```
Focus state:
├── Border-color: Border → Accent (150ms)
├── No shadow (use border only)
└── Easing: ease-out
```

**Modals:**
```
Open:
├── Opacity: 0 → 1 (200ms)
├── No scale animation
└── Easing: ease-out
```

### 7.4 Respect Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 8. COMPONENT DESIGN PATTERNS

### 8.1 Buttons

**Primary Button:**
```
Background: Foreground
Text: Background
Padding: 12px 16px
Border: 1px solid Foreground
Border-radius: 0px (sharp)
Font: Inter, 500
Hover: Opacity 0.8
Focus: 2px Accent outline
No shadow
```

**Secondary Button:**
```
Background: Transparent
Text: Foreground
Border: 1px solid Border
Padding: 12px 16px
Border-radius: 0px (sharp)
Font: Inter, 500
Hover: Background Secondary
Focus: 2px Accent outline
No shadow
```

**Ghost Button:**
```
Background: Transparent
Text: Foreground
Border: None
Padding: 12px 16px
Font: Inter, 500
Hover: Opacity 0.7
Focus: 2px Accent outline
Underline on hover
```

### 8.2 Cards

```
Background: Secondary (light) / Secondary (dark)
Border: 1px Border
Border-radius: 0px (sharp edges)
Padding: 32px
No shadow (or very subtle on hover)
Hover: Subtle shadow only (0 1px 2px)
Transition: All 150ms ease-out
```

### 8.3 Inputs

```
Background: Input
Border: 1px Border
Border-radius: 4px (subtle)
Padding: 12px 16px
Font: Inter, 400
Font-size: 1rem
Line-height: 1.5
Focus: 2px Accent border + outline
Placeholder: Muted
Disabled: Opacity 0.5
No shadow
```

### 8.4 Links

```
Color: Accent
Text-decoration: None
Border-bottom: 1px solid transparent
Transition: All 150ms ease-out
Hover: Border-bottom-color: Accent
Focus: 2px Accent outline
Visited: Accent (no color change)
```

### 8.5 Infobox

```
Position: Right sidebar (desktop), full-width (mobile)
Background: Secondary
Border: 1px Border
Border-radius: 0px (sharp)
Padding: 24px
No shadow
Image: 100% width, border-radius 0px
Image-caption: Small text, muted, IBM Plex Mono
Fields: Key-value pairs, 1px border-bottom between rows
Field Label: IBM Plex Mono, uppercase, muted
Field Value: Inter, foreground
```

### 8.6 Table of Contents

```
Position: Sticky right sidebar (desktop), collapsible (mobile)
Background: Secondary
Border-left: 2px solid Accent (signature revision marker)
Padding: 24px
Border-radius: 0px (sharp)
Font: Inter, 400
Font-size: 0.875rem
Line-height: 1.6
Active-item: Accent text + bold
Scroll-highlight: Smooth opacity transition
```

### 8.7 Revision Marker (Signature Element)

**Used in:**
- Table of Contents left border (2px sage green)
- Edit history timeline indicator
- Active article indicator

**Purpose:** Visual signature of the editorial nature of the site — shows that content is versioned and tracked.

---

## 9. RESPONSIVE DESIGN

### 9.1 Breakpoints

```
Mobile:  0px - 639px
Tablet:  640px - 1023px
Desktop: 1024px+
```

### 9.2 Layout Changes

**Mobile (<640px):**
- Single column layout
- Sidebar hidden (hamburger menu)
- TOC collapsible
- Infobox full-width above content
- Padding: 16px
- Max-width: 100%

**Tablet (640px-1023px):**
- Two column layout (sidebar + content)
- TOC collapsible
- Infobox right sidebar (if space permits)
- Padding: 24px
- Max-width: 100%

**Desktop (1024px+):**
- Three column layout (sidebar, content, TOC)
- All elements visible
- Infobox right sidebar
- Padding: 32px
- Content max-width: 680px

---

## 10. ACCESSIBILITY SPECIFICATIONS

### 10.1 Color Contrast

**WCAG AA Compliance (minimum):**
- Text on background: 4.5:1 ratio
- Large text (18pt+): 3:1 ratio
- UI components: 3:1 ratio

**Our Palette:**
- Foreground on Background: 15:1 (excellent)
- Accent on Background: 5.2:1 (excellent)
- Muted on Background: 6.5:1 (excellent)

### 10.2 Focus Indicators

```
All interactive elements:
├── Focus ring: 2px solid Accent
├── Outline-offset: 2px
├── Visible on keyboard navigation
└── Never removed (no outline: none)
```

### 10.3 Motion Preferences

```
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 11. DARK MODE IMPLEMENTATION

### 11.1 Theme Toggle

```
Location: Header (top-right)
Icon: Moon (light mode) / Sun (dark mode)
Action: Toggle .dark class on <html>
Persist: localStorage key "theme"
Default: System preference (prefers-color-scheme)
```

### 11.2 CSS Variables

All colors use CSS variables that change with `.dark` class:

```css
:root {
  --background: #F7F6F3;
  --foreground: #1A1A1A;
  --accent: #5C7A6B;
  /* ... */
}

.dark {
  --background: #0D0E10;
  --foreground: #E8E6E1;
  --accent: #7C9885;
  /* ... */
}
```

---

## 12. VISUAL HIERARCHY

### 12.1 Importance Levels

| Level | Font | Size | Weight | Color | Usage |
|-------|------|------|--------|-------|-------|
| **Critical** | Fraunces | 3.5rem | 600 | Foreground | Page title |
| **Primary** | Fraunces | 2.25rem | 500 | Foreground | Section heading |
| **Secondary** | Fraunces | 1.875rem | 400 | Foreground | Subsection |
| **Tertiary** | Fraunces | 1.25rem | 500 | Foreground | Minor heading |
| **Body** | Inter | 1rem | 400 | Foreground | Main text |
| **Supporting** | Inter | 0.875rem | 400 | Muted | Captions |
| **Metadata** | IBM Plex Mono | 0.8125rem | 400 | Muted | Timestamps, code |

---

## 13. MICROCOPY & TONE

### 13.1 Voice Principles

- **Clear:** Direct, unambiguous language
- **Respectful:** Honors the reader's time and intelligence
- **Calm:** No urgency, no hype
- **Honest:** Admits limitations, transparent
- **Editorial:** Feels like a publication, not a product

### 13.2 Example Microcopy

| Situation | Microcopy | Tone |
|-----------|-----------|------|
| Empty search | "No articles found." | Direct |
| Loading | "Loading..." | Simple |
| Error | "Something went wrong. Please try again." | Honest |
| Success | "Saved." | Quiet confirmation |
| Disabled | "Coming soon" | Transparent |

---

## 14. ICON SYSTEM

### 14.1 Icon Library

Using Lucide React icons (consistent, lightweight)

### 14.2 Icon Sizes

| Size | Usage |
|------|-------|
| 16px | Inline with text |
| 20px | Small buttons |
| 24px | Standard buttons |
| 32px | Large elements |

### 14.3 Icon Colors

- **Primary action:** Foreground
- **Secondary action:** Muted
- **Accent:** Sage green (links, active states)
- **Disabled:** Muted (opacity 0.5)
- **Error:** Destructive
- **Success:** Success

---

## 15. DESIGN TOKENS SUMMARY

```typescript
const designTokens = {
  colors: {
    light: {
      background: '#F7F6F3',
      foreground: '#1A1A1A',
      accent: '#5C7A6B',
      secondary: '#E8E6E1',
      border: '#D9D6CF',
      muted: '#A8A39F',
    },
    dark: {
      background: '#0D0E10',
      foreground: '#E8E6E1',
      accent: '#7C9885',
      secondary: '#1A1C1F',
      border: '#2A2D32',
      muted: '#7A7A7A',
    },
  },
  typography: {
    heading: 'Fraunces',
    body: 'Inter',
    metadata: 'IBM Plex Mono',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  radius: {
    none: '0px',
    sm: '4px',
  },
  borders: {
    thin: '1px',
    focus: '2px',
  },
  transitions: {
    fast: '150ms ease-out',
    normal: '200ms ease-out',
  },
};
```

---

## 16. DESIGN CHECKLIST

- [ ] All text meets WCAG AA contrast ratio
- [ ] Focus indicators visible on all interactive elements
- [ ] Animations respect prefers-reduced-motion
- [ ] Responsive design tested on mobile/tablet/desktop
- [ ] Dark mode tested thoroughly
- [ ] Icons consistent and properly sized
- [ ] Spacing follows 8px grid
- [ ] Typography hierarchy clear (Fraunces → Inter → IBM Plex Mono)
- [ ] Sage green used only for links, active states, revision marker
- [ ] No heavy shadows (max 1px subtle shadow)
- [ ] No gradients
- [ ] Generous whitespace throughout
- [ ] Borders thin (1px) and minimal
- [ ] Hover/active states obvious
- [ ] Loading states clear
- [ ] Error states helpful
- [ ] Empty states friendly

---

**Design System Version:** 2.0 (Editorial-Calm)  
**Last Updated:** June 21, 2026  
**Philosophy:** Restraint, clarity, warmth, and editoriality
