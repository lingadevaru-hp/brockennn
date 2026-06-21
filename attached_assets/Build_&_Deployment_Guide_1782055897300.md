# Build & Deployment Guide

## Quick Start

### Prerequisites
- Node.js 18+ (already installed)
- pnpm (already installed)

### Development

```bash
# Install dependencies (already done)
pnpm install

# Start dev server
pnpm dev

# Server runs at http://localhost:3000
```

### Production Build

```bash
# Build for production
pnpm build

# Output: /dist directory

# Preview production build locally
pnpm preview
```

---

## Project Structure

```
fictional-wiki/
├── client/
│   ├── public/
│   │   ├── data/
│   │   │   ├── articles-index.json
│   │   │   └── articles/
│   │   │       ├── aethelgard.json
│   │   │       ├── lumina-collective.json
│   │   │       └── ... (9-10 total)
│   │   └── favicon.ico
│   ├── src/
│   │   ├── types/
│   │   │   └── article.ts          # TypeScript types
│   │   ├── lib/
│   │   │   └── articleLoader.ts    # Data loading utility
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── ArticleView.tsx
│   │   │   ├── Infobox.tsx
│   │   │   ├── TableOfContents.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── References.tsx
│   │   │   ├── RelatedArticles.tsx
│   │   │   ├── RevisionHistory.tsx
│   │   │   ├── Search.tsx
│   │   │   └── ... (more components)
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Article.tsx
│   │   │   ├── Search.tsx
│   │   │   └── NotFound.tsx
│   │   ├── contexts/
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/
│   └── index.ts                    # Express server (for static serving)
├── shared/
│   └── const.ts
├── PROJECT_SPEC.md                 # Complete specification
├── DESIGN_SYSTEM.md                # Design documentation
├── IMPLEMENTATION_STRATEGY.md       # Implementation guide
├── BUILD_GUIDE.md                  # This file
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.ts
```

---

## Key Files Explained

### Data Files

**`client/public/data/articles-index.json`**
- List of all articles with metadata
- Used for search, navigation, category filtering
- Format: `{ articles: [{ id, title, slug, category, excerpt }] }`

**`client/public/data/articles/*.json`**
- Individual article data files
- Complete article content (infobox, sections, references, etc.)
- Format: Follows `Article` interface from `types/article.ts`
- **IMPORTANT:** All article text goes here, NOT in components

### Component Files

**`client/src/components/ArticleView.tsx`**
- Main article renderer
- Receives article data, renders it
- No hardcoded content

**`client/src/components/Infobox.tsx`**
- Renders infobox from data
- Reusable for any article

**`client/src/components/TableOfContents.tsx`**
- Auto-generates TOC from sections
- Sticky, scroll-linked highlighting

**`client/src/components/Section.tsx`**
- Recursive section renderer
- Handles subsections, collapsible content

**`client/src/lib/articleLoader.ts`**
- Loads article JSON files
- Caches loaded articles
- Handles search, filtering

### Configuration Files

**`vite.config.ts`**
- Vite build configuration
- Tailwind CSS plugin setup
- Dev server configuration

**`tsconfig.json`**
- TypeScript configuration
- Path aliases (`@/` = `src/`)

**`tailwind.config.ts`**
- Tailwind CSS configuration
- Custom colors, fonts, spacing

---

## Content Architecture

### Adding a New Article

1. **Create article data file:**
   ```bash
   touch client/public/data/articles/my-article.json
   ```

2. **Fill with article data:**
   ```json
   {
     "metadata": {
       "id": "my-article",
       "title": "My Article",
       "slug": "my-article",
       "category": "Technology",
       "lastEdited": "2026-06-21T12:00:00Z",
       "editCount": 5,
       "views": 1200
     },
     "infobox": {
       "title": "My Article",
       "image": "https://...",
       "fields": [
         { "label": "Founded", "value": "2025" },
         { "label": "Type", "value": "Technology" }
       ]
     },
     "lead": "# Introduction\n\nThis is the intro paragraph...",
     "sections": [
       {
         "id": "section-1",
         "title": "Overview",
         "level": 2,
         "content": [
           {
             "type": "text",
             "content": "# Overview\n\nSection content in markdown..."
           },
           {
             "type": "image",
             "src": "https://...",
             "alt": "Description",
             "caption": "Image caption"
           }
         ]
       }
     ],
     "references": [
       {
         "id": 1,
         "title": "Source Title",
         "url": "https://...",
         "author": "Author Name",
         "year": 2025
       }
     ],
     "relatedArticles": ["article-id-1", "article-id-2"],
     "categories": ["Technology", "Science"],
     "editHistory": [
       {
         "date": "2026-06-21T12:00:00Z",
         "editor": "Editor Name",
         "summary": "Initial creation",
         "changeType": "major"
       }
     ]
   }
   ```

3. **Update articles-index.json:**
   ```json
   {
     "articles": [
       {
         "id": "my-article",
         "title": "My Article",
         "slug": "my-article",
         "category": "Technology",
         "excerpt": "Brief description..."
       }
     ]
   }
   ```

4. **Component automatically renders it** - No code changes needed!

---

