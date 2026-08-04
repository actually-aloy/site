from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import json
from urllib.parse import urlparse

HOST = "127.0.0.1"
PORT = 8000
SITE_NAME = "Aloy"
BIO = "Gamer. Vibe coding. Cat lover."
DESCRIPTION = "Aloy's corner of the internet — links, an OC, and whatever else."
SITE_URL = "https://actually-aloy.example"  # replace with your real domain when you deploy

VIBES = [
    "chaotic good, low sleep",
    "grinding a new server plugin",
    "reverse-engineering something I shouldn't",
    "cat is supervising",
    "definitely should be asleep",
    "deep in a crackme",
    "100% caffeine by volume",
    "vibe coding until it breaks",
]

SOCIALS = [
    {"name": "Telegram", "href": "https://t.me/actually_aloy", "icon": "telegram"},
    {"name": "Discord", "href": "https://discord.gg/JqrBUYEM8n", "icon": "discord"},
    {"name": "Bale", "href": "https://ble.ir/join/A3w5BnSfAR", "icon": "bale"},
    {"name": "Bluesky", "href": "https://bsky.app/profile/part-izan.bsky.social", "icon": "bluesky"},
]

OC_FILES = ("oc.jpg", "oc.jpeg", "oc.png", "oc.webp", "oc.gif")
ROOT = Path(__file__).resolve().parent

# Real brand glyphs (Bootstrap Icons, MIT licensed) so the badges are accurate
# instead of made-up initials. All use currentColor so they inherit the badge's
# foreground color automatically. Bale has no widely-adopted icon set glyph, so
# it uses a simple custom geometric mark instead of a guessed brand shape.
ICONS = {
    "telegram": """<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
    </svg>""",
    "discord": """<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
    </svg>""",
    "bluesky": """<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948"/>
    </svg>""",
    # No established brand glyph exists for Bale, so it's a plain "B" — but
    # rendered as an SVG (same mechanism as the other icons above) instead of
    # a styled <span>, so it inherits color via currentColor exactly like the
    # working icons rather than through a separate CSS class.
    "bale": """<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <text x="8" y="12" text-anchor="middle" font-family="Arial, sans-serif" font-size="13" font-weight="900" fill="currentColor">B</text>
    </svg>""",
}


class PersonalSiteHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        path = urlparse(self.path).path
        if path in {"/favicon.svg"} or path.startswith("/favicon.svg?"):
            self.serve_favicon()
        elif path == "/favicon.ico":
            self.serve_favicon()
        elif path.lstrip("/") in OC_FILES:
            self.serve_oc(path.lstrip("/"))
        elif path == "/robots.txt":
            self.serve_robots()
        elif path in {"/", "/index.html"}:
            body = render_html().encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.send_security_headers()
            self.end_headers()
            self.wfile.write(body)
        else:
            body = render_404().encode("utf-8")
            self.send_response(404)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.send_security_headers()
            self.end_headers()
            self.wfile.write(body)

    def send_security_headers(self):
        # Locked-down defaults for a static personal page: no external
        # scripts, no framing by other sites, no MIME sniffing.
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; style-src 'self' 'unsafe-inline'; "
            "img-src 'self' data:; script-src 'self' 'unsafe-inline'; "
            "base-uri 'none'; frame-ancestors 'none'",
        )
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "no-referrer")

    def serve_robots(self):
        body = b"User-agent: *\nAllow: /\n"
        self.send_response(200)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def serve_oc(self, filename):
        oc_file = ROOT / filename
        if not oc_file.is_file():
            self.send_error(404, "No OC image found")
            return

        content_type = {
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".png": "image/png",
            ".webp": "image/webp",
            ".gif": "image/gif",
        }.get(oc_file.suffix.lower(), "application/octet-stream")

        data = oc_file.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        self.end_headers()
        self.wfile.write(data)

    def serve_favicon(self):
        favicon = ROOT / "favicon.svg"
        if not favicon.is_file():
            self.send_error(404, "Favicon not found")
            return

        data = favicon.read_bytes()
        self.send_response(200)
        self.send_header("Content-Type", "image/svg+xml; charset=utf-8")
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "public, max-age=31536000, immutable")
        self.end_headers()
        self.wfile.write(data)

    def log_message(self, format, *args):
        print(f"{self.address_string()} - {format % args}")


