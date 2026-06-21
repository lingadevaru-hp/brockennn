# Fictional Wiki - Complete Project Specification

**Project Name:** Fictional Wiki (Aethelgard Codex)  
**Status:** Architecture & Planning Complete | Implementation Ready  
**Last Updated:** June 21, 2026  
**Version:** 1.0.0

---

## 1. PROJECT VISION & GOALS

### 1.1 Core Vision
Build a **modern Wikipedia clone** that combines:
- Traditional Wikipedia's information architecture and features
- Grokipedia's modern AI-inspired transparency and interactivity
- Contemporary web design with smooth animations and responsive layouts
- Completely decoupled content architecture (data files separate from code)

### 1.2 Primary Goals
1. **Feature-Complete Wikipedia Experience** - All core Wikipedia features (infobox, TOC, interlinking, revision history, search, references)
2. **Modern Enhancements** - Smooth animations, dark/light themes, responsive design, rich media support
3. **Content Agnostic** - All article content in separate JSON files; components remain generic and reusable
4. **Easy Maintenance** - Low dependency overhead, simple architecture, easy to extend
5. **High Interactivity** - Purposeful animations, smooth transitions, engaging UX

### 1.3 Success Criteria
- ✅ 9-10 diverse fictional articles (varying lengths and content types)
- ✅ All Wikipedia features implemented
- ✅ Grokipedia-inspired features (edit suggestions, perspectives, transparency)
- ✅ Both light and dark themes working flawlessly
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Search functionality with autocomplete
- ✅ Smooth animations throughout
- ✅ Content completely separate from components

---

## 2. TECHNOLOGY STACK

### 2.1 Frontend Stack

| Layer | Technology | Version | Rationale |
|-------|-----------|---------|-----------|
| **Framework** | React | 19.2.1 | Lightweight, component-based, good for interactive UX |
| **Language** | TypeScript | 5.6.3 | Type safety, better IDE support, catches errors early |
| **Styling** | Tailwind CSS | 4.1.14 | Utility-first, minimal CSS, responsive by default |
| **Routing** | Wouter | 3.3.5 | Lightweight alternative to React Router (~3KB) |
| **UI Components** | shadcn/ui | Latest | Pre-built, customizable, tree-shakeable |
| **Icons** | Lucide React | 0.453.0 | Lightweight, tree-shakeable icon library |
| **Markdown** | Streamdown | 1.4.0 | Simple markdown rendering for article content |
| **Animations** | CSS Transitions + Framer Motion | Minimal | GPU-accelerated, smooth performance |
| **Build Tool** | Vite | 7.1.9 | Fast dev server, optimized builds |

### 2.2 Dependency Philosophy

**✅ KEEP (Lightweight, Essential):**
- React, TypeScript, Tailwind
- Wouter (routing)
- shadcn/ui (UI components)
- Lucide (icons)
- Streamdown (markdown)

**❌ AVOID (Unnecessary Bloat):**
- Redux, Zustand (use React Context instead)
- Heavy animation libraries (use CSS transitions)
- Database ORM (static JSON for demo)
- Multiple HTTP clients (use native fetch)

### 2.3 Data Storage Strategy

**Current:** Static JSON files in `/public/data/`  
**Future:** Can migrate to backend API/database without changing components

```
/public/data/
├── articles-index.json          # List of all articles
└── articles/
    ├── aethelgard.json
    ├── lumina-collective.json
    ├── aether-crystals.json
    └── ... (9-10 total)
```

---

## 3. DESIGN SYSTEM

### 3.1 Design Philosophy: "Editorial-Calm"

**Core Principles:**
1. **Restraint** - Every element serves a purpose; nothing decorative
2. **Readability** - Generous whitespace, clear hierarchy, comfortable line-lengths
3. **Warmth** - Cream and off-white create an approachable, human feel
4. **Intentionality** - Sage green used sparingly, only where it matters
5. **Quietness** - Minimal motion, thin borders, no heavy shadows or gradients
6. **Editoriality** - Feels like a carefully curated publication, not a tech product

### 3.2 Color Palette

| Element | Light Theme | Dark Theme | Purpose |
|---------|------------|-----------|----------|
| **Background** | #F7F6F3 (warm cream) | #0D0E10 (near-black) | Main surface |
| **Foreground** | #1A1A1A (charcoal) | #E8E6E1 (warm off-white) | Text color |
| **Accent** | #5C7A6B (muted sage) | #7C9885 (lighter sage) | Links, active states, revision marker |
| **Secondary** | #E8E6E1 (warm off-white) | #1A1C1F (dark charcoal) | Card backgrounds |
| **Muted** | #A8A39F (warm taupe) | #7A7A7A (medium gray) | Subtle text |
| **Border** | #D9D6CF (warm gray) | #2A2D32 (dark gray) | Dividers |
| **Destructive** | #C85450 (muted red) | #D9847C (muted red) | Error/warning |

