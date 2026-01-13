# Theme Migration Guide: MonaKit → astro-sphere

## Overview

This guide provides step-by-step instructions to migrate tiktagweb from the MonaKit theme to the astro-sphere theme.

## Key Differences

| Feature | MonaKit (Current) | astro-sphere (Target) |
|---------|-------------------|----------------------|
| Astro Version | 5.14.0 | 4.4.13 |
| UI Framework | React 19 | SolidJS |
| TailwindCSS | 4.x (Vite plugin) | 3.x (Astro integration) |
| Content Collections | blogs, cards, slides, doodles | work, blog, projects, legal |
| Search | Pagefind | Fuse.js |
| Deployment | Vercel (SSR) | Static (no adapter) |
| Animations | Reveal.js, custom | Meteor shower, twinkling stars |
| Special Features | Knowledge cards, product showcase | Minimalist, light/dark theme |

## Migration Strategy

### Phase 1: Assessment & Backup

1. **Backup Current Implementation**
   ```bash
   cd ../tiktagweb
   git add .
   git commit -m "Backup before theme migration"
   git push
   ```

2. **Document Current Features**
   - List all custom components in `src/components/`
   - Document content schemas in `src/schemas/`
   - Note any special functionality (reveal.js, knowledge cards, etc.)
   - Save current configuration values

### Phase 2: Dependency Updates

1. **Update package.json dependencies**
   - Remove React and React-related packages
   - Add SolidJS dependencies
   - Update TailwindCSS from v4 to v3
   - Remove Vercel adapter (switch to static output)
   - Replace Pagefind with Fuse.js
   - Remove reveal.js, reveal.js-mermaid-plugin

2. **Install new dependencies**
   ```bash
   cd ../tiktagweb
   rm -rf node_modules
   pnpm install
   ```

### Phase 3: Configuration Migration

1. **Update astro.config.mjs**

   Replace current config with astro-sphere's structure:
   ```javascript
   import { defineConfig } from "astro/config"
   import mdx from "@astrojs/mdx"
   import sitemap from "@astrojs/sitemap"
   import tailwind from "@astrojs/tailwind"
   import solidJs from "@astrojs/solid-js"

   export default defineConfig({
     site: "https://tiktag.app", // Update to your domain
     output: "static", // Changed from "server"
     integrations: [
       mdx(),
       sitemap(),
       solidJs(),
       tailwind({ applyBaseStyles: false })
     ],
     // Remove Vercel adapter and other MonaKit-specific configs
   })
   ```

2. **Update or remove tailwind.config.mjs**
   - astro-sphere uses `tailwind.config.mjs`
   - MonaKit uses TailwindCSS 4 with Vite plugin (no config file)
   - You'll need to create a TailwindCSS 3 config

3. **Update tsconfig.json**
   - Compare with astro-sphere's tsconfig
   - Ensure SolidJS types are included

### Phase 4: Content Structure Migration

1. **Migrate Content Collections**

   **Current MonaKit Structure:**
   - `blogs/` - Blog posts
   - `cards/` - Knowledge cards
   - `slides/` - Reveal.js presentations
   - `doodles/` - Announcements

   **Target astro-sphere Structure:**
   - `blog/` - Blog posts
   - `projects/` - Projects
   - `work/` - Work experience
   - `legal/` - Legal pages

2. **Map Content Types:**
   - `blogs/` → `blog/` (direct migration)
   - `cards/` → `projects/` (knowledge cards become projects)
   - `slides/` → `blog/` (or create a new collection)
   - `doodles/` → Consider removing or migrating to `blog/`

