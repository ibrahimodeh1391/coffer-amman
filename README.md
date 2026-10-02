# Qahwa Amman prototype

Responsive React/Vite recreation of the supplied Qahwa Amman homepage reference.

The hero now uses the supplied genuine coffee-pour MP4 (`public/assets/mm_video.mp4`) over the supplied photograph poster. The earlier pixel-warp approach was removed because it looked artificial. To use a different real video, set `VITE_COFFEE_VIDEO_URL` to its URL and rebuild; if it fails, the supplied photograph remains as the fallback.

The prototype includes:

- faithful hero, four drink cards, story panel, locations panel, and footer;
- interactive menu search and category filters;
- drink details, hot/iced choice, quantity controls, and preview-only order flow;
- Arabic/English toggle;
- story, journal, and location dialogs with Google Maps area links;
- responsive desktop/tablet/mobile layout.

## Custom domain

The intended domain is `coffee.ibrix.digital`. For GitHub Pages, add this DNS record at the `ibrix.digital` DNS provider:

```text
Type:   CNAME
Host:   coffee
Target: ibrahimodeh1391.github.io
TTL:    Auto (or 3600)
```

GitHub Pages publishes the root of the `gh-pages` branch. The `main` branch contains the application source; the ZIP archive is retained as a reference. Only the contents of `dist/client` belong in the deployment branch.

Before each deployment, run `npm ci`, `npm run build`, and `npm run test:sites`, then publish the contents of `dist/client` to `gh-pages`. Keep `CNAME` and `.nojekyll` in the published root. Source pushes alone do not rebuild the live site.

Set the Pages publishing source to the `gh-pages` branch (root), and set `coffee.ibrix.digital` as the custom domain. Enable HTTPS after DNS verification.

Run `npm install`, then `npm run dev` for local development. `npm run build` and `npm run test:sites` verify the production bundle.
