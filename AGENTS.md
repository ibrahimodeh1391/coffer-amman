# Prototype Instructions

The selected visual source is `../upload/Qahwa Amman Coffeehouse Homepage(1).png`. Match its elements and layout: copper pot, patterned cup, original drink photographs, four cards, olive branch, story panel, and two location cards. Preserve coffee motion only when a genuine video asset is available; never simulate it with pixel warping or fake movement. Browser chrome is not website UI. Order and location data are prototype content pending owner confirmation.

The intended deployment subdomain is `coffee.ibrix.digital`. For GitHub Pages, use a DNS CNAME record with host `coffee` pointing to `ibrahimodeh1391.github.io`; keep the root `CNAME` file in the deployed static output.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
