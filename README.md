# Aloy's website

Static site on GitHub Pages: https://actually-aloy.github.io/site/

## Pages

| File | What it is |
| --- | --- |
| index.html | Home |
| freelance.html | Freelance page |
| arcade.html | Aloy's Arcade (hub and games in one page) |
| tools.html, tools.css, tools.js | Web tools hub: image compressor, format converter, JSON/Base64, QR, live price charts (iran-market data), passwords, units (all client-side) |
| qr-gen.js, qr-scan.js | Vendored libs for the tools: QR generator (MIT), jsQR (Apache-2.0) |
| ironline.html | Ironline, the mining and trading game (has its own CRT-style music player) |
| papion.html, papion-app.html | Papion page and its embedded app view |
| varaq.html, multitool.html, mcportal.html, rastnevis.html, questlog.html, ytdownloader.html | Project pages |
| 404.html | Not-found page |

## Shared code

| File | Used by |
| --- | --- |
| langfx.css, langfx.js | Every page: language switch effect |
| platform.css, platform.js | Project pages |
| music.css, music.js | index.html (relaxing music) and arcade.html (arcade music): the music player, its volume slider and the saved settings |
| releases.js | Pages with a download button: finds the latest GitHub release |
| freelance-config.js | index.html and freelance.html: set `status` to `'open'` or `'busy'` |

## Images

`og.jpg` is the default link preview. Each page has its own `*-og.jpg` preview and, where it has one, a `*-logo.png`. `oc.png` and `amt-dashboard.png` are used on index.html and multitool.html. `favicon.svg` is the tab icon.

## Other

robots.txt, sitemap.xml and .nojekyll are for search engines and GitHub Pages.
