# AI Agent Quick Start Guide

**If you're a new AI agent picking up this project, start here.**

---

## What Is This Project?

A **modern Wikipedia clone** called "Fictional Wiki" (Aethelgard Codex) with:
- Wikipedia's information architecture (infobox, TOC, interlinking, references, search)
- Grokipedia's modern features (edit suggestions, transparency, perspectives)
- Contemporary web design (smooth animations, dark/light themes, responsive)
- **Completely decoupled content** (all article text in JSON files, components are generic)

---

## The Core Principle

**Content is completely separate from code.**

```
✅ CORRECT:
- Article content lives in: /public/data/articles/article-slug.json
- Components are generic: ArticleView.tsx renders any article data
- To change content: Edit JSON files only
- To change design: Edit components only
- No hardcoded article text in JSX

❌ WRONG:
- Hardcoding article text in components
- Mixing content with code
- Making it impossible to swap content later
```

This separation means you can:
- Swap all fictional content for real content without touching code
- Redesign the entire UI without touching data
- Add new articles without code changes
- Migrate to a backend database later without component changes

---

## Project Status

| Phase | Status | What's Done |
|-------|--------|-----------|
| 1 | ✅ Complete | Planning, research, architecture |
| 2 | 🔄 In Progress | Article system components |
| 3 | ⏳ Planned | Interactive features (search, history, interlinking) |
| 4 | ⏳ Planned | Rich content support (images, videos, tables) |
| 5 | ⏳ Planned | Animations and polish |
| 6 | ⏳ Planned | Write 9-10 articles |
| 7 | ⏳ Planned | Final polish and deployment |

---

## Tech Stack (Lightweight)

| Layer | Tech | Why |
|-------|------|-----|
| Framework | React 19 | Lightweight, component-based |
| Language | TypeScript | Type safety |
| Styling | Tailwind CSS 4 | Utility-first, responsive |
| Routing | Wouter | 3KB (vs React Router 40KB) |
| UI Components | shadcn/ui | Pre-built, customizable |
| Icons | Lucide React | Lightweight, tree-shakeable |
| Markdown | Streamdown | Simple content rendering |
| Build | Vite | Fast dev server, optimized builds |

**No Redux, no heavy libraries, no bloat. Just React + Tailwind.**

---

## File Structure

```
fictional-wiki/
├── PROJECT_SPEC.md              ← READ THIS FIRST (complete spec)
├── DESIGN_SYSTEM.md             ← Design tokens, colors, typography
├── IMPLEMENTATION_STRATEGY.md   ← Feature breakdown
├── BUILD_GUIDE.md               ← Build & deployment guide
├── README_AI_AGENT.md           ← This file
│
├── client/
│   ├── public/data/
│   │   ├── articles-index.json  ← List of all articles
│   │   └── articles/
│   │       ├── aethelgard.json  ← Article data (NO CODE)
│   │       ├── lumina-collective.json
│   │       └── ... (9-10 total)
│   │
│   └── src/
│       ├── types/article.ts     ← TypeScript interfaces
│       ├── lib/articleLoader.ts ← Data loading utility
│       ├── components/          ← Reusable UI components
│       ├── pages/               ← Page components
│       └── App.tsx              ← Main app
│
└── package.json, tsconfig.json, vite.config.ts, etc.
```

---

## Key Concepts

### 1. Article Data Structure

```typescript
interface Article {
  metadata: {
    id: string;
    title: string;
    slug: string;
    category: string;
    lastEdited: string;
    editCount: number;
    views: number;
  };
  infobox?: {
    title: string;
    image?: string;
    fields: { label: string; value: string }[];
  };
  lead: string; // Markdown
  sections: Section[];
  references: Reference[];
  relatedArticles: string[]; // article IDs
  categories: string[];
  editHistory: EditHistory[];
  suggestedImprovements?: string[];
  perspectives?: { title: string; content: string }[];
}
```

**All article content goes in JSON files, not in components.**

### 2. Content Blocks

Articles are made of content blocks:

```json
{
  "type": "text",      // Markdown content
  "content": "# Heading\n\nParagraph..."
}

{
  "type": "image",     // Image with caption
  "src": "https://...",
  "alt": "Description",
  "caption": "Caption"
}

{
  "type": "table",     // Data table
  "columns": ["Col1", "Col2"],
  "rows": [...]
}

{
  "type": "video",     // YouTube embed
  "src": "https://www.youtube.com/embed/VIDEO_ID"
}

{
  "type": "callout",   // Info box
  "title": "Important",
  "content": "...",
  "variant": "info"
}
```

### 3. Component Pattern

```typescript
// ✅ CORRECT: Generic component, data-driven
function ArticleView({ article }: { article: Article }) {
  return (
    <div>
      <h1>{article.metadata.title}</h1>
      <Infobox data={article.infobox} />
      {article.sections.map(section => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
}

// ❌ WRONG: Hardcoded content
function ArticleView() {
  return (
    <div>
      <h1>Aethelgard</h1>
      <p>Aethelgard is a realm...</p>
    </div>
  );
}
```

