# Qahwa Amman visual QA

## Source of truth

- Reference image: `/workspace/scratch/bbbbc2869513/upload/Qahwa Amman Coffeehouse Homepage(1).png`
- Reference dimensions: 1448 × 1086
- Comparison capture: `/workspace/scratch/bbbbc2869513/qahwa-reference/comparison-1.jpg`
- Implementation capture: `/workspace/scratch/bbbbc2869513/qahwa-reference/implementation-1.jpg`

## Review state

- View: desktop, English, initial page, no modal open
- Responsive check: mobile viewport at 390 px wide via `qa/viewport.html`
- Motion state: supplied genuine coffee-pour MP4 is used over the reference poster; no simulated pixel-warp or fake movement
- Genuine video asset: `public/assets/mm_video.mp4` (12 seconds, H.264, 1280 × 720)
- Video override: `VITE_COFFEE_VIDEO_URL` can provide another real MP4 without changing the layout

## Evidence reviewed

- Hero: copper dallah, patterned cup, dates, and Amman skyline retain the reference composition.
- Header: wordmark, navigation, language switch, search, bag count, and primary button align with the reference hierarchy.
- Favorites: four menu cards preserve the cream cards, rounded corners, dark text, circular image crops, pricing, and add controls.
- Story and locations: dark story panel, olive branch detail, locations panel, and two location cards keep the source order and proportions.
- Responsive behavior: the mobile layout stacks content without horizontal overflow; navigation and dialogs remain usable.
- Motion check: desktop screenshots taken 2.3 seconds apart show a changed pour/cup frame; mobile playback also loaded and showed the video layer.

## Interaction checks

- Explore Menu opens the menu dialog.
- Menu search and category filtering work.
- Add-to-order updates the bag and order preview.
- Pickup location, guest name, and order preview work.
- Arabic toggle switches the content and layout direction.
- Locations dialog exposes both locations and map links.

## Console / build checks

- `npm run build`: passed
- `npm run test:sites`: 4 passed, 0 failed
- Browser console: no app errors observed; only unrelated browser-extension metadata messages.

## Result

**Passed.** No P0/P1/P2 visual or interaction issue remains in the reviewed state. The requested motion is now a real supplied video; the original image remains a loading/error fallback.
