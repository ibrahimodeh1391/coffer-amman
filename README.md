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

Then set `coffee.ibrix.digital` as the custom domain in the repository's GitHub Pages settings and enable HTTPS after DNS verification.

Run `npm install`, then `npm run dev` for local development. `npm run build` and `npm run test:sites` verify the production bundle.
