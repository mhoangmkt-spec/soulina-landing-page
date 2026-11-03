# Verification: full English Festival poster

## Passed

- `npm run check`: JavaScript syntax checks.
- `npm run build`: complete static output generated successfully.
- Eight full-page sections, one H1, no eyebrow elements in the selected landing page.
- Default route selects Festival poster and sets the document language to English.
- Three design tabs switch content, retain one H1 and restore the complete Poster page correctly.
- All internal landing-page anchors resolve to existing targets.
- Both GetYourGuide CTAs point to their respective owner-provided listings. Listings were opened and read in the browser; no booking was submitted.
- FAQ opens with the Enter key. Product disclosure controls open correctly.
- Mobile menu opens, navigates to the painting class anchor and closes after selection.
- Real workshop photographs load; no broken loaded images in the covered browser checks.
- No horizontal overflow at the tested widths below.

| Viewport frame | Document client width | Document scroll width | Result |
| --- | --- | --- | --- |
| 390px | 375px | 375px | Pass |
| 768px | 753px | 753px | Pass |
| 1280px | 1265px | 1265px | Pass |
| 1920px | 1905px | 1905px | Pass |

The browser viewport override did not take effect in this session. Responsive checks used a temporary same-origin iframe harness with actual frame widths and the browser's native scrollbar. The harness is excluded from the shipped output. These are responsive layout checks, not physical-device tests.

## Design and implementation checks

- Native HTML/CSS/vanilla JavaScript; no new frontend dependency.
- Disclosure controls use native `details`/`summary` behavior.
- Motion is visible by default, plays once when entering the viewport and checks reduced-motion preferences.
- CTA buttons and mobile menu controls use at least a 44px design target.
- Header, story, catalogue, booth, lacquer, painting, visit and contact layouts have distinct hierarchy and visual rhythm.
- No forms pretend to submit or reserve a booking.

## Remaining editorial inputs

- Festival dates, hours, booth number and booth location map.
- Fees and participation arrangements for festival activities.
- Five intentional product/activity photo placeholders.
- Confirm painting duration: source listing contains conflicting one-hour and two-hour information. Copy currently asks visitors to confirm with SOULINA.
- Final public workshop URLs can replace the supplied GetYourGuide preview URLs when available.

This is a preview verification record, not a full WCAG certification or a confirmation of workshop inventory/availability.
