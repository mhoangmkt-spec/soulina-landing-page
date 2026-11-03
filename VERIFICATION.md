# Verification: UI/UX handoff pass

Date: 2026-11-04 (Asia/Bangkok)

## Current pass

- `npm ci`: passed; npm reported zero dependency vulnerabilities.
- `npm run check`: passed.
- `npm run build`: passed; tracked HTML regenerated from templates.
- Browser checks on the local build: one main H1; all inspected main/header internal anchors have targets; zero remaining product/activity photo placeholder elements.
- Hero CTA reaches the experience overview. The lacquer and painting overview links navigate to their separate sections. Header Contact reaches the Zalo/Messenger choice.
- Mobile Menu opens, Escape closes it and leaves focus on Menu. An outside click closes it. Selecting Painting class navigates and closes it.
- FAQ first question opens with Enter.
- All three preview styles render; Home and ArrowRight switch the selected style and restore the Festival poster page.
- No warning/error entries returned by the browser log query in the covered local session.
- Real workshop photographs loaded in the inspected cases.

| Viewport | Client width | Scroll width | Preview tab target height |
| --- | --- | --- | --- |
| 320px | 305px | 305px | 44px |
| 360px | 345px | 345px | 44px |
| 390px | 375px | 375px | 44px |
| 768px | 753px | 753px | 44px |
| 1440px | 1425px | 1425px | 44px |
| 1920px | 1905px | 1905px | 44px |

The 320px document width check also passed for Heritage gallery and Creative itinerary. Responsive checks used the browser viewport capability and read the resulting DOM dimensions. Native scrollbars account for the 15px difference. These are browser layout checks, not physical-device tests.

Before making the repository public, the two existing commits and current tracked text files were scanned for common private-key, GitHub-token, API-token and credential-assignment patterns. No matches were found. This is a bounded scan, not a guarantee that every possible secret format can be detected.

## Remaining inputs and limits

- Event dates/hours, booth number/map, fees and participation arrangements still need owner confirmation.
- Five approved photos can later enhance the current compact text sections; empty photo frames have been removed.
- Confirm painting duration and replace owner-provided GetYourGuide preview links with public listings when available.
- No booking or message was submitted. External destination availability, full WCAG conformance, physical devices and performance scores are not certified by this pass.
- The preview remains noindex. GitHub repository visibility is independent of website launch readiness.

See HANDOFF.md for the contributor workflow.

---

## Historical verification record before this pass

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
