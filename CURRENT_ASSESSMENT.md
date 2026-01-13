# Current MonaKit Implementation Assessment

**Generated:** 2025-01-14  
**Purpose:** Document current state before migration to astro-sphere

## 1. Components Inventory

### Core Components (`src/components/`)
- `BaseHead.astro` - HTML head with meta tags
- `Footer.astro` - Site footer
- `Header.astro` - Site navigation header
- `HeaderLink.astro` - Navigation link component
- `BetaBadge.astro` - Beta version badge
- `FormattedDate.astro` - Date formatting component
- `OptimizedImage.astro` - Optimized image component
- `copy-button.tsx` - Copy to clipboard button (React)
- `ShareButtons.astro` - Social sharing buttons

### Knowledge Card Components (`src/components/knowledge-card/`)
- `CardActions.astro` - Card action buttons
- `CardBack.astro` - Card back side (flip animation)
- `CardContainer.astro` - Card container wrapper
- `CardCover.astro` - Card cover image
- `CardFront.astro` - Card front side
- `CardLink.astro` - Card link component
- `CardsPage.astro` - Cards listing page
- `KnowledgeCard.astro` - Interactive flip card
- `LinksModal.astro` - Links modal dialog
- `StructureDisplay.astro` - Structure display component
- `types.ts` - TypeScript types for cards

### Blog Components (`src/components/blog/`)
- `BlogCard.astro` - Blog post preview card
- `BlogsPage.astro` - Blog listing page

### Slide Components (`src/components/slide/`)
- `SlideCard.astro` - Slide presentation card
- `slide-viewer.tsx` - Reveal.js viewer (React)
- `SlidesPage.astro` - Slides listing page

### Landing Page Components (`src/components/landing-page/`)
- `HeroSection.astro` - Hero section with scrolling tags
- `LatestSection.astro` - Latest content section
- `ScrollingTags.astro` - Animated tag cloud

### Navigation Components (`src/components/navigation/`)
- `ContentNavigation.astro` - Content navigation

### Product Components
- `ProductCard.astro` - Product showcase card
- `ProductSection.astro` - Product showcase section

### Tag Filtering
- `TagFilter.astro` - Filter content by tags

### UI Components (`src/components/ui/`)
- `dialog.tsx` - Radix UI dialog (React)
- `sonner.tsx` - Toast notifications (Sonner)

### Image Viewer
- `image-viewer.tsx` - React-based image viewer

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

**Current Posts:**
- `2025-08/groq-code-cli-internal.md`
- `2025-09/enhance-image-rendering-in-revealjs-with-codex.md`

### Knowledge Cards (`src/schemas/card.ts`)
**Location:** `src/content/cards/`
**Schema Fields:**
- `title` (string, required)
- `tags` (array of strings, optional)
- `pubDate` (date, required)
- `template` (string, default: "blackWhite")

**Current Cards:**
- `2025-09/how-openai-uses-codex.md`

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

**Current Slides:**
- `2025-09/agents-md-101.md`
- `2025-12/quadratic-101.md`

### Doodles (`src/schemas/doodle.ts`)
**Location:** `src/content/doodles/`
**Schema Fields:**
- `title` (string, required)
- `description` (string, required)
- `pubDate` (date, required)
- `endDate` (date, required)

**Current Doodles:**
- `2025-09/monakit-released.md`
- `2025-10/mona-update-doodle-and-more.md`

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
- **Adapter:** Vercel with image service
- **Integrations:**
  - MDX with rehype-sanitize
  - React 19 (image-viewer, slide-viewer, dialog, sonner)
  - Sitemap
  - TailwindCSS 4 (Vite plugin)
  - Vercel adapter
- **Markdown:** rehype-sanitize for security
- **Image Domains:** public-files.gumroad.com
- **Site URL:** From environment variable
- **Bundle Analyzer:** Optional with ANALYZE flag

### Environment Variables (`src/env.ts`)
- `SITE_URL` - Required site URL for production

### Constants (`src/consts.ts`)
- `SITE_TITLE`: "tiktag.app"
- `SITE_DESCRIPTION`: "Settlement and Verification Service for Agentic Commerce"
- `PROD_URL`: "https://tiktag.app"
- `MENU_ITEMS`: Navigation items (Home, Products, Blog, Case Study, About)
- `DOODLE_EMOJIS`: List of emojis for doodles
- Theme configurations for knowledge cards and slides

### Package.json Dependencies

**Core:**
- Astro 5.14.0
- React 19.1.1
- React-DOM 19.1.1
- TailwindCSS 4.1.13 (@tailwindcss/vite)

**Integrations:**
- @astrojs/mdx ^4.3.6
- @astrojs/react ^4.4.0
- @astrojs/rss ^4.0.12
- @astrojs/vercel ^8.2.8
- @inox-tools/sitemap-ext ^0.7.0

