# SOULINA project instructions

- Static HTML/CSS/vanilla JavaScript. Use npm and the existing lockfile; Node >=20.9.
- Run `npm ci`, `npm run check`, and `npm run build`. Preview with `npm run dev` at http://127.0.0.1:4317/.
- Edit English markup in `templates/header-en.html` and `templates/poster-en.html`; regenerate tracked HTML with the build. Do not edit generated HTML directly.
- CSS and interactions in `dist/styles.css`, `dist/poster-full.css` and `dist/app.js` are maintained source files. Build does not regenerate these.
- Alternative design studies and the preview shell are in `build.mjs`. Preserve all three tabs and Festival poster as default.
- Preserve the approved red/yellow/cream direction and real SOULINA imagery. Do not invent event dates, prices, workshop duration or asset claims.
- Keep preview noindex until a public launch is explicitly requested. Public GitHub visibility alone is not a website launch request.
- `wrangler.jsonc` targets the existing preview Worker. Deploy only when requested; do not target soulina.vn.
- Before deploy: inspect diff, run check/build, verify 320/360/390/768/1440/1920px, internal anchors, mobile menu keyboard behavior, tabs and FAQ. Update `VERIFICATION.md` with actual evidence and limitations.
- Never commit credentials, `.env`, Wrangler state or local screenshots. See `HANDOFF.md` for pending content and contributor workflow.