### 4. Data Loading

```typescript
// Load article by slug
const article = await loadArticle('aethelgard');

// Search articles
const results = await searchArticles('lumina');

// Get articles by category
const tech = await getArticlesByCategory('Technology');
```

---

## Design Philosophy

**"Neo-Brutalism with Whimsical Twist"**

- **Bold geometry:** Sharp angles, strong lines, asymmetric layouts
- **Whimsy:** Playful colors (Electric Teal), organic curves, unexpected details
- **Transparency:** Clear information hierarchy, visible processes
- **Interactivity:** Smooth animations, responsive feedback
- **Accessibility:** High contrast, keyboard navigation, semantic HTML

**Colors:**
- Primary: Electric Teal (oklch(50% 0.15 200))
- Background: Almost white (light) / Very dark (dark)
- Foreground: Almost black (light) / Light gray (dark)

**Typography:**
- Headings: Bebas Neue (bold, distinctive)
- Body: Inter (readable, friendly)
- Code: Fira Code (monospace)

---

## Features to Implement

### Wikipedia Core Features
- ✅ Infobox (right sidebar with key facts)
- ✅ Table of Contents (auto-generated, sticky, scroll-linked)
- ✅ Interlinking (blue hyperlinks to related articles)
- ✅ Revision History (timeline of edits)
- ✅ References (numbered citations)
- ✅ Categories (article organization)
- ✅ Search (full-text with autocomplete)
- ✅ Metadata (last edited, edit count, views)

### Grokipedia-Inspired Features
- ✅ Edit Suggestions ("Suggest an Edit" button)
- ✅ Multiple Perspectives (balanced viewpoints)
- ✅ Real-time Indicators (last updated badges)
- ✅ Transparent History (visible revision timeline)
- ✅ AI-Proposed Improvements (suggestions sidebar)
- ✅ Citation Density (source count badge)

### Modern Enhancements
- ✅ Rich Media (images, videos, tables, galleries)
- ✅ Dark/Light Theme (toggle in header)
- ✅ Responsive Design (mobile-first)
- ✅ Smooth Animations (page transitions, hover effects)
- ✅ Breadcrumb Navigation (Home > Category > Article)
- ✅ Related Articles (sidebar suggestions)
- ✅ Collapsible Sections (manage content length)
- ✅ Print-Friendly (CSS media query)

---

## Article Specifications

**9-10 articles with varying lengths and content types:**

| # | Title | Length | Features |
|---|-------|--------|----------|
| 1 | Aethelgard | Very Long (3000+ words) | TOC, infobox, tables, images, collapsible sections |
| 2 | Lumina Collective | Long (1500-2000w) | Infobox, images, history, culture |
| 3 | Aether-Crystals | Medium (800-1200w) | Comparison table, properties |
| 4 | Steam-Golems | Medium (900-1300w) | Diagrams, specifications |
| 5 | Ironclad Dominion | Long (1400-1800w) | Timeline, military structure |
| 6 | Whispering Woods | Medium (1000-1400w) | Map, flora/fauna |
| 7 | Sky-Merchants Guild | Medium (1100-1500w) | Trade routes, gallery |
| 8 | Cloud-Skimmers | Short (400-600w) | Specs, **YouTube video** |
| 9 | Life-Threads | Short (500-700w) | Definition, usage |
| 10 | Great Aetheric Rift | Medium (1200-1600w) | Historical event, impact |

---

## Implementation Roadmap

### Phase 2: Article System (CURRENT)
```bash
# What to build:
1. ArticleView.tsx       - Main article renderer
2. Infobox.tsx          - Sidebar with key facts
3. TableOfContents.tsx  - Auto-generated TOC with scroll highlighting
4. Section.tsx          - Recursive section renderer
5. ContentBlock.tsx     - Renders different content types
6. References.tsx       - Citation list
7. RelatedArticles.tsx  - Sidebar suggestions
```

### Phase 3: Interactive Features
```bash
# What to build:
1. Search.tsx           - Full-text search with autocomplete
2. RevisionHistory.tsx  - Edit timeline
3. Interlinking         - Automatic link detection
4. Breadcrumb.tsx       - Navigation trail
```

### Phase 4: Rich Content
```bash
# What to support:
1. Images with captions
2. Tables with sorting
3. YouTube video embeds
4. Image galleries
5. Callout boxes
6. Quote styling
```

### Phase 5: Animations & Polish
```bash
# What to add:
1. Page transition animations
2. Hover effects
3. Scroll animations
4. TOC scroll highlighting
5. Mobile responsiveness
6. Print styles
```

### Phase 6: Content Creation
```bash
# What to create:
1. Write 9-10 articles (JSON files)
2. Create/source images
3. Add references
4. Populate infoboxes
5. Test interlinking
```

