# SOULINA design preview

One preview with three tabs. The selected Festival poster direction is a complete English landing page with nine sections, including a direct experience chooser. The other two directions retain their initial two-section studies. Switching tabs updates the content and styling in place; Festival poster is the default.

- Preview: https://soulina-design-preview.mhoang-mkt.workers.dev/
- Tabs: Heritage gallery, Festival poster, Creative itinerary.

Deployable files: `dist/`. Generated HTML and images are tracked so the preview can also be served without a build. The local ZIP, screenshots and caches are excluded from Git.

Assets are copied from the public SOULINA website and its two owner-provided GetYourGuide workshop listings. No AI-generated customer or product imagery is used. Fonts load from Google Fonts with local fallbacks. Event placement and activities follow the supplied brief; dates, booth number, pricing, and booking details remain pending. Product and booth-activity sections use compact text layouts until approved photographs are available. Preview is noindex.

The two main workshops are lacquer art and painting with a local artist, both at 27 Hang Bac. Each has its own section and GetYourGuide link. Festival clay figurine decorating and postcard printing remain separate short booth activities. Painting duration is not fixed in the copy because the source listing contains conflicting 1-hour/2-hour details. See COPY-DIRECTION.md and DESIGN-PLAN.md.

Cloudflare preview Worker: `soulina-design-preview`. See VERIFICATION.md for the checks performed and pending editorial inputs.

Setup: `npm ci`. Build: `npm run build`. Checks: `npm run check`. Local preview: `npm run dev`, then open `http://127.0.0.1:4317/`.

Edit the English landing page in `templates/poster-en.html`, its header in `templates/header-en.html`, and its styles in `dist/poster-full.css`. The two alternative studies remain in `build.mjs` and `dist/styles.css`. Tab/dialog/motion interactions live in `dist/app.js`. Run the build after editing templates. `download.mjs` and `download-workshops.mjs` can refresh original images; neither is required for normal builds.

Deploy using an authenticated Wrangler CLI: `wrangler deploy`. `wrangler.jsonc` targets the preview Worker; the main SOULINA website is separate. No credentials are stored in this repository.

For the next contributor: read [HANDOFF.md](HANDOFF.md), [AGENTS.md](AGENTS.md) and [VERIFICATION.md](VERIFICATION.md). Repository visibility does not change the preview's noindex status. Images and brand assets remain the property of their respective owners; this repository does not grant a separate reuse license for them.
