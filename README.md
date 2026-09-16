# fAIrwall AI — marketing website

Static site. No build step, no dependencies. `index.html` is the entry point.

## Deploy

Netlify is linked to this repo's `main` branch.

- Publish directory: `.`
- Build command: *(none)*
- Every push to `main` deploys automatically
- Pull requests get a Netlify deploy preview URL — check that before merging

## Structure

| Path | What it is |
|---|---|
| `index.html` | English homepage — loads all section components |
| `index-de.html` | German homepage (same components, `?lang=de`) |
| `*.jsx` | Section components (Hero, Pricing, LiveDemo…), rendered in-browser via Babel |
| `styles.css` | Design-system tokens and base styles |
| `responsive.css` | Mobile and tablet overrides |
| `article.css`, `legal.css` | Insights articles, legal pages |
| `i18n.js` | EN/DE copy dictionary |
| `analytics.js` | GA4 loader, gated behind cookie consent |
| `assets/` | Images, video, logo |
| `insights.html` + 5 article pages | SEO content hub |
| `impressum.html`, `terms.html` | Legal (bilingual) |
| `book-demo.html` | Google Calendar embed |
| `sitemap.xml`, `robots.txt`, `llms.txt` | Crawler + AI-search directives |
| `netlify.toml`, `_headers`, `_redirects` | Hosting config |
| `mobile-preview.html` | Dev tool — phone-frame preview, not linked from the site |

## Editing

The `.jsx` files are plain React transpiled in the browser. Edit them directly — no `npm install`, no compile. To preview locally, serve the folder:

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` as a `file://` URL will not work (the components are fetched).

## Changing copy

Marketing text lives in `i18n.js` (both languages) or inline in the section component. Legal pages and articles are plain HTML.

## Workflow with Claude

Claude pushes to `claude/<change>` branches and opens a pull request. Review the Netlify preview, then merge. Claude pulls from `main` before every edit, so team changes are never overwritten.

## After changing URLs or adding pages

Update `sitemap.xml` and resubmit it in Google Search Console.