---

## How to Continue

### If Starting Phase 2 (Article Components)

1. **Read the specifications:**
   - `PROJECT_SPEC.md` (complete overview)
   - `DESIGN_SYSTEM.md` (design tokens)
   - `IMPLEMENTATION_STRATEGY.md` (feature details)

2. **Understand the data structure:**
   - `client/src/types/article.ts` (TypeScript interfaces)
   - `client/public/data/articles-index.json` (example data)

3. **Build components in order:**
   - ArticleView.tsx (main renderer)
   - Infobox.tsx (sidebar)
   - TableOfContents.tsx (TOC)
   - Section.tsx (sections)
   - ContentBlock.tsx (content types)

4. **Create article page:**
   - `client/src/pages/Article.tsx`
   - Route: `/article/:slug`
   - Load article data, pass to ArticleView

5. **Test with sample article:**
   - Create `client/public/data/articles/aethelgard.json`
   - Navigate to `/article/aethelgard`
   - Verify rendering

### If Starting Phase 3 (Interactive Features)

1. **Implement Search:**
   - Create `Search.tsx` page component
   - Use `searchArticles()` from `articleLoader.ts`
   - Show autocomplete suggestions
   - Display search results

2. **Implement Revision History:**
   - Create `RevisionHistory.tsx` component
   - Show timeline of edits
   - Display edit metadata

3. **Implement Interlinking:**
   - Detect article references in text
   - Convert to blue hyperlinks
   - Navigate to related articles

---

## Common Tasks

### Add a New Article

1. Create `client/public/data/articles/my-article.json`
2. Fill with article data (see `BUILD_GUIDE.md`)
3. Update `client/public/data/articles-index.json`
4. Done! Component automatically renders it

### Change Design

1. Edit `client/src/index.css` (colors, fonts)
2. Edit `client/src/components/*` (layout, styling)
3. No need to touch article data

### Add New Feature

1. Create new component in `client/src/components/`
2. Use data from article JSON
3. Add to ArticleView or other parent component
4. No need to change article data

### Migrate to Backend

1. Keep article JSON structure the same
2. Create API endpoints that return same data
3. Replace `fetch('/data/articles/:slug.json')` with `fetch('/api/articles/:slug')`
4. Components don't change!

---

## Key Files Reference

| File | Purpose | Read When |
|------|---------|-----------|
| `PROJECT_SPEC.md` | Complete specification | Starting the project |
| `DESIGN_SYSTEM.md` | Design tokens, colors, typography | Building UI components |
| `IMPLEMENTATION_STRATEGY.md` | Feature breakdown | Planning implementation |
| `BUILD_GUIDE.md` | Build & deployment | Building/deploying |
| `client/src/types/article.ts` | TypeScript interfaces | Understanding data structure |
| `client/src/lib/articleLoader.ts` | Data loading utility | Loading article data |
| `client/public/data/articles-index.json` | Article catalog | Understanding article list |

---

## Quick Commands

```bash
# Development
pnpm dev              # Start dev server (http://localhost:3000)
pnpm check            # Check TypeScript errors
pnpm format           # Format code

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Utilities
pnpm install          # Install dependencies
pnpm add <package>    # Add new package
```

---

## Success Criteria

- [ ] All 9-10 articles created with varied content
- [ ] Wikipedia features fully implemented
- [ ] Search working with autocomplete
- [ ] Dark/light themes working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Smooth animations throughout
- [ ] All content in separate JSON files
- [ ] No hardcoded article text in components
- [ ] Performance targets met (<2s initial load)
- [ ] Accessibility audit passed (WCAG AA)

---

## Important Principles

1. **Content ≠ Code**
   - All article text in JSON files
   - Components are generic and reusable
   - Swap content without touching code

2. **Lightweight Stack**
   - No Redux, no heavy libraries
   - Just React + Tailwind + shadcn/ui
   - Fast builds, small bundle size

3. **Data-Driven Design**
   - Components receive data, render it
   - No hardcoded content
   - Easy to extend

4. **Separation of Concerns**
   - Types in `types/`
   - Components in `components/`
   - Pages in `pages/`
   - Data in `public/data/`
   - Utilities in `lib/`

5. **Accessibility First**
   - Semantic HTML
   - Keyboard navigation
   - High contrast
   - Focus indicators

---

## Need Help?

- **Architecture questions:** See `PROJECT_SPEC.md`
- **Design questions:** See `DESIGN_SYSTEM.md`
- **Feature questions:** See `IMPLEMENTATION_STRATEGY.md`
- **Build questions:** See `BUILD_GUIDE.md`
- **Data structure:** See `client/src/types/article.ts`
- **Example data:** See `client/public/data/articles-index.json`

---

**Version:** 1.0  
**Last Updated:** June 21, 2026  
**For:** AI Agents continuing this project

Good luck! 🚀
