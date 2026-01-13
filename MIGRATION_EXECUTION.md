# Theme Migration Execution Script

**Last Updated:** 2025-01-14  
**Purpose:** Step-by-step execution guide for MonaKit → astro-sphere migration

## Pre-Requisites

- Backup has been committed (Phase 1 complete)
- All new configuration files are ready (.new files)
- You have read THEME_MIGRATION_GUIDE.md and CURRENT_ASSESSMENT.md

---

## Phase 2: Dependency Updates (EXECUTE NOW)

### Step 2.1: Replace Configuration Files

```bash
cd ../tiktagweb

# Backup old configs
cp package.json package.json.old
cp astro.config.mjs astro.config.mjs.old
cp src/content.config.ts src/content.config.ts.old

# Apply new configs
mv package.json.new package.json
mv astro.config.mjs.new astro.config.mjs
mv content.config.ts.new src/content.config.ts
mv tailwind.config.mjs.new tailwind.config.mjs

# Commit config updates
git add -A
git commit -m "Phase 2: Update configuration files for astro-sphere migration"
```

### Step 2.2: Clean and Install Dependencies

```bash
# Remove node_modules and lock files
rm -rf node_modules
rm -f pnpm-lock.yaml package-lock.json

# Install new dependencies
pnpm install

# Commit dependency updates
git add -A
git commit -m "Phase 2: Install new dependencies (SolidJS, Astro 4, TailwindCSS 3)"
```

---

## Phase 3: Content Structure Migration

### Step 3.1: Reorganize Content Directories

```bash
cd ../tiktagweb/src/content

# Create new directory structure
mkdir -p blog work projects legal

# Migrate blogs → blog
mv blogs/* blog/
rm -rf blogs

# Migrate cards → projects (knowledge cards become projects)
# First, we need to update frontmatter in card files
# Then move them
mv cards/* projects/
rm -rf cards

# Remove slides (confirmed decision)
rm -rf slides

# Remove doodles (confirmed decision)
rm -rf doodles

# Create empty legal directory (can add privacy/terms later)
touch legal/.gitkeep

# Go back to project root
cd ../..

# Commit content reorganization
git add -A
git commit -m "Phase 3: Reorganize content directories"
```

### Step 3.2: Update Content Frontmatter

You need to manually update frontmatter in migrated files:

**Blog Posts (in `src/content/blog/`):**
```yaml
---
title: "Your Title"
summary: "Brief summary of the post"
date: 2025-01-14
tags: ["tag1", "tag2"]
draft: false
---
```

**Knowledge Cards → Projects (in `src/content/projects/`):**
```yaml
---
title: "Your Title"
summary: "Brief summary of the project"
date: 2025-01-14
tags: ["tag1", "tag2"]
draft: false
demoUrl: "https://example.com"
repoUrl: "https://github.com/user/repo"
---
```

**Update commands:**
```bash
# Use your editor or find-replace to update frontmatter
# Then commit
git add -A
git commit -m "Phase 3: Update content frontmatter for new schemas"
```

---

## Phase 4: Component Migration

### Step 4.1: Copy astro-sphere Components

```bash
cd ../tiktagweb

# Remove old components
rm -rf src/components

# Copy new components from astro-sphere
cp -r ../astro-sphere/src/components src/

# Commit component migration
git add -A
git commit -m "Phase 4: Migrate astro-sphere components"
```

### Step 4.2: Remove Old Directories

```bash
cd ../tiktagweb

# Remove MonaKit-specific directories
rm -rf src/schemas
rm -rf src/themes
rm -rf src/lib/navigation.ts
rm -rf src/lib/pagination.ts

# Remove old styles (keep global.css for now)
rm -f src/styles/article.css
rm -f src/styles/card.css
rm -f src/styles/scrolling-tags.css

# Copy astro-sphere styles
cp ../astro-sphere/src/styles/global.css src/styles/

# Copy utility files
cp ../astro-sphere/src/lib/utils.ts src/lib/
cp ../astro-sphere/src/types.ts src/

# Commit cleanup
git add -A
git commit -m "Phase 4: Remove MonaKit-specific files and styles"
```

---

## Phase 5: Layout Migration

```bash
cd ../tiktagweb

# Remove old layouts
rm -rf src/layouts

# Copy new layouts from astro-sphere
cp -r ../astro-sphere/src/layouts src/

# Commit layout migration
git add -A
git commit -m "Phase 5: Migrate astro-sphere layouts"
```

---

## Phase 6: Page Migration

### Step 6.1: Copy astro-sphere Pages

```bash
cd ../tiktagweb

# Copy core pages from astro-sphere
cp ../astro-sphere/src/pages/index.astro src/pages/
cp ../astro-sphere/src/pages/robots.txt.ts src/pages/

# Copy blog pages
mkdir -p src/pages/blog
cp ../astro-sphere/src/pages/blog/* src/pages/blog/

# Copy projects pages
mkdir -p src/pages/projects
cp ../astro-sphere/src/pages/projects/* src/pages/projects/

# Copy search pages
mkdir -p src/pages/search
cp ../astro-sphere/src/pages/search/* src/pages/search/

# Copy RSS feed
cp ../astro-sphere/src/pages/rss.xml.ts src/pages/

# Commit page migration
git add -A
git commit -m "Phase 6: Migrate astro-sphere pages"
```

### Step 6.2: Remove Old Pages

```bash
cd ../tiktagweb/src/pages

# Remove MonaKit-specific pages
rm -rf blogs
rm -rf cards
rm -rf slides
rm -rf doodles
rm -f search.astro
rm -f og-enhanced.ts

# Go back to root
cd ../..

# Commit cleanup
git add -A
git commit -m "Phase 6: Remove old MonaKit pages"
```

