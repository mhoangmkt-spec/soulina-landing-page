# SOULINA — contributor handoff

## Run locally

```sh
git clone https://github.com/mhoangmkt-spec/soulina-landing-page.git
cd soulina-landing-page
npm ci
npm run check
npm run build
npm run dev
```

Open http://127.0.0.1:4317/. Node >=20.9 is required. No credentials are required to build or preview locally.

Create a branch for your changes, for example `git switch -c feat/update-festival-content`. Commit both template changes and generated HTML after building. Open a pull request for review. A public repository permits cloning; direct push access still requires the owner to add you as a collaborator.

## Where to edit

| Change | Source |
| --- | --- |
| English page and experience choices | templates/poster-en.html |
| English desktop/mobile navigation | templates/header-en.html |
| Festival poster styles | dist/poster-full.css |
| Shared preview tabs and alternative study styles | dist/styles.css |
| Menu, tabs, dialog, entrance motion | dist/app.js |
| HTML generator and two alternative studies | build.mjs |
| Existing images | dist/assets/ |
| Deployment target | wrangler.jsonc |

`dist/index.html`, `dist/poster.html` and `dist/journey.html` are generated and tracked. Running the build does not overwrite CSS or app.js. Image download scripts are optional asset-refresh utilities, not part of normal setup.

## UI/UX pass delivered

- Compact preview tab labels on mobile; 44px targets and no document overflow down to 320px in the covered checks.
- A three-option experience chooser for festival activities, lacquer art and painting.
- Hero and desktop navigation lead to the overview; each experience leads to its own section.
- Zalo and Messenger are both available near the start and in studio workshop contact blocks.
- Mobile menu supports Escape, restores focus to Menu and dismisses on an outside click.
- Product lists are visible directly. Five empty photo frames were replaced with compact text layouts.
- The festival identity, real workshop photos, three design directions and noindex behavior are retained.

## Inputs still needed from the owner

- Festival dates/hours, exact booth number/location and approved map.
- Festival activity fees, participation arrangements and schedule.
- Confirmed painting duration; the supplied listing contained inconsistent timing.
- Approved photos for accessories/gifts, lacquer products, Batik textiles, clay activity and postcard printing. Add only photographs that match the content.
- Public workshop listing URLs when available. Existing GetYourGuide URLs are owner-supplied preview links; do not interpret them as confirmation of availability or inventory.

Until these are confirmed, retain explicit pending copy and preview noindex. Do not fabricate missing facts or replace product photos with unrelated imagery.

## Deployment

Preview: https://soulina-design-preview.mhoang-mkt.workers.dev/

The existing Worker is `soulina-design-preview`. It serves `dist/`. With the owner's Cloudflare permission and explicit deployment instruction:

```sh
npx wrangler@4 deploy
```

Cloudflare authorization is separate from GitHub access. The main SOULINA website is a separate deployment. Check the live page after deployment and record the deployed commit and Worker version. Never copy credentials into this repository or share a local Wrangler authentication file.

## Scope of rights

Brand and photographic assets belong to their respective owners. Public source visibility is for collaboration and does not grant an additional asset license.
