---
title: "Enhancing Image Rendering in Reveal.js Slides in Astro Sites Using Codex"
pubDate: "2025-09-22T16:47:25+08:00"
author: "Feng Yu, Hu Jian"
description: "During the integration of Reveal.js in Astro, we used Codex CLI to analyze and solve the problem of making images in Markdown Slides more Astro Native."
tags: ["ai", "web", "vibe-coding", "coding-cli"]
---

[Note: Feng Yu provided the first version, and Hu Jian supplemented the entire cause and effect of the process, reorganized the text and formatting on that basis.]

## Claude Code's First Implementation

[Our English technical site Mona](https://www.mymona.xyz/) implemented a Slides feature, using [Reveal.js](https://revealjs.com/) to render Markdown text. The effect is shown below:

- Latest slides

![latest slides](./imgs/slides-01.png)

- A single slide example

![a slide example](./imgs/slides-02.png)

The implementation isn't complex, just follow Astro's conventions:

1. Create a new content type.
2. Create the corresponding Astro page.
3. Integrate Reveal.js.

Naturally, Slides need images. Since Reveal.js renders on the client side, if you simply place images in the content directory like a typical Astro blog and reference them in Markdown with image paths, Reveal.js will fail to render images correctly. Because Astro doesn't automatically handle image paths in Markdown for this new content type like it does for its default blog support.

The solution is actually quite simple. At that time, Claude Code quickly gave a rough-and-ready solution: copy images to the `public/` directory during build time, then replace the image paths in Markdown. It even elegantly wrote a Vite plugin to implement this functionality.

The benefits of this approach are:

1. Slide authors don't need to worry about image path issues.
2. Images and Markdown can be placed together, making them easy to manage.

Thus the first version went live. While not perfect, it was functional enough.

## Trying Codex CLI, Let It Optimize

As a team with certain technical taste, we certainly wouldn't settle for a temporary expedient.

Since Astro itself has mature image optimization processing (cache busting, webp conversion, etc.) and it works well in blogs, we naturally wanted Slides images to also enjoy Astro's image optimization scheme. Making Slides images also benefit from Astro's image optimization - that is: more Astro Native!

### Essential Background Knowledge

First, let me explain the blog image processing process. For example, for an image referenced in the following Markdown:

```md
![Alt text](./imgs/example.png)
```

During the Astro build process, the image will be optimized to a path like `/_astro/imgs/example.abc123.webp`. Obviously, using the original path won't display the image correctly.

This problem doesn't occur when Astro renders Markdown to HTML itself, because Astro automatically replaces image paths during the Markdown rendering process. But when using Reveal.js for rendering, since we can't use Astro's built-in Render API, this problem naturally arises.

### Using Codex CLI to Analyze the Problem

Just at this time, Codex CLI had a new release with good reviews, and Claude Code had controversies about capability reduction and restrictions for domestic developers, so I decided to try Codex CLI to see if it could help me analyze and solve this problem.

We had already tried Codex CLI on a small scale before. I think the reason it's well-received in the community is that the code quality it generates is indeed good, with fewer hallucinations. I found that during its thinking process, it actively searches for relevant materials, and even directly goes to source code repositories to find the source code of libraries being called. For example, I found it actively reads `*.d.ts` files in the `node_modules/` package directory and related source code files to understand how to use a certain library. This is excellent. This behavior is rarely seen in other AI tools. It makes results more accurate. If you explicitly instruct it in the prompt that it must do this, it will follow this requirement even more. Other AIs often don't do this, leading to higher hallucination rates, and the generated code is almost unusable.

So in my prompt, I required it to actively find solutions from source code and the internet, making the solution more credible. The approximate prompt was as follows:

```txt
... (omitted large sections describing the current code situation and the problems encountered) ...

You need to carefully understand my problem and analyze possible solutions in detail. Including but not limited to the following means:

- Source code level analysis: find Astro's source code to see how it handles this type of images? Are there exposed methods or interfaces to get the real path of images?
- Query official documentation: are there any clues?
- Direct internet search: see if others have encountered this problem and whether it has been solved?
```

Thus Codex really conducted a lot of searches and returned the following results (excerpt):

#### Core Conclusions

- `slide.body` in `src/pages/slides/[...slug].astro` is treated as a pure string and stuffed into `SlideViewer`, and this React component carries `client:only="react"`, meaning Markdown is always only parsed in the browser. Astro/Vite cannot intervene to parse `![]()` or replace resource paths, causing relative paths to still point to `./imgs/_`. (source website)
- The current `slideImagesPlugin` just additionally copies images to `public/slides/**/imgs` to maintain old paths, but bypasses Astro's image optimization and caching; this is the root cause of "the temporary solution not being elegant enough" (`config/vite-plugin-slide-images.ts:1`).
- The blog page calls `const { Content } = await render(post);` in `src/pages/blogs/[...slug].astro:27`, that is, utilizing Astro's compilation chain to get `<Content />`, so images inside Markdown are rewritten to `/_astro/_.png` during compilation and handed over to image service hosting. (source website)

#### And gave 3 solutions (excerpt)

- Solution A (Keep Astro processing chain): Switch to `import.meta.glob` to load slide Markdown in `eager: true` mode, get MarkdownInstance, directly call `compiledContent()` to get the HTML already processed by Astro (including correct `/_astro/…` paths), then split the HTML into `<section>` required by Reveal or render with `dangerouslySetInnerHTML` in React. The advantage is completely reusing Astro's optimization and domain whitelist; the disadvantage is needing to add HTML→Section splitting logic on the server side.
- Solution B (Generate image mapping list): Use `import.meta.glob('/src/content/slides/*_/imgs/_', { import: 'default', query: '?url', eager: true })` to generate a "original relative path → built URL" mapping during build; before passing Markdown to SlideViewer, use regex or remark plugin to replace `./imgs/foo.png` with the mapped `/_astro/...`. This way Reveal still eats Markdown, but paths are already safe. Complexity is relatively low, and respects Astro's resource fingerprinting.
- Solution C (Truly customize markdown pipeline): Inject a custom remark plugin in Astro's `markdown.remarkPlugins`, when encountering image nodes, call Vite's `this.load({ id, query: '?url' })` or `new URL(relativePath, import.meta.url).href` to get the final URL and replace. This is the approach closest to Astro's native practice, but has the largest implementation volume, and needs to handle asynchrony in SSR environment.

The analysis was indeed very accurate, and also pointed out the previous "not elegant enough" solution. But I won't accept everything. As an AI user, I must have my own judgment ability and cannot completely rely on AI's analysis and conclusions.

### My Thinking and Practice

Actually, I wasn't very satisfied with any of these three solutions. Because I wanted a "simple" solution. These three solutions are either too heavy or deviate from the original requirements, feeling difficult to land.

So after evaluating these three solutions, I proposed my own solution, which is whether we could switch to Astro components instead of React components (SlideViewer), so we should be able to call Astro's internal processing pipeline. After discussing with Codex, we thought this solution wasn't feasible. This migration would be particularly complex, and couldn't completely solve our problem.

So I decided to take a step forward myself to see if I could find a better solution. After adding some print statements to the logs, I found that Astro wraps the parsed content in the object returned by the `getEntry()` method, and this object will contain some metadata and a `rendered` object. Among them, the metadata inside contains the image addresses referenced in the markdown. Something like this:

```js
{
  headings: [
    ...
  ],
  localImagePaths: [ './imgs/agents-md-ecosystem.png' ],
  remoteImagePaths: [],
  frontmatter: {
    ...
  },
  imagePaths: [ './imgs/agents-md-ecosystem.png' ]
}
```

I handed the printed results to Codex for further analysis to see if we could do something with this. This time Codex gave a new solution, and I thought it was very feasible:

... (omitted several solutions I thought weren't quite suitable) ...

#### Solution Two: Replace relative paths in Markdown with hash URLs on the server side first

In this solution, Codex believed we could use Vite's `eager` import function to import all image paths in advance, get all local images' compiled paths, then replace the relative paths in Markdown with hash URLs, so images can load normally.

This way, when the processed Markdown is parsed on the client side, it will use `/_astro/…` resources.

This solution was obviously much more reliable. After trying, I found it indeed works. After several rounds of prompt adjustments, I had Codex generate code that could directly get image paths optimized by Astro. It could perfectly replace the image paths in Markdown with the Astro-optimized webp image addresses, while keeping everything else unchanged.

This time I finally solved the problem quite perfectly. It took about 2 hours in total. Codex's internet search function is really great. It saved a lot of self-research implementation, prevented stepping into pits, and pulled things back on track in time.

## Summary

Looking back at the entire process, although Codex itself has outstanding functions, if there weren't someone guiding it as the controller, I'm afraid it would be difficult to get a satisfactory result. It would likely be either too simple or too complex, rather than the "just right" result we have now.