### Step 6.3: Adapt Remaining Pages

You'll need to manually adapt:
- `src/pages/about.astro` - Update to use new layouts
- `src/pages/creations.astro` - Remove or integrate into projects
- `src/pages/products.astro` - Adapt product showcase for landing page

---

## Phase 7: Configuration Updates

### Step 7.1: Update Constants

```bash
cd ../tiktagweb

# Copy astro-sphere types
cp ../astro-sphere/src/types.ts src/types.ts

# Create new consts.ts
cat > src/consts.ts << 'EOF'
import type { Site, Page, Links, Socials } from "@types"

export const SITE: Site = {
  TITLE: "tiktag.app",
  DESCRIPTION: "Settlement and Verification Service for Agentic Commerce",
  AUTHOR: "Tiktag",
}

export const LINKS: Links = [
  { TEXT: "Home", HREF: "/" },
  { TEXT: "Blog", HREF: "/blog" },
  { TEXT: "Projects", HREF: "/projects" },
  { TEXT: "About", HREF: "/about" },
]

export const SOCIALS: Socials = [
  // Add your social links here
]

// Optional: Define page constants
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}
EOF

# Commit configuration updates
git add -A
git commit -m "Phase 7: Update constants and types"
```

### Step 7.2: Update Environment Variables

```bash
cd ../tiktagweb

# Simplify env.ts (Vercel-specific configs removed)
cat > src/env.ts << 'EOF'
export default {
  SITE_URL: import.meta.env.SITE_URL || "http://localhost:4321",
}
EOF

# Commit env updates
git add -A
git commit -m "Phase 7: Simplify environment variables"
```

---

## Phase 8: Assets Migration

```bash
cd ../tiktagweb

# Keep assets/images/ directory
# Review and remove theme-specific images if needed

# Update public assets if necessary
# Copy any astro-sphere-specific assets if needed

# Commit asset updates
git add -A
git commit -m "Phase 8: Update assets and public files"
```

---

## Phase 9: Testing

### Step 9.1: Development Testing

```bash
cd ../tiktagweb

# Start dev server
pnpm dev
```

**Test Checklist:**
- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Blog pages render
- [ ] Project pages render
- [ ] Search functionality works
- [ ] Light/dark theme toggle (if implemented)
- [ ] Animations work correctly
- [ ] Responsive design on mobile

### Step 9.2: Build Testing

```bash
cd ../tiktagweb

# Build the site
pnpm build

# Preview the build
pnpm preview
```

**Test Checklist:**
- [ ] Build succeeds without errors
- [ ] All pages generate correctly
- [ ] RSS feed generates
- [ ] Sitemap generates
- [ ] No console errors in preview

### Step 9.3: Content Validation

- [ ] Verify all blog posts display correctly
- [ ] Check all migrated projects (knowledge cards) display
- [ ] Verify internal links work
- [ ] Check image references
- [ ] Validate RSS feed at `/rss.xml`

### Step 9.4: Performance Testing

```bash
# Run Lighthouse audit (use Chrome DevTools or webpagetest.org)
# Target: 100/100 score
# Check bundle sizes (should be under 100kb per page)
```

---

## Phase 10: Post-Migration Tasks

### Step 10.1: Product Showcase Integration

If you want to keep the product showcase, integrate it into the landing page:

```bash
cd ../tiktagweb

# The ProductSection.astro and ProductCard.astro need to be adapted
# Modify src/pages/index.astro to include product showcase
```

### Step 10.2: Update Documentation

```bash
cd ../tiktagweb

# Update README.md
# Document new content structure
# Update contribution guidelines
# Update development instructions

git add README.md
git commit -m "Phase 10: Update documentation"
```

### Step 10.3: SEO Updates

- Update meta tags in `src/components/BaseHead.astro`
- Verify canonical URLs
- Set up redirects for changed routes if needed
- Update sitemap submission

### Step 10.4: Analytics

- Update analytics tracking
- Verify event tracking
- Test Google Analytics or other analytics

---

## Rollback Plan

If migration fails at any point:

```bash
cd ../tiktagweb

# Rollback to backup commit
git log --oneline | grep "Backup before theme migration"
git checkout <commit-hash>

# Or reset to the backup branch
git checkout main
```

---

## Troubleshooting

### Issue: pnpm install fails
**Solution:**
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install --force
```

### Issue: Build fails with type errors
**Solution:**
```bash
pnpm check
# Fix type errors reported
```

### Issue: Content not displaying
**Solution:**
- Check frontmatter matches new schema
- Verify file locations match content config
- Run `pnpm build` and check for errors

### Issue: Styles not applying
**Solution:**
- Verify tailwind.config.mjs is present
- Check that `@tailwindcss/typography` plugin is installed
- Run `pnpm build` to regenerate styles

---

## Final Checklist

- [ ] All configuration files updated
- [ ] Dependencies installed successfully
- [ ] Content migrated and frontmatter updated
- [ ] Components copied from astro-sphere
- [ ] Old components and pages removed
- [ ] Layouts migrated
- [ ] Pages adapted to new structure
- [ ] Constants and configuration updated
- [ ] Development server runs successfully
- [ ] Build completes without errors
- [ ] All pages render correctly
- [ ] Search functionality works
- [ ] RSS feed generates
- [ ] Sitemap generates
- [ ] Performance targets met (100/100 Lighthouse)
- [ ] Documentation updated
- [ ] Git commits for each phase

---

## Ready to Deploy

After completing all phases and testing:

```bash
cd ../tiktagweb

# Final build
pnpm build

# Test production build locally
pnpm preview

# Push to remote
git push origin tiktag

# Deploy to your hosting platform
# (Vercel, Netlify, etc.)
```

---

**Migration Complete!** 🎉