### 3.3 Typography

| Element | Font | Weight | Size | Usage |
|---------|------|--------|------|-------|
| **Headings** | Fraunces | 400-600 | 2rem-3.5rem | Characterful serif titles |
| **Body** | Inter | 400-500 | 1rem | Clean, readable body text |
| **Metadata** | IBM Plex Mono | 400 | 0.8125rem | Timestamps, code, metadata |

### 3.4 Component Design

**Spacing System:**
- Base unit: 8px (generous)
- Scale: 8, 16, 24, 32, 48, 64px

**Border Radius:**
- Sharp edges (0px default)
- Subtle: 4px (inputs only)

**Borders:**
- Thin 1px only
- No heavy shadows
- No gradients

**Motion:**
- Minimal: fade + rise on page load (200ms)
- No animations on scroll
- Hover: subtle opacity change only

**Animation Timing:**
- Quick interactions: 100-160ms
- Transitions: 200-300ms
- Modals: 300-500ms
- Easing: `cubic-bezier(0.23, 1, 0.32, 1)` (ease-out)

---

## 4. FEATURE SPECIFICATIONS

### 4.1 Wikipedia Core Features

| Feature | Implementation | Status |
|---------|-----------------|--------|
| **Infobox** | Right-aligned sidebar with key facts, image, structured data | Planned |
| **Table of Contents** | Auto-generated from headings, sticky, scroll-linked highlighting | Planned |
| **Interlinking** | Blue hyperlinks to related articles, automatic detection | Planned |
| **Revision History** | Timeline view with edit metadata, diff view (simplified) | Planned |
| **References** | Numbered citations with sources, footnotes | Planned |
| **Categories** | Article categorization for discovery and organization | Planned |
| **Search** | Full-text search with autocomplete suggestions | Planned |
| **Metadata** | Last edited date, edit count, views, language versions | Planned |

### 4.2 Grokipedia-Inspired Features

| Feature | Implementation | Rationale |
|---------|-----------------|-----------|
| **Edit Suggestions** | "Suggest an Edit" button → modal form (UI for demo) | Transparency & community involvement |
| **Multiple Perspectives** | "Different Perspectives" collapsible section | Balanced viewpoints on topics |
| **Real-time Indicators** | "Last updated X minutes ago" badges | Freshness indicator |
| **Transparent History** | Full revision timeline visible to all | Accountability |
| **AI-Proposed Improvements** | "Suggested Improvements" sidebar (static) | Grokipedia-style enhancement suggestions |
| **Citation Density** | Badge showing source count | Credibility indicator |
| **Interactive Q&A** | Related questions sidebar (static for demo) | Engagement |

### 4.3 Modern Enhancements

| Feature | Implementation |
|---------|-----------------|
| **Rich Media** | Images, videos (YouTube embeds), tables, galleries, diagrams |
| **Dark/Light Theme** | Toggle in header, persists to localStorage |
| **Responsive Design** | Mobile-first, breakpoints at 640px, 1024px, 1280px |
| **Smooth Animations** | Page transitions, hover effects, scroll-linked TOC |
| **Breadcrumb Navigation** | Home > Category > Article |
| **Related Articles** | 3-5 suggestions in sidebar with thumbnails |
| **Collapsible Sections** | Expandable/collapsible for content management |
| **Info Cards** | Highlighted callout boxes for important facts |
| **Comparison Tables** | Side-by-side data with responsive layout |
| **Image Galleries** | Grid layout with lightbox |
| **Print-Friendly** | CSS media query for document export |
| **Share Buttons** | Twitter, Facebook, copy link |

---

## 5. CONTENT ARCHITECTURE

### 5.1 Data Structure (TypeScript Types)

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
    imageCaption?: string;
    fields: { label: string; value: string }[];
  };
  lead: string; // Markdown intro
  sections: Section[];
  references: Reference[];
  relatedArticles: string[]; // article IDs
  categories: string[];
  editHistory: EditHistory[];
  suggestedImprovements?: string[];
  perspectives?: { title: string; content: string }[];
}

