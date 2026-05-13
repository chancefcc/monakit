---
name: apply-landing-theme
description: Apply vchat.email landing page color scheme, fonts, and typography to another web project
version: 1.0.0
---

# Apply vchat-landing Theme

Apply the light/dark color palette, font families, and typographic system from the vchat.email landing page (`vchat-landing/`) to a target web project.

## Step 1: Color Tokens

### Light Mode Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `vchat-primary` | `#3B82F6` | Primary actions, links, interactive elements |
| `vchat-primary-dark` | `#1D4ED8` | Primary hover/active states |
| `vchat-dark` | `#0A0A0F` | Darkest shade — dark mode bg |
| `vchat-text` | `#1E1E2E` | Body text (light mode) |
| `vchat-text-secondary` | `#6B7280` | Secondary/muted text |
| `vchat-bg` | `#FAFAFA` | Page background (light mode) |
| `vchat-bg-secondary` | `#F3F4F6` | Card/section surfaces (light) |
| `vchat-border` | `#E5E7EB` | Borders, dividers |
| `vchat-accent` | `#8B5CF6` | Accent highlights |
| `vchat-accent-dark` | `#7C3AED` | Accent hover states |
| `vchat-success` | `#10B981` | Success states |
| `vchat-warning` | `#F59E0B` | Warning states |

### Dark Mode Overrides

| Context | Light | Dark |
|---------|-------|------|
| Background | `white` | `black` |
| Text | `black/75` | `white/75` |
| Border | `black/10` | `white/25` |
| Surface bg | `white` | `black` or `#0A0A0F` |
| Header scrolled | `white/75` backdrop-blur | `black/50` backdrop-blur |
| Active nav | `bg-black text-white` | `bg-white text-black` |
| Hover nav/icon | `bg-black/5` | `bg-white/20` |

## Step 2: Font Families

| Family | Stack | Usage |
|--------|-------|-------|
| **Exo 2** | `"Exo 2", sans-serif` | Body, UI, general content |
| **Space Grotesk** | `"Space Grotesk", sans-serif` | All headings `h1`-`h6` |
| **Mono** | `"JetBrains Mono", "Fira Code", monospace` | Code blocks |

### Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;700;800&display=swap" rel="stylesheet">
```

## Step 3: Typography

### Base

```css
html { font-family: "Exo 2", sans-serif; color-scheme: light; }
html.dark { color-scheme: dark; }
html, body { @apply h-full w-full antialiased text-black/75 dark:text-white/75 bg-white dark:bg-black; }
h1, h2, h3, h4, h5, h6 { font-family: "Space Grotesk", sans-serif; }
```

### Page Heading

```css
.page-heading {
  font-family: "Space Grotesk", sans-serif;
  font-size: 1.875rem; font-weight: 600;
  line-height: 1.2; letter-spacing: -0.01em;
}
@media (max-width: 768px) { .page-heading { font-size: 2rem; } }
```

## Step 4: Interaction

```css
.blend { @apply transition-all duration-300 ease-in-out; }
```

Apply on hoverables: `hover:text-black dark:hover:text-white`, `hover:bg-black/5 dark:hover:bg-white/20`, header scroll: `backdrop-blur-sm saturate-200`.

## Step 5: Tailwind Config Snippet

```js
export default {
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        vchat: {
          primary: "#3B82F6", "primary-dark": "#1D4ED8",
          dark: "#0A0A0F",
          text: "#1E1E2E", "text-secondary": "#6B7280",
          bg: "#FAFAFA", "bg-secondary": "#F3F4F6",
          border: "#E5E7EB",
          accent: "#8B5CF6", "accent-dark": "#7C3AED",
          success: "#10B981", warning: "#F59E0B",
        },
      },
      fontFamily: {
        sans: ["Exo 2", ...defaultTheme.fontFamily.sans],
        heading: ["Space Grotesk", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrains Mono", "Fira Code", ...defaultTheme.fontFamily.mono],
      },
    },
  },
};
```