**Special Features:**
- reveal.js ^5.2.1 (Presentations)
- reveal.js-mermaid-plugin ^11.6.0 (Diagrams)
- pagefind ^1.4.0 (Search)
- katex ^0.16.27 (Math rendering)
- animejs ^4.1.4 (Animations)

**UI Libraries:**
- @radix-ui/react-dialog ^1.1.15
- lucide-react ^0.544.0 (Icons)
- sonner ^2.0.7 (Toasts)
- clsx ^2.1.1 (Class utilities)
- tailwind-merge ^3.3.1 (Tailwind merging)

**Development:**
- Biome (linting & formatting)
- Husky (git hooks)
- tsx (TypeScript execution)
- vite-bundle-analyzer

## 5. Page Structure

### Pages (`src/pages/`)
- `index.astro` - Landing page with HeroSection, LatestSection, ProductSection
- `about.astro` - About page
- `creations.astro` - Creations page
- `products.astro` - Product showcase page
- `search.astro` - Search page (Pagefind)
- `404.astro` - Not found page
- `rss.xml.ts` - RSS feed generator
- `og-enhanced.ts` - OG image generator

### Blog Pages (`src/pages/blogs/`)
- `index.astro` - Blog listing
- `[...slug].astro` - Individual blog post

### Cards Pages (`src/pages/cards/`)
- `index.astro` - Cards listing
- `[...slug].astro` - Individual card

### Slides Pages (`src/pages/slides/`)
- `index.astro` - Slides listing
- `[...slug].astro` - Individual slide presentation

### Doodles Pages (`src/pages/doodles/`)
- `index.astro` - Doodles listing
- `[...slug].astro` - Individual doodle

## 6. Layouts

- `MainLayout.astro` - Main site layout
- `ContentIndexLayout.astro` - Content index layout

## 7. Styling

- `global.css` - Global styles
- `article.css` - Article/post styles
- `card.css` - Knowledge card styles
- `scrolling-tags.css` - Scrolling tags animation styles

## 8. Utility Libraries

- `lib/navigation.ts` - Navigation utilities
- `lib/pagination.ts` - Pagination utilities
- `lib/utils.ts` - General utilities (clsx, tailwind-merge)

## 9. Theme Files

- `themes/knowledge-card-themes.ts` - Card theme configurations
- `themes/slide-card-themes.ts` - Slide theme configurations

## 10. Asset Management

- `assets/creations.json` - Product data
- `assets/images/` - Image assets
- `assets/images/logo.webp` - Logo file

## 11. Special Functionality

### Knowledge Cards
- Interactive flip cards with front/back
- Multiple theme templates
- Card actions (copy, share)
- Links modal for resources
- Structure display for code snippets

### Presentations (Reveal.js)
- Full-featured slide viewer
- Mermaid diagram support
- Multiple themes
- Transitions and animations

### Product Showcase
- Product cards with descriptions
- Product section on landing page
- Creations.json for product data

### Search
- Pagefind integration for full-text search
- Search page with results display

### Animations
- Scrolling tags cloud
- Anime.js for animations
- Custom CSS animations

### Image Optimization
- OptimizedImage component
- Vercel image service
- Vercel OG image generation

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
- `/about` - About page
- `/blogs` - Blog index
- `/blogs/[slug]` - Individual blog post
- `/cards` - Knowledge cards index
- `/cards/[slug]` - Individual card
- `/creations` - Creations page
- `/products` - Product showcase
- `/slides` - Slides index
- `/slides/[slug]` - Individual slide presentation
- `/doodles` - Doodles index
- `/doodles/[slug]` - Individual doodle
- `/search` - Search page

## 14. Migration Requirements Summary

### To Keep & Migrate:
✅ Blog posts → blog/
✅ Knowledge cards → projects/
✅ Product showcase → Landing page integration
✅ RSS feed generation
✅ Sitemap generation
✅ MDX support
✅ Core utilities (clsx, tailwind-merge)

### To Remove:
❌ Reveal.js slides
❌ Doodles
❌ Knowledge card components (flip cards)
❌ Slide viewer
❌ React components (replace with SolidJS)
❌ Pagefind (replace with Fuse.js)
❌ Vercel adapter (switch to static)
❌ TailwindCSS 4 (downgrade to 3)
❌ Custom themes system

### To Adapt:
🔄 Header/Footer (copy from astro-sphere)
🔄 Navigation (update to new structure)
🔄 Search (replace Pagefind with Fuse.js)
🔄 Styling (use astro-sphere global.css)
🔄 Animations (replace with meteor/stars)

---

**End of Assessment Document**