interface Section {
  id: string;
  title: string;
  level: number; // 1-3
  content: ContentBlock[];
  subsections?: Section[];
  collapsible?: boolean;
}

interface ContentBlock {
  type: 'text' | 'image' | 'table' | 'video' | 'gallery' | 'callout' | 'quote';
  content?: string; // Markdown
  src?: string; // Image/video URL
  alt?: string;
  caption?: string;
  // ... other fields per type
}
```

### 5.2 File Organization

```
client/
├── public/
│   └── data/
│       ├── articles-index.json
│       └── articles/
│           ├── aethelgard.json
│           ├── lumina-collective.json
│           ├── aether-crystals.json
│           ├── steam-golems.json
│           ├── ironclad-dominion.json
│           ├── whispering-woods.json
│           ├── sky-merchants-guild.json
│           ├── cloud-skimmers.json
│           ├── life-threads.json
│           └── great-aetheric-rift.json
├── src/
│   ├── types/
│   │   └── article.ts
│   ├── lib/
│   │   └── articleLoader.ts
│   ├── components/
│   │   ├── ArticleView.tsx
│   │   ├── Infobox.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── Section.tsx
│   │   ├── References.tsx
│   │   ├── RelatedArticles.tsx
│   │   ├── RevisionHistory.tsx
│   │   └── ... (more components)
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Article.tsx
│   │   ├── Search.tsx
│   │   └── NotFound.tsx
│   └── App.tsx
```

### 5.3 Content Separation Principle

**CRITICAL:** All article content lives in JSON files. Components are completely generic.

```typescript
// ✅ CORRECT: Component receives data, renders it
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

// ❌ WRONG: Hardcoded content in component
function ArticleView() {
  return (
    <div>
      <h1>Aethelgard</h1>
      <p>Aethelgard is a realm...</p>
      {/* Content hardcoded - can't swap later! */}
    </div>
  );
}
```

---

## 6. ARTICLE SPECIFICATIONS

### 6.1 Article Diversity Matrix

| # | Title | Length | Type | Key Features |
|---|-------|--------|------|--------------|
| 1 | **Aethelgard** | **Very Long (3000+ words)** | Portal/Overview | TOC, infobox, 6+ sections, tables, images, collapsible content |
| 2 | **Lumina Collective** | Long (1500-2000w) | Faction | Infobox, images, history, culture, technology |
| 3 | **Aether-Crystals** | Medium (800-1200w) | Technology | Comparison table, properties, uses, discovery |
| 4 | **Steam-Golems** | Medium (900-1300w) | Engineering | Diagrams, construction, deployment, specifications |
| 5 | **Ironclad Dominion** | Long (1400-1800w) | Faction | Timeline, military structure, key figures, map |
| 6 | **Whispering Woods** | Medium (1000-1400w) | Geography | Map, flora/fauna, history, inhabitants, ecosystem |
| 7 | **Sky-Merchants Guild** | Medium (1100-1500w) | Organization | Trade routes, members, expeditions, gallery |
| 8 | **Cloud-Skimmers** | **Short (400-600w)** | Technology | Specs, images, **YouTube video embed** |
| 9 | **Life-Threads** | **Short (500-700w)** | Magic System | Definition, usage, practitioners, related links |
| 10 | **Great Aetheric Rift** | Medium (1200-1600w) | Geography/Event | Historical event, impact, discovery, research |

### 6.2 Content Variety Showcase

**Very Long Article (Aethelgard):**
- Multiple sections with auto-generated TOC
- Sticky TOC with scroll highlighting
- Infobox with image and key facts
- Embedded images with captions
- Comparison tables
- Collapsible subsections
- Info cards (callouts)
- References section (10+ citations)
- Related articles sidebar
- Edit history timeline

**Medium Articles:**
- Infobox with image
- 3-4 main sections
- 1-2 embedded images
- 1 table or comparison
- Info cards
- 5-8 references
- Related articles

**Short Articles:**
- Minimal infobox
- 2-3 sections
- 1-2 images
- **YouTube video embed**
- Quick facts box
- 3-5 references

---

## 7. IMPLEMENTATION ROADMAP

### Phase 1: Infrastructure ✅ COMPLETE
- [x] Project initialization
- [x] Layout (Header, Sidebar, Main)
- [x] Theme system (light/dark)
- [x] Navigation structure
- [x] Type definitions

### Phase 2: Article System 🔄 IN PROGRESS
- [ ] Article data structure (JSON)
- [ ] Article loader utility
- [ ] Article index
- [ ] ArticleView component
- [ ] Infobox component
- [ ] Section renderer

### Phase 3: Interactive Features
- [ ] Table of Contents (auto-generated, sticky, scroll-linked)
- [ ] Search (full-text, autocomplete)
- [ ] Revision history viewer
- [ ] Interlinking system
- [ ] Related articles sidebar
- [ ] Breadcrumb navigation

### Phase 4: Rich Content
- [ ] Image support with captions
- [ ] Table rendering
- [ ] Video embeds (YouTube)
- [ ] Gallery component
- [ ] Callout/info card components
- [ ] Quote styling

### Phase 5: Polish & Animations
- [ ] Page transition animations
- [ ] Hover effects
- [ ] Scroll animations
- [ ] TOC scroll highlighting
- [ ] Mobile responsiveness
- [ ] Print styles

### Phase 6: Content Creation
- [ ] Write 9-10 articles
- [ ] Create/source images
- [ ] Add references
- [ ] Populate infoboxes
- [ ] Test interlinking
- [ ] Verify all features

### Phase 7: Final Polish
- [ ] Performance optimization
- [ ] Accessibility audit
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Final design review

---

## 8. COMPONENT ARCHITECTURE

### 8.1 Component Hierarchy

```
App
├── Header
│   ├── Logo
│   ├── Search
│   ├── ThemeToggle
│   └── Navigation
├── Sidebar
│   ├── NavMenu
│   └── Categories
└── Main
    ├── Home (/)
    ├── Article (/article/:slug)
    │   ├── Breadcrumb
    │   ├── ArticleView
    │   │   ├── Infobox
    │   │   ├── TableOfContents
    │   │   ├── Lead
    │   │   ├── Section (recursive)
    │   │   │   ├── ContentBlock
    │   │   │   │   ├── TextBlock (Markdown)
    │   │   │   │   ├── ImageBlock
    │   │   │   │   ├── TableBlock
    │   │   │   │   ├── VideoBlock
    │   │   │   │   ├── GalleryBlock
    │   │   │   │   ├── CalloutBlock
    │   │   │   │   └── QuoteBlock
    │   │   │   └── Subsections
    │   │   ├── References
    │   │   ├── EditHistory
    │   │   ├── SuggestedImprovements
    │   │   └── RelatedArticles
    ├── Search (/search)
    └── NotFound