def render_html():
    oc_markup, oc_filename = render_oc_image()
    oc_url = f"{SITE_URL}/{oc_filename}" if oc_filename else f"{SITE_URL}/favicon.svg"
    vibes_json = json.dumps(VIBES)
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#141018">
  <title>{escape_html(SITE_NAME)}</title>
  <meta name="description" content="{escape_html(DESCRIPTION)}">
  <link rel="canonical" href="{escape_html(SITE_URL)}">
  <meta property="og:type" content="profile">
  <meta property="og:title" content="{escape_html(SITE_NAME)}">
  <meta property="og:description" content="{escape_html(DESCRIPTION)}">
  <meta property="og:url" content="{escape_html(SITE_URL)}">
  <meta property="og:image" content="{escape_html(oc_url)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{escape_html(SITE_NAME)}">
  <meta name="twitter:description" content="{escape_html(DESCRIPTION)}">
  <meta name="twitter:image" content="{escape_html(oc_url)}">
  <link rel="icon" href="favicon.svg?v=2" type="image/svg+xml">
  <style>
    :root {{
      --bg: #141018;
      --text: #fff7fb;
      --muted: #cdb8c7;
      --line: rgba(255, 239, 247, 0.16);
      --pink: #ff7ab6;
      --pink-soft: #ffd1e7;
      --blue: #5bcefa;
      --surface: rgba(255, 244, 249, 0.07);
      --radius: 28px;
    }}

    * {{
      box-sizing: border-box;
    }}

    body {{
      margin: 0;
      min-height: 100vh;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      color: var(--text);
      background:
        radial-gradient(circle at 16% 12%, rgba(255, 122, 182, 0.15), transparent 30%),
        radial-gradient(circle at 88% 16%, rgba(255, 209, 231, 0.08), transparent 28%),
        radial-gradient(circle at 50% 92%, rgba(91, 206, 250, 0.08), transparent 34%),
        var(--bg);
    }}

    a {{
      color: inherit;
      text-decoration: none;
    }}

    .page {{
      width: min(1080px, calc(100% - 36px));
      margin: 0 auto;
      padding: 38px 0 56px;
    }}

    .hero {{
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(310px, 410px);
      gap: 18px;
      padding: 24px;
      overflow: visible;
      border: 1px solid var(--line);
      border-radius: calc(var(--radius) + 10px);
      background: linear-gradient(145deg, rgba(255, 244, 249, 0.105), rgba(255, 244, 249, 0.045));
      box-shadow: 0 28px 90px rgba(0, 0, 0, 0.36);
      backdrop-filter: blur(22px);
    }}

    .intro {{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 22px;
      min-width: 0;
    }}

    .topline {{
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }}

    .flag {{
      width: 48px;
      height: 30px;
      flex: 0 0 auto;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 14px 30px rgba(255, 122, 182, 0.16);
      background:
        linear-gradient(
          #5bcefa 0 20%,
          #f5a9b8 20% 40%,
          #ffffff 40% 60%,
          #f5a9b8 60% 80%,
          #5bcefa 80% 100%
        );
    }}

    h1 {{
      margin: 0;
      font-size: clamp(58px, 11vw, 118px);
      line-height: 1.15;
      letter-spacing: -0.04em;
    }}

    .gradient-text {{
      color: var(--pink-soft);
    }}

    .bio {{
      max-width: 560px;
      margin: 0;
      color: var(--muted);
      font-size: 19px;
      line-height: 1.7;
    }}

    .status {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      width: fit-content;
      margin: 0;
      padding: 7px 14px 7px 10px;
      border: 1px solid var(--line);
      border-radius: 999px;
      background: rgba(255, 244, 249, 0.06);
      color: var(--muted);
      font-size: 13px;
    }}

    .status-dot {{
      width: 8px;
      height: 8px;
      flex: 0 0 auto;
      border-radius: 50%;
      background: var(--pink);
      box-shadow: 0 0 0 3px rgba(255, 122, 182, 0.18);
    }}

    .socials {{
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
    }}

    .social {{
      display: grid;
      grid-template-columns: 52px minmax(0, 1fr);
      align-items: center;
      gap: 14px;
      min-height: 78px;
      padding: 15px;
      border: 1px solid var(--line);
      border-radius: 23px;
      background: rgba(255, 244, 249, 0.06);
      transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
    }}

    .social:hover {{
      transform: translateY(-2px);
      border-color: rgba(255, 209, 231, 0.4);
      background: rgba(255, 244, 249, 0.1);
    }}

    .social-icon {{
      width: 52px;
      height: 52px;
      display: grid;
      place-items: center;
      border-radius: 18px;
      color: #141018;
      background: linear-gradient(135deg, var(--pink), var(--pink-soft));
      box-shadow: 0 16px 34px rgba(255, 122, 182, 0.18);
    }}

    .social-icon svg {{
      width: 26px;
      height: 26px;
      color: #141018;
    }}

    .social strong {{
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
    }}

    .social span:last-child {{
      display: block;
      margin-top: 4px;
      overflow: hidden;
      color: var(--muted);
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 12px;
    }}

    .oc-panel {{
      position: relative;
      overflow: hidden;
      min-height: 470px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background:
        radial-gradient(circle at 24% 16%, rgba(255, 209, 231, 0.16), transparent 34%),
        rgba(255, 244, 249, 0.055);
    }}

    .oc-image {{
      width: 100%;
      height: 100%;
      min-height: 470px;
      object-fit: cover;
      display: block;
    }}

    .oc-placeholder {{
      width: 100%;
      height: 100%;
      min-height: 470px;
      display: grid;
      place-items: center;
      padding: 30px;
      text-align: center;
    }}

    .oc-placeholder-inner {{
      width: min(260px, 100%);
      aspect-ratio: 1 / 1.18;
      display: grid;
      place-items: center;
      border: 1.5px dashed rgba(255, 209, 231, 0.42);
      border-radius: 30px;
      background: rgba(255, 244, 249, 0.055);
    }}

    .oc-placeholder p {{
      margin: 0;
      color: var(--muted);
      line-height: 1.65;
    }}

    .oc-placeholder strong {{
      display: block;
      margin-bottom: 8px;
      color: var(--text);
      font-size: 22px;
      letter-spacing: -0.04em;
    }}

    @media (max-width: 900px) {{
      .hero {{
        grid-template-columns: 1fr;
      }}

      .oc-panel,
      .oc-image,
      .oc-placeholder {{
        min-height: 380px;
      }}
    }}

    @media (max-width: 560px) {{
      .page {{
        width: min(100% - 22px, 1080px);
        padding-top: 18px;
      }}

      .hero {{
        padding: 16px;
        border-radius: 28px;
      }}

      .socials {{
        grid-template-columns: 1fr;
      }}

      .intro {{
        gap: 18px;
      }}
    }}
  </style>
