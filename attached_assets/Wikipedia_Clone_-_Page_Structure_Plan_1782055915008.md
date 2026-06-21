# Wikipedia Clone - Page Structure Plan

## Three Distinct Pages

### 1. LANDING PAGE (/)
**Purpose:** Entry door to the wiki, minimal and sparse

**Layout:**
- Centered vertically on screen
- No header/footer initially visible
- Centered content area

**Components:**
- Large Wikipedia-style wordmark/logo (serif, bold)
- Tagline: "The Free Encyclopedia"
- Language/category grid (2-3 columns on mobile, 3+ on desktop)
  - Each language shows: Language name (bold link), article count (small gray text)
  - Examples: English (7.2M articles), Español (2.1M), Français (2.7M), Deutsch (3.1M), 中文 (1.5M), 日本語 (1.5M)
- Single search bar below languages
  - Input field + Search button
  - Placeholder: "Search"
- Footer links (minimal)
  - About | Disclaimers | Contact us

**Dark Mode Colors:**
- Background: #101418
- Text: #E8E8E8
- Links: #3366CC
- Borders: #404040

**Mobile:** Stack vertically, full width, same minimal aesthetic

---

### 2. MAIN PAGE (/wiki/main-page)
**Purpose:** Real homepage with content sections

**Header (persistent):**
- Left: Hamburger icon (mobile only) + Wikipedia wordmark
- Center-right: Search bar
- Right: Donate link, Login link, Appearance toggle (desktop)
- Dark theme toggle (top-right corner)

**Sidebar (left, desktop only):**
- Collapsible TOC-style navigation
- Links: Main Page, Contents, Current events, Random article, Help
- On mobile: Hidden behind hamburger menu

**Main Content Area:**

#### Section 1: Welcome Banner
- "Welcome to Wikipedia,"
- Intro text with bolded key phrases
- Article count stats
- Example: "266,705 articles in English • 7,198,354 articles in all languages"

#### Section 2: Two-Column Grid
**Left Column: "From today's featured article"**
- Heading with underline
- Thumbnail image (150x150px, left-aligned)
- Article title (bold, linked)
- 2-3 sentences of description
- "Full article..." link at bottom

**Right Column: "In the news"**
- Heading with underline
- Bulleted list (5-7 items)
- Each item: Bold linked terms + description
- Format: "• **Bold Term** – Description with more **linked terms**"

#### Section 3: Two-Column Grid
**Left Column: "Did you know..."**
- Heading with underline
- Bulleted list (4-5 items)
- Each starts with "...that" + linked term + description
- Format: "• ...that **Linked Article** can do X?"

**Right Column: "On this day"**
- Heading with underline
- Bulleted list with dates
- Format: "• **YYYY** – Event description with **linked terms**"

#### Section 4: Featured Video/Image (Optional)
- Full-width banner
- Heading: "Today's featured video"
- Video player thumbnail with play button
- Description below

#### Section 5: "Other areas of Wikipedia"
- Grid layout (2-4 columns)
- Categories with bullet lists:
  - Community portal
  - Village pump
  - Site news
  - Teahouse
  - Help desk
  - Contribute
  - Content portals

#### Section 6: "Wikipedia's sister projects"
- Grid of project boxes with icons
- Projects: Commons, MediaWiki, Wikibooks, Wikiquote, Wikiversity, Wikispecies, Wikidata, Wikisource, Wikifunctions, Wikinews, Wikivoyage, Wiktionary

#### Section 7: "Wikipedia languages"
- Text: "This Wikipedia is written in English. Many other Wikipedias are available..."
- Language list grouped by article count
- 1,000,000+ articles (10 languages)
- 250,000+ articles (20 languages)
- 50,000+ articles (30+ languages)

**Footer:**
- Legal text
- License info
- Links: About | Disclaimers | Contact us

---

### 3. ARTICLE PAGE (/wiki/[slug])
**Purpose:** Display individual articles with full Wikipedia structure

**Header (persistent):**
- Left: Hamburger (mobile) + Wikipedia wordmark
- Center-right: Search bar
- Right: Donate, Login, Appearance toggle
- Dark theme toggle

**Sidebar (left, desktop only - collapsible on mobile):**
- "Contents" heading with [hide] toggle
- Auto-generated table of contents from article sections
- Numbered list with section links
- Sticky on scroll (desktop)
- On mobile: Hidden behind hamburger or collapsible drawer

**Main Article Content:**

#### Article Header
- Article title (large serif, bold)
- Metadata: "Last edited [date] • [X] edits"
- Thin horizontal line separator

#### Article Body (3-column layout on desktop)

