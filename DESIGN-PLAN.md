# SOULINA festival landing page

## Approved direction

Poster lễ hội, red #C41530, yellow #FFAB19 and cream #FFECCC/#F9E9D0. Retain the existing logo and real SOULINA photographs. Full landing page replaces the Poster exploration; the other two studies remain available in the comparison tabs. Default tab becomes Poster.

## Structure and visitor decisions

1. Hero: understand SOULINA's festival presence and navigate to the activities.
2. Brand story: understand art, crafts and creative experiences as SOULINA's scope.
3. Products: browse three proposed groups: accessories/gifts, lacquer art, Batik clothing/silk. Representative photos are explicit placeholders pending owner assets.
4. Booth activities: understand the short 15–20 minute experience (clay figurine decorating and postcard printing), location and how to ask about participation.
5. Lacquer workshop: understand the separate 1–2 hour experience at 27 Hang Bac and open its GetYourGuide listing or contact SOULINA.
6. Painting class: understand the second studio workshop at 27 Hang Bac, who it suits and open its own listing or contact SOULINA.
7. Visit information and FAQ: distinguish the two locations, see which details are pending and ask the right questions.
8. Contact: open the verified SOULINA Zalo/Messenger contact channel.

The owner clarified the two main workshops: lacquer art and painting with a local artist, both at 27 Hang Bac. Booth activities are presented separately. The owner also requested English copy following the descriptive, practical structure of the two supplied GetYourGuide listings. See COPY-DIRECTION.md for source analysis and duration inconsistencies.

## Copy and hierarchy

English copy with no eyebrow labels in the full Poster page. One descriptive H1 naming SOULINA and the festival. H2s describe the section directly, H3s name activities/categories. Uppercase only in the poster hero and small utility labels where useful. Body 16px minimum, mobile 15–16px, metadata 13–14px. Desktop H2 target at most two lines; mobile at most three with layout adjustment. Avoid added slogans, fabricated history, artisan claims and unsupported benefits.

## Rhythm

Hero: red, large typography + asymmetric real photo collage.
Brand: cream, quiet two-column editorial photo and narrative.
Products: light paper, flat three-column catalogue, square-cornered images and expandable category contents.
Booth: warm yellow band, split introduction and two side-by-side activity panels, image placeholders.
Lacquer: cream, split workshop photo and practical description, individual GetYourGuide CTA.
Painting: soft warm background, reverse photo collage and descriptive copy, separate GetYourGuide CTA.
Visit: light paper, two practical location columns followed by native disclosure FAQ.
Contact: red, large invitation and clear Zalo button, functional footer.

## CTA and verified inputs

Primary conversion: ask SOULINA via https://zalo.me/0388988385. Secondary contact: https://m.me/soulina.art. CTA text states that sending a message is the action. No fake booking form or confirmation, no payment or invented prices. Calendar and booth map are not activated until accurate dates/location are available.

https://soulina.vn/workshops exists but currently displays products being updated, not useful individual workshop details. Therefore the landing page gives each workshop its own full section and links to direct contact instead of an incomplete collection page.

Festival title/theme/booth area and activity descriptions come from the user brief; dates, booth number, opening hours, fees and booking requirements are pending. Both owner-provided workshop listings confirm the meeting point at 27 Hang Bac. Painting duration is inconsistent within its listing; the page asks visitors to confirm it. No exact booth map or calendar download until event details are known.

## UI, motion and checks

Build on the existing HTML/CSS/vanilla JS stack. No extra frontend runtime or animation library. Native details for FAQ/category browsing, CSS Grid/Flex for layout, IntersectionObserver for one-time gentle entrance animation with visible-by-default content; respect prefers-reduced-motion. No continuous animation, autoplay, carousels or scroll hijacking.

Use the CITO landing page builder's content/hierarchy/rhythm rules, adapted to SOULINA, and the accessibility-review skill's keyboard, focus, contrast and semantic checks. Verify WCAG contrast ratios for actual colors, 44px design target for interactive controls, accessible link names, meaningful alt text, reduced motion, zoom, no horizontal overflow, image loading and real CTA destinations. Automated and manual browser checks are evidence for covered cases, not a claim of full WCAG conformance.

Test 390/768/1280/1920px and all three preview tabs. Preserve noindex until the owner supplies final event information and imagery. Keep all preview hosting independent from soulina.vn.
