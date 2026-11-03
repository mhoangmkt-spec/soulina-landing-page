# SOULINA design preview

One HTML preview with three tabs. Each direction contains exactly two main sections. Switching tabs updates the content and styling in place.

- Preview: https://soulina-design-preview.mhoang-mkt.workers.dev/
- Tabs: Gallery di sản, Poster lễ hội, Bản đồ trạm dừng.

Deployable files: `dist/`. Generated HTML and images are tracked so the preview can also be served without a build. The local ZIP, screenshots and caches are excluded from Git.

Assets are copied from the public SOULINA website. No AI-generated customer or product imagery is used. Fonts load from Google Fonts with local fallbacks. Event placement and activities follow the supplied brief; dates, booth number, pricing, and booking details remain pending. Preview is noindex.

Verified: JavaScript syntax, desktop screenshots, mobile 390px screenshots, two main sections per page, no horizontal page overflow, image loading, anchor navigation, and information dialog. Live smoke check: three routes return HTTP 200.

Cloudflare deployment version: `a2d26d96-a44b-4f66-815e-ebfdf040aad4`.

Setup: `npm ci`. Build: `npm run build`. Checks: `npm run check`. Local preview: `npm run dev`, then open `http://127.0.0.1:4317/`.

Edit the HTML templates in `build.mjs`, styling in `dist/styles.css`, and tab/dialog interactions in `dist/app.js`. Run the build after editing templates. `download.mjs` can refresh original images from the public SOULINA website; it is not required for normal builds.

Deploy using an authenticated Wrangler CLI: `wrangler deploy`. `wrangler.jsonc` targets the preview Worker; the main SOULINA website is separate. No credentials are stored in this repository.