```

### 8.2 Key Components

| Component | Purpose | Props |
|-----------|---------|-------|
| **ArticleView** | Main article renderer | `article: Article` |
| **Infobox** | Sidebar with key facts | `data: Infobox` |
| **TableOfContents** | Auto-generated TOC | `sections: Section[]` |
| **Section** | Recursive section renderer | `section: Section` |
| **ContentBlock** | Renders different content types | `block: ContentBlock` |
| **References** | Citation list | `references: Reference[]` |
| **RelatedArticles** | Sidebar with suggestions | `articleIds: string[]` |
| **RevisionHistory** | Edit timeline | `history: EditHistory[]` |
| **Search** | Full-text search | `onSearch: (query) => void` |

---

## 9. ROUTING MAP

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home | Homepage with featured articles |
| `/article/:slug` | Article | Display single article |
| `/search` | Search | Search results page |
| `/category/:name` | Category | Articles in category |
| `/404` | NotFound | 404 error page |

---

## 10. ANIMATION SPECIFICATIONS

### 10.1 Page Transitions
- **Effect:** Fade + subtle slide (10px down)
- **Duration:** 200ms
- **Easing:** `cubic-bezier(0.23, 1, 0.32, 1)`

### 10.2 Hover Effects
- **Links:** Underline animation (0-2px thickness)
- **Buttons:** Scale(0.97) + color shift
- **Cards:** Subtle shadow increase

### 10.3 Scroll Effects
- **TOC Highlighting:** Smooth color transition (200ms)
- **Sticky Elements:** Smooth position change
- **Parallax:** Subtle background movement (optional)

### 10.4 Interaction Animations
- **Modal Open:** Fade in + scale(0.95→1)
- **Collapse/Expand:** Height transition (smooth)
- **Search Results:** Staggered fade-in (30ms per item)

---

## 11. RESPONSIVE DESIGN BREAKPOINTS

| Breakpoint | Width | Layout |
|-----------|-------|--------|
| **Mobile** | <640px | Single column, sidebar hidden, full-width content |
| **Tablet** | 640px-1024px | Two column, sidebar collapsible |
| **Desktop** | >1024px | Three column (sidebar, content, TOC) |

---

## 12. ACCESSIBILITY REQUIREMENTS

- ✅ Semantic HTML (proper heading hierarchy)
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ High contrast text (WCAG AA minimum)
- ✅ Focus indicators on all interactive elements
- ✅ Alt text for all images
- ✅ Skip to main content link
- ✅ Reduced motion support

---

## 13. PERFORMANCE TARGETS

- **First Contentful Paint:** <1s
- **Largest Contentful Paint:** <2s
- **Time to Interactive:** <2.5s
- **Cumulative Layout Shift:** <0.1
- **Bundle Size:** <150KB (gzipped)

---

## 14. FUTURE EXTENSIBILITY

### 14.1 Backend Migration Path
1. Keep current JSON structure
2. Create API endpoints that return same data shape
3. Replace `fetch('/data/articles/:slug.json')` with `fetch('/api/articles/:slug')`
4. No component changes needed

### 14.2 Database Schema
```sql
CREATE TABLE articles (
  id UUID PRIMARY KEY,
  slug VARCHAR UNIQUE,
  title VARCHAR,
  metadata JSON,
  infobox JSON,
  lead TEXT,
  sections JSON,
  references JSON,
  related_articles JSON,
  categories JSON,
  edit_history JSON,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
```

### 14.3 Content Management System
- Could add admin panel to edit articles
- Keep same JSON structure for export/import
- Version control for content changes

---

## 15. DEPLOYMENT STRATEGY

**Current:** Static site (Vite build)  
**Hosting:** Manus platform (built-in)  
**CDN:** Automatic via Manus  
**Domain:** Custom domain support via Manus UI

**Build Command:**
```bash
pnpm build
```

**Output:** `/dist` directory with optimized static files

---

## 16. KEY FILES & THEIR PURPOSE

| File | Purpose |
|------|---------|
| `PROJECT_SPEC.md` | This file - complete specification |
| `IMPLEMENTATION_STRATEGY.md` | Detailed implementation guide |
| `design.md` | Design system documentation |
| `client/src/types/article.ts` | TypeScript type definitions |
| `client/src/lib/articleLoader.ts` | Article data loading utility |
| `client/public/data/articles-index.json` | Article index/catalog |
| `client/public/data/articles/*.json` | Individual article data files |

---

## 17. QUICK START FOR NEW AGENT

If continuing this project with a new AI agent:

1. **Read this file first** - Complete overview
2. **Read `IMPLEMENTATION_STRATEGY.md`** - Detailed feature breakdown
3. **Read `design.md`** - Design system and principles
4. **Check `client/src/types/article.ts`** - Data structure
5. **Check `client/public/data/articles-index.json`** - Content catalog
6. **Start with Phase 2** - Build article components

All article content is in `/public/data/articles/` - completely separate from code.

---

## 18. DECISION LOG

### Why This Architecture?

| Decision | Rationale |
|----------|-----------|
| **Separate content files** | Easy to swap content later without touching code |
| **React + Tailwind** | Lightweight, fast, good for interactive UX |
| **Wouter instead of React Router** | 3KB vs 40KB - massive size difference |
| **JSON data instead of database** | Simpler for demo, easy to migrate later |
| **No Redux** | Overkill for this scope, use React Context |
| **Markdown for content** | Simple, version-controllable, easy to edit |
| **CSS transitions for animations** | GPU-accelerated, smooth, performant |
| **shadcn/ui components** | Pre-built, customizable, tree-shakeable |

---

## 19. KNOWN CONSTRAINTS & FREEDOMS

### Constraints
- Static site (no backend for demo)
- No database (JSON files)
- No user authentication (demo only)
- Limited to client-side search

### Freedoms
- Can add any feature as long as content stays separate
- Can migrate to backend anytime
- Can add more articles without code changes
- Can completely redesign UI without touching data
- Can add any animation/interaction without affecting content

---

## 20. SUCCESS CHECKLIST

- [ ] All 9-10 articles created with varied content
- [ ] Wikipedia features fully implemented
- [ ] Grokipedia features implemented
- [ ] Search working with autocomplete
- [ ] Revision history visible
- [ ] Interlinking functional
- [ ] Dark/light themes working
- [ ] Responsive on mobile/tablet/desktop
- [ ] Animations smooth and purposeful
- [ ] All content in separate JSON files
- [ ] No hardcoded article text in components
- [ ] Performance targets met
- [ ] Accessibility audit passed
- [ ] Cross-browser tested

---

**Next Step:** Build Phase 2 - Article System Components

Contact: Ready to continue implementation anytime