3. **Update Content Schemas**

   Replace MonaKit schemas with astro-sphere's schema structure in `src/content/config.ts`:
   ```typescript
   import { defineCollection, z } from "astro:content"

   const work = defineCollection({
     type: "content",
     schema: z.object({
       company: z.string(),
       role: z.string(),
       dateStart: z.coerce.date(),
       dateEnd: z.union([z.coerce.date(), z.string()]),
     }),
   })

   const blog = defineCollection({
     type: "content",
     schema: z.object({
       title: z.string(),
       summary: z.string(),
       date: z.coerce.date(),
       tags: z.array(z.string()),
       draft: z.boolean().optional(),
     }),
   })

   const projects = defineCollection({
     type: "content",
     schema: z.object({
       title: z.string(),
       summary: z.string(),
       date: z.coerce.date(),
       tags: z.array(z.string()),
       draft: z.boolean().optional(),
       demoUrl: z.string().optional(),
       repoUrl: z.string().optional(),
     }),
   })

   const legal = defineCollection({
     type: "content",
     schema: z.object({
       title: z.string(),
       date: z.coerce.date(),
     }),
   })

   export const collections = { work, blog, projects, legal }
   ```

4. **Migrate Content Files**
   - Update frontmatter in all content files to match new schemas
   - Reorganize content directories to match astro-sphere structure
   - Update internal links in content files

### Phase 5: Component Migration

1. **Replace React Components with SolidJS**

   **MonaKit React Components to Replace:**
   - `image-viewer.tsx` → Convert to SolidJS or remove
   - `slide-viewer.tsx` → Remove (reveal.js not used in astro-sphere)
   - `ui/dialog.tsx` → Convert to SolidJS
   - `ui/sonner.tsx` → Remove or replace with SolidJS alternative

2. **Migrate Core Components**

   Copy these from astro-sphere:
   - `src/components/BaseHead.astro`
   - `src/components/Header.astro`
   - `src/components/Footer.astro`
   - `src/components/Container.astro`
   - `src/components/ArrowCard.tsx` (SolidJS)
   - `src/components/StackCard.tsx` (SolidJS)
   - `src/components/Search.tsx` (SolidJS)
   - `src/components/SearchBar.tsx` (SolidJS)
   - `src/components/SearchCollection.tsx` (SolidJS)
   - `src/components/Drawer.astro`
   - `src/components/MeteorShower.astro`
   - `src/components/TwinklingStars.astro`

3. **Remove/Refactor MonaKit-Specific Components:**
   - `components/knowledge-card/` - Remove (flip cards not in astro-sphere)
   - `components/slide/` - Remove (reveal.js not supported)
   - `components/blog/` - Migrate to astro-sphere structure
   - `components/landing-page/` - Adapt or replace
   - `components/ProductSection.astro` - Remove or adapt
   - `components/TagFilter.astro` - Remove or adapt
   - `components/ShareButtons.astro` - Not yet in astro-sphere (roadmap item)

4. **Update Utilities**

   Copy from astro-sphere:
   - `src/lib/utils.ts`
   - `src/types.ts`

   Remove MonaKit-specific:
   - `src/lib/navigation.ts`
   - `src/lib/pagination.ts`
   - `src/themes/` - Remove custom theme files
   - `src/schemas/` - Replace with content config

### Phase 6: Layout Migration

1. **Replace Layouts**

   Copy from astro-sphere:
   - `src/layouts/ArticleBottomLayout.astro`
   - `src/layouts/ArticleTopLayout.astro`
   - `src/layouts/BottomLayout.astro`
   - `src/layouts/TopLayout.astro`

   Remove MonaKit layouts:
   - `src/layouts/ContentIndexLayout.astro`
   - `src/layouts/MainLayout.astro`

### Phase 7: Page Migration

