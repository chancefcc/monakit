# Current astro-sphere Implementation Status

**Generated:** 2025-01-14  
**Purpose:** Document current state after migration to astro-sphere

## 1. Components Inventory

### Core Components (`src/components/`)
- `BaseHead.astro` - HTML head with meta tags
- `Container.astro` - Container wrapper
- `Footer.astro` - Site footer
- `Header.astro` - Site navigation header
- `Drawer.astro` - Mobile navigation drawer
- `ArrowCard.tsx` - Arrow card component
- `Counter.tsx` - Counter component
- `MeteorShower.astro` - Meteor shower animation
- `TwinklingStars.astro` - Twinkling stars animation

### Search Components
- `Search.tsx` - Main search component (SolidJS + Fuse.js)
- `SearchBar.tsx` - Search input bar (SolidJS)
- `SearchCollection.tsx` - Search results collection (SolidJS)

### Product/Stack Components
- `StackCard.astro` - Stack showcase card

## 2. Content Collections & Schemas

### Blog Posts (`src/schemas/blog.ts`)
**Location:** `src/content/blogs/`
**Schema Fields:**
- `title` (string, required)
- `description` (string, required)
- `pubDate` (date, required)
- `updatedDate` (date, optional)
- `author` (string, optional)
- `tags` (array of strings, optional)
- `metadata` (array of strings, optional)
- `draft` (boolean, optional)

**Current Posts:**
- `2025-01/pivoting-tiktag.md`

### Knowledge Cards (`src/schemas/card.ts`)
**Location:** `src/content/cards/`
**Schema Fields:**
- `title` (string, required)
- `tags` (array of strings, optional)
- `pubDate` (date, required)
- `template` (string, default: "blackWhite")

### Slides (`src/schemas/slide.ts`)
**Location:** `src/content/slides/`
**Schema Fields:**
- `title` (string, required)
- `description` (string, required)
- `pubDate` (date, required)
- `author` (string, optional)
- `tags` (array of strings, optional)
- `transition` (string, optional)
- `theme` (string, optional)

### Doodles (`src/schemas/doodle.ts`)
**Location:** `src/content/doodles/`
**Schema Fields:**
- `title` (string, required)
- `description` (string, required)
- `pubDate` (date, required)
- `endDate` (date, required)

## 3. Content Configuration

**File:** `src/content.config.ts`

Uses Astro 5 glob loader pattern:
- Blogs: `src/content/blogs/**/[0-9][0-9][0-9][0-9]-[0-9][0-9]/*.{md,mdx}`
- Cards: `src/content/cards/**/*.{md,mdx}`
- Slides: `src/content/slides/**/*.{md,mdx}`
- Doodles: `src/content/doodles/**/*.{md,mdx}`

## 4. Current Configuration

### Astro Configuration (`astro.config.mjs`)
- **Output:** Server (SSR)
- **Adapter:** Vercel
- **Integrations:**
  - MDX with rehype-sanitize
  - React 19 (for compatibility)
  - SolidJS (for interactive components)
  - Sitemap
  - TailwindCSS 4 (Vite plugin)
- **Markdown:** rehype-sanitize for security
- **Site URL:** From environment variable

### Environment Variables (`src/env.ts`)
- `SITE_URL` - Required site URL for production

### Constants (`src/consts.ts`)
- `SITE_TITLE`: "tiktag.app"
- `SITE_DESCRIPTION`: "Settlement and Verification Service for Agentic Commerce"
- `LINKS`: Navigation items (Home, Features, Blog, About)
- `FEATURES`: Features page constants
- `SEARCH`: Search page constants
- `SOCIALS`: Social media links

### Package.json Dependencies

**Core:**
- Astro 5
- React 19
- SolidJS
- TailwindCSS 4

**Integrations:**
- @astrojs/mdx
- @astrojs/react
- @astrojs/sitemap
- @astrojs/vercel

**Special Features:**
- fuse.js (Fuzzy search)
- animejs (Animations)

**Development:**
- Biome (linting & formatting)
- tsx (TypeScript execution)

## 5. Page Structure

### Pages (`src/pages/`)
- `index.astro` - Landing page
- `features/index.astro` - Features page
- `about/index.astro` - About page
- `search/index.astro` - Search page
- `legal/terms/index.astro` - Terms of service
- `legal/privacy/index.astro` - Privacy policy
- `404.astro` - Not found page

### Blog Pages (`src/pages/blogs/`)
- `index.astro` - Blog listing
- `[...slug].astro` - Individual blog post

### Cards Pages (`src/pages/cards/`)
- `index.astro` - Cards listing
- `[...slug].astro` - Individual card

### Slides Pages (`src/pages/slides/`)
- `index.astro` - Slides listing
- `[...slug].astro` - Individual slide

### Doodles Pages (`src/pages/doodles/`)
- `index.astro` - Doodles listing
- `[...slug].astro` - Individual doodle

## 6. Layouts

- `PageLayout.astro` - Main page layout
- `TopLayout.astro` - Top section layout
- `BottomLayout.astro` - Bottom section layout
- `ArticleTopLayout.astro` - Article top layout
- `ArticleBottomLayout.astro` - Article bottom layout

## 7. Styling

- `global.css` - Global styles
- Utilities in TailwindCSS 4

## 8. Utility Libraries

- `lib/utils.ts` - General utilities (clsx, tailwind-merge)

## 9. Theme Files

- `themes/` - Theme configurations

## 10. Asset Management

- `assets/creations.json` - Product data
- `assets/images/` - Image assets
- `assets/images/logo.webp` - Logo file

## 11. Special Functionality

### Search
- Client-side fuzzy search using Fuse.js
- SolidJS for reactive search
- Real-time results as you type
- Search across blog and project content

### Animations
- Meteor shower background effect
- Twinkling stars animation
- Anime.js for custom animations

### Navigation
- Responsive header with mobile drawer
- Dark/light mode toggle
- Search button
- RSS feed link

## 12. Content Organization

### Blog Posts
Organized by year/month: `src/content/blogs/YYYY-MM/`

### Knowledge Cards
Organized by year/month: `src/content/cards/YYYY-MM/`

### Slides
Organized by year/month: `src/content/slides/YYYY-MM/`

### Doodles
Organized by year/month: `src/content/doodles/YYYY-MM/`

## 13. Current Routes

- `/` - Landing page
- `/features` - Features page
- `/about` - About page
- `/blogs` - Blog index
- `/blogs/[slug]` - Individual blog post
- `/cards` - Knowledge cards index
- `/cards/[slug]` - Individual card
- `/slides` - Slides index
- `/slides/[slug]` - Individual slide
- `/doodles` - Doodles index
- `/doodles/[slug]` - Individual doodle
- `/search` - Search page
- `/legal/terms` - Terms of service
- `/legal/privacy` - Privacy policy

---

**End of Assessment Document**