</head>
<body>
  <main class="page">
    <section class="hero">
      <div class="intro">
        <div class="topline">
          <span class="flag" aria-label="Trans flag"></span>
        </div>
        <h1><span class="gradient-text">{escape_html(SITE_NAME)}</span></h1>
        <p class="bio">{escape_html(BIO)}</p>
        <p class="status" id="vibe-status"><span class="status-dot"></span><span id="vibe-text">loading vibe…</span></p>
        <nav class="socials" aria-label="Links">
          {render_socials()}
        </nav>
      </div>
      <aside class="oc-panel" aria-label="OC placeholder">
        {oc_markup or render_oc_placeholder()}
      </aside>
    </section>
  </main>
  <script>
    const VIBES = {vibes_json};
    document.getElementById('vibe-text').textContent =
      VIBES[Math.floor(Math.random() * VIBES.length)];
  </script>
</body>
</html>"""


def render_socials():
    return "".join(render_social(social) for social in SOCIALS)


def render_social(social):
    return f"""
      <a class="social" href="{escape_html(social['href'])}" target="_blank" rel="noopener noreferrer">
        <span class="social-icon">{ICONS[social['icon']]}</span>
        <span>
          <strong>{escape_html(social['name'])}</strong>
          <span>{escape_html(social['href'])}</span>
        </span>
      </a>
    """



def render_oc_image():
    oc_file = next((ROOT / name for name in OC_FILES if (ROOT / name).is_file()), None)
    if oc_file is None:
        return "", None
    return f'<img class="oc-image" src="{escape_html(oc_file.name)}" alt="OC image">', oc_file.name


def render_oc_placeholder():
    return """
      <div class="oc-placeholder">
        <div class="oc-placeholder-inner">
          <p><strong>OC placeholder</strong>Add oc.png, oc.jpg, oc.webp, or oc.gif next to this file.</p>
        </div>
      </div>
    """



def render_404():
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#141018">
  <title>404 — {escape_html(SITE_NAME)}</title>
  <meta name="robots" content="noindex">
  <link rel="icon" href="favicon.svg?v=2" type="image/svg+xml">
  <style>
    body {{
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      background: #141018;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }}

    h1 {{
      margin: 0;
      font-size: clamp(72px, 20vw, 200px);
      font-weight: 800;
      letter-spacing: -0.04em;
      background: linear-gradient(90deg, #ff7ab6, #ffd1e7, #5bcefa);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }}
  </style>
</head>
<body>
  <h1>404</h1>
</body>
</html>"""


def escape_html(value):
    return (
        str(value)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
        .replace('"', "&quot;")
        .replace("'", "&#039;")
    )


if __name__ == "__main__":
    server = ThreadingHTTPServer((HOST, PORT), PersonalSiteHandler)
    print(f"Personal site running at http://{HOST}:{PORT}")
    print("Add an OC image named oc.png, oc.jpg, oc.webp, or oc.gif next to this file.")
    server.serve_forever()