**Left Column (narrow, desktop only):**
- Infobox (if present)
  - Image at top (full width of infobox)
  - Key-value data table
  - Thin borders (#404040)
  - Background: #1A1C1F
  - Title row (bold)
  - Data rows with labels and values

**Center Column (main content):**
- Lead section (intro paragraph)
- Table of Contents box (if article has 3+ sections)
  - Heading: "Contents"
  - Numbered list of sections
  - Collapsible on mobile
- Article sections with proper hierarchy
  - H2 headings with bottom border
  - H3, H4 subheadings
  - Paragraphs with proper text wrapping
  - Inline blue links to related articles
  - Images with captions
  - Tables with horizontal scroll on mobile
  - Blockquotes/callouts

**Right Column (narrow, desktop only):**
- "Appearance" panel (Wikipedia feature)
  - Text size: Small / Standard (selected) / Large
  - Width: Standard / Wide
  - Color: Automatic / Light / Dark (radio buttons)
  - These are UI-only (no actual functionality needed for demo)
- "Related articles" box
  - Bulleted list of linked articles
- Edit/History links

#### References Section
- "References" heading with underline
- Numbered list of citations
- Format: "[1] Author, Title, Source, Date"

#### Footer
- Categories (if present)
- Last modified info
- Edit/History links

---

## Responsive Behavior

### Desktop (1024px+)
- 3-column layout: Sidebar | Content | Infobox/Appearance
- Full-width header with search bar
- All navigation visible
- Sticky sidebar and appearance panel

### Tablet (768px-1023px)
- 2-column layout: Sidebar (narrower) | Content
- Appearance panel hidden (becomes menu item)
- Search bar in header

### Mobile (< 768px)
- 1-column layout: Full-width content
- Sidebar hidden behind hamburger menu
- Infobox stacks above content
- Appearance panel as menu item
- Search bar in header
- Tables have horizontal scroll
- Text wraps properly (no word-per-line bug)

---

## Dark Mode Implementation

**Exact Colors (from Wikipedia dark mode):**
- Background: #101418
- Text: #E8E8E8
- Links: #3366CC
- Visited links: #8B7BA8
- Borders: #404040
- Infobox/Card background: #1A1C1F
- Hover: Underline on links
- Focus: Ring with #3366CC

**Light Mode (optional, secondary):**
- Background: #FFFFFF
- Text: #202122
- Links: #0645AD
- Visited links: #6B4C9A
- Borders: #A2A9B1
- Infobox/Card background: #F8F9FA

---

## Content Data Structure

All content stored in JSON files at `/client/public/data/articles/`

**Article JSON structure:**
```json
{
  "slug": "aethelgard",
  "title": "Aethelgard",
  "metadata": {
    "lastEdited": "2026-06-21",
    "editCount": 47,
    "views": 15234
  },
  "lead": "Aethelgard is a vast realm...",
  "infobox": {
    "image": "url",
    "data": [
      { "label": "Type", "value": "Realm" },
      { "label": "Population", "value": "12.5M" }
    ]
  },
  "sections": [
    {
      "id": "geography",
      "title": "Geography",
      "level": 2,
      "content": [
        { "type": "text", "content": "Markdown text..." },
        { "type": "image", "src": "url", "caption": "..." },
        { "type": "table", "columns": [...], "rows": [...] }
      ],
      "subsections": [...]
    }
  ],
  "references": [
    { "id": 1, "text": "Citation text" }
  ],
  "relatedArticles": ["lumina-collective", "ironclad-dominion"]
}
```

---

## Implementation Phases

1. **Landing Page** - Minimal, centered, language links, search
2. **Main Page** - Featured article, news, did you know, other areas
3. **Article Page** - Full 3-column layout with sidebar, infobox, appearance panel
4. **Dark Mode** - Apply exact Wikipedia colors
5. **Mobile Responsiveness** - Hamburger menu, stacking, full-width
6. **Light Mode** - Secondary theme
7. **Polish** - Animations, hover effects, accessibility

---

## Key Features to Implement

- ✅ Exact Wikipedia dark mode colors
- ✅ Proper typography (Georgia headings, system sans body)
- ✅ Left sidebar with TOC (collapsible on mobile)
- ✅ Right infobox with data table
- ✅ Appearance panel (text size, width, color)
- ✅ Table of contents with scroll highlighting
- ✅ Inline interlinking (blue links)
- ✅ Table horizontal scroll on mobile
- ✅ Proper text wrapping (no word-per-line bug)
- ✅ Hamburger menu on mobile
- ✅ Search bar in header
- ✅ Dark/light theme toggle
- ✅ Responsive layout (desktop/tablet/mobile)
- ✅ References section
- ✅ Related articles sidebar