1. **Migrate Pages**

   Copy from astro-sphere:
   - `src/pages/index.astro`
   - `src/pages/blog/[...slug].astro`
   - `src/pages/blog/index.astro`
   - `src/pages/projects/[...slug].astro`
   - `src/pages/projects/index.astro`
   - `src/pages/search/index.astro`
   - `src/pages/rss.xml.ts`
   - `src/pages/robots.txt.ts`

   Adapt MonaKit pages:
   - `src/pages/about.astro` → Adapt to use new layout
   - `src/pages/creations.astro` → Remove or adapt
   - `src/pages/products.astro` → Remove or adapt

   Remove MonaKit-specific:
   - `src/pages/blogs/` → Replace with astro-sphere's blog pages
   - `src/pages/cards/` → Remove or migrate to projects
   - `src/pages/slides/` → Remove
   - `src/pages/doodles/` → Remove or migrate to blog
   - `src/pages/og-enhanced.ts` → Remove if not needed
   - `src/pages/search.astro` → Replace with astro-sphere's search

2. **Update Route Structure**

   MonaKit routes:
   - `/` - Landing page with HeroSection, LatestSection, ProductSection
   - `/blogs` - Blog index
   - `/cards` - Knowledge cards
   - `/slides` - Reveal.js presentations
   - `/doodles` - Announcements
   - `/products` - Product showcase
   - `/about` - About page

   astro-sphere routes:
   - `/` - Landing page
   - `/blog` - Blog index
   - `/projects` - Projects index
   - `/work` - Work experience
   - `/search` - Search page

### Phase 8: Styling Migration

1. **Update Styles**

   Copy from astro-sphere:
   - `src/styles/global.css`

   Remove MonaKit-specific:
   - `src/styles/article.css`
   - `src/styles/card.css`
   - `src/styles/scrolling-tags.css`

2. **TailwindCSS Configuration**

   Create `tailwind.config.mjs` from astro-sphere's configuration
   Remove TailwindCSS 4 Vite plugin from astro.config.mjs

### Phase 9: Constants & Configuration

1. **Update Constants**

   Replace `src/consts.ts` with astro-sphere's structure:
   ```typescript
   import type { Site, Page, Links, Socials } from "@types"

   export const SITE: Site = {
     TITLE: "tiktag.app",
     DESCRIPTION: "Settlement and Verification Service for Agentic Commerce",
     AUTHOR: "Your Name", // Update
   }

   export const LINKS: Links = [
     { TEXT: "Home", HREF: "/" },
     { TEXT: "Blog", HREF: "/blog" },
     { TEXT: "Projects", HREF: "/projects" },
     { TEXT: "About", HREF: "/about" },
   ]

   export const SOCIALS: Socials = [
     // Add your social links
   ]
   ```

2. **Update Environment Variables**

   Update `src/env.ts` to remove Vercel-specific configs:
   ```typescript
   export default defineConfig({
     SITE_URL: "https://tiktag.app",
   })
   ```

### Phase 10: Assets Migration

1. **Migrate Images**

   - Keep `src/assets/images/`
   - Update any image paths in components
   - Remove theme-specific images if not needed

2. **Update Public Assets**

   - Review `public/` directory
   - Remove MonaKit-specific assets
   - Add any astro-sphere-specific assets if needed

### Phase 11: Testing & Refinement

1. **Development Testing**

   ```bash
   cd ../tiktagweb
   pnpm dev
   ```

   Test:
   - All pages render correctly
   - Navigation works
   - Search functionality works
   - Light/dark theme toggle (if implemented)
   - Animations work correctly
   - Responsive design on mobile

2. **Build Testing**

   ```bash
   pnpm build
   pnpm preview
   ```

3. **Content Validation**

   - Verify all content displays correctly
   - Check links work
   - Validate RSS feed generates
   - Verify sitemap generates