## Content Block Types

### Text Block
```json
{
  "type": "text",
  "content": "# Heading\n\nMarkdown content here..."
}
```

### Image Block
```json
{
  "type": "image",
  "src": "https://example.com/image.jpg",
  "alt": "Alt text",
  "caption": "Image caption",
  "width": "600px"
}
```

### Table Block
```json
{
  "type": "table",
  "columns": ["Column 1", "Column 2", "Column 3"],
  "rows": [
    { "Column 1": "Value 1", "Column 2": "Value 2", "Column 3": "Value 3" },
    { "Column 1": "Value 4", "Column 2": "Value 5", "Column 3": "Value 6" }
  ]
}
```

### Video Block
```json
{
  "type": "video",
  "src": "https://www.youtube.com/embed/VIDEO_ID",
  "caption": "Video description",
  "width": "100%",
  "height": "600px"
}
```

### Gallery Block
```json
{
  "type": "gallery",
  "content": [
    {
      "src": "https://example.com/image1.jpg",
      "alt": "Image 1",
      "caption": "Caption 1"
    },
    {
      "src": "https://example.com/image2.jpg",
      "alt": "Image 2",
      "caption": "Caption 2"
    }
  ]
}
```

### Callout Block
```json
{
  "type": "callout",
  "title": "Important Note",
  "content": "This is important information...",
  "variant": "info"
}
```

Variants: `info`, `warning`, `success`, `error`

### Quote Block
```json
{
  "type": "quote",
  "content": "The quote text here...",
  "author": "Author Name"
}
```

---

## Development Workflow

### 1. Start Dev Server
```bash
pnpm dev
```

### 2. Make Changes
- Edit component files in `client/src/`
- Edit article data in `client/public/data/articles/`
- Vite hot-reloads automatically

### 3. Test Locally
- Open http://localhost:3000
- Test all features
- Check dark/light mode
- Test on mobile (use browser dev tools)

### 4. Build for Production
```bash
pnpm build
```

### 5. Preview Production Build
```bash
pnpm preview
```

---

## Environment Variables

No environment variables needed for this project (static site).

If migrating to backend later, add `.env.local`:
```
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Fictional Wiki
```

---

## Performance Optimization

### Current Optimizations
- ✅ Code splitting (Vite)
- ✅ Tree-shaking (unused code removed)
- ✅ CSS minification
- ✅ Image lazy loading (when implemented)
- ✅ Gzip compression

### Future Optimizations
- Image optimization (WebP format)
- Service worker (offline support)
- Preload critical resources
- Compress JSON data files

---

## Deployment to Manus

### Current Status
Project is already deployed to Manus platform.

### To Update Deployment
1. Make changes locally
2. Run `pnpm build`
3. Click "Publish" button in Manus UI
4. Select checkpoint to publish
5. Done! Live in ~30 seconds

### Custom Domain
1. Go to Manus Settings → Domains
2. Add custom domain
3. Update DNS records
4. Domain active in ~10 minutes

---

## Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm dev
```

### TypeScript Errors
```bash
# Check for type errors
pnpm check
```

### Build Fails
```bash
# Check for build errors
pnpm build

# If still failing, check:
# 1. All imports are correct
# 2. All types are defined
# 3. No circular dependencies
```

### Articles Not Loading
1. Check JSON syntax in article files
2. Verify article slug matches filename
3. Check articles-index.json is valid
4. Open browser console for error messages

---

## File Size Targets

| Metric | Target | Current |
|--------|--------|---------|
| Bundle size (gzipped) | <150KB | TBD |
| Initial load | <2s | TBD |
| Time to interactive | <2.5s | TBD |
| Largest image | <100KB | TBD |

---

## Testing Checklist

- [ ] Dev server starts without errors
- [ ] All pages load correctly
- [ ] Search works
- [ ] Dark/light theme toggles
- [ ] Responsive on mobile/tablet/desktop
- [ ] All links work
- [ ] Images load
- [ ] Videos embed correctly
- [ ] Tables display properly
- [ ] Animations smooth
- [ ] No console errors
- [ ] Production build completes
- [ ] Production build runs locally

---

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/article-system

# Make changes
git add .
git commit -m "Add article system components"

# Push to remote
git push origin feature/article-system

# Create pull request
# Review and merge
```

---

## Common Commands Reference

```bash
# Development
pnpm dev              # Start dev server
pnpm check            # Check TypeScript
pnpm format           # Format code

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Utilities
pnpm install          # Install dependencies
pnpm update           # Update dependencies
pnpm add <package>    # Add new package
```

---

## Next Steps

1. **Build article components** (Phase 2)
   - ArticleView.tsx
   - Infobox.tsx
   - TableOfContents.tsx
   - Section.tsx

2. **Implement interactive features** (Phase 3)
   - Search
   - Revision history
   - Interlinking

3. **Write articles** (Phase 6)
   - Create 9-10 JSON files
   - Add content, images, references

4. **Polish & deploy** (Phase 7)
   - Animations
   - Responsive design
   - Performance optimization

---

**Version:** 1.0  
**Last Updated:** June 21, 2026  
**Maintainer:** Manus AI