4. **Performance Testing**

   - Run Lighthouse audit
   - Target 100/100 score (astro-sphere's standard)
   - Check bundle sizes (should be under 100kb)

### Phase 12: Deployment

1. **Update Deployment Configuration**

   - Remove Vercel adapter-specific configurations
   - Update deployment scripts in `package.json`

2. **Deploy**

   ```bash
   pnpm build
   # Deploy static build to your hosting platform
   ```

## Feature Compatibility Matrix

| Feature | MonaKit | astro-sphere | Migration Path |
|---------|---------|--------------|----------------|
| Blog Posts | ✅ | ✅ | Direct migration |
| Knowledge Cards | ✅ | ❌ | Migrate to projects or remove |
| Reveal.js Slides | ✅ | ❌ | Remove or custom implement |
| Product Showcase | ✅ | ❌ | Remove or custom implement |
| Search | ✅ (Pagefind) | ✅ (Fuse.js) | Replace search implementation |
| Light/Dark Theme | ❌ | ✅ | New feature |
| Animations | Custom | Meteor/Stars | Replace animations |
| Work Experience | ❌ | ✅ | Add if needed |
| Legal Pages | ❌ | ✅ | Add if needed |
| MDX Support | ✅ | ✅ | Keep, update imports |
| RSS Feed | ✅ | ✅ | Keep, verify generation |
| Sitemap | ✅ | ✅ | Keep, verify generation |

## Migration Decisions (Confirmed)

### 1. Knowledge Cards → Projects
**Action:** Migrate all knowledge cards to the `projects/` collection with simplified metadata
- Convert knowledge card content to project format
- Update frontmatter to match project schema
- Preserve valuable research content
- Remove knowledge-card specific components and styling

### 2. Reveal.js Slides → Remove
**Action:** Remove all Reveal.js presentations
- Delete `src/content/slides/` directory
- Remove slide-specific components (`src/components/slide/`)
- Remove reveal.js and reveal.js-mermaid-plugin dependencies
- Remove slide-related pages (`src/pages/slides/`)

### 3. Product Showcase → Landing Page
**Action:** Integrate product showcase into the main landing page
- Adapt `ProductSection.astro` component to work with astro-sphere
- Integrate products into `src/pages/index.astro`
- Keep product data in `src/assets/creations.json`
- Update product card styling to match astro-sphere design

### 4. Doodles (Announcements) → Remove
**Action:** Remove all doodles/announcements
- Delete `src/content/doodles/` directory
- Remove doodle-specific pages (`src/pages/doodles/`)
- Use blog posts for future announcements

## Rollback Plan

If migration fails, you can quickly rollback:

```bash
cd ../tiktagweb
git checkout -b theme-migration
git checkout main
# Your original implementation is restored
```

## Estimated Timeline

- **Phase 1-2:** Assessment & Dependencies - 1-2 hours
- **Phase 3-4:** Configuration & Content - 2-3 hours
- **Phase 5-7:** Component & Page Migration - 4-6 hours
- **Phase 8-10:** Styling & Configuration - 2-3 hours
- **Phase 11-12:** Testing & Deployment - 2-3 hours

**Total Estimated Time:** 11-17 hours

## Post-Migration Tasks

1. **Update Documentation**
   - Update README.md
   - Document new content structure
   - Update contribution guidelines

2. **SEO Considerations**
   - Update meta tags
   - Verify canonical URLs
   - Check redirects for changed routes
   - Update sitemap submission

3. **Analytics**
   - Update analytics tracking
   - Verify event tracking

4. **Content Review**
   - Audit all migrated content
   - Update internal links
   - Verify image references

## Additional Notes

### astro-sphere Advantages
- **Performance:** 100/100 Lighthouse score
- **Lightweight:** All pages under 100kb
- **Fast:** ~40ms render time
- **Minimal:** Clean, focused design
- **Animation:** Subtle, professional animations

### Potential Challenges
- **Content Structure:** Significant restructuring required
- **Framework Change:** React → SolidJS learning curve
- **Feature Loss:** Some MonaKit features not available
- **Customization:** May need to add back Tiktag-specific features

## Support Resources

- **astro-sphere Repository:** https://github.com/markhorn-dev/astro-sphere
- **Astro Documentation:** https://docs.astro.build
- **SolidJS Documentation:** https://www.solidjs.com/docs
- **TailwindCSS 3 Documentation:** https://tailwindcss.com

---

**Last Updated:** 2025-01-14
**Migration Target:** MonaKit → astro-sphere v1.0.0
