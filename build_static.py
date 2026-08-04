"""
Generates the static files for GitHub Pages into a folder called site_build/.

Run this:
    python3 build_static.py

It creates site_build/ containing everything you upload to GitHub:
    index.html, 404.html, robots.txt, favicon.svg, oc.png

Whenever you change something in site.py (bio, links, colors...), rerun this
script and re-upload the new site_build/ files — don't edit files inside
site_build/ by hand, they get overwritten every time you run this.
"""

import importlib.util
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT = ROOT / "site_build"

# Loaded by file path instead of "import site" because "site" is also the
# name of a built-in Python module and importing by name would grab that
# one instead of our file.
spec = importlib.util.spec_from_file_location("personal_site", ROOT / "site.py")
site = importlib.util.module_from_spec(spec)
spec.loader.exec_module(site)


def main():
    OUT.mkdir(exist_ok=True)

    (OUT / "index.html").write_text(site.render_html(), encoding="utf-8")
    (OUT / "404.html").write_text(site.render_404(), encoding="utf-8")
    (OUT / "robots.txt").write_text("User-agent: *\nAllow: /\n", encoding="utf-8")

    favicon = ROOT / "favicon.svg"
    if favicon.is_file():
        shutil.copy(favicon, OUT / "favicon.svg")

    oc_file = next((ROOT / name for name in site.OC_FILES if (ROOT / name).is_file()), None)
    if oc_file:
        shutil.copy(oc_file, OUT / oc_file.name)

    # Tells GitHub Pages not to run its default Jekyll processing, which
    # otherwise can ignore or mangle plain HTML files.
    (OUT / ".nojekyll").touch()

    print(f"Done. Upload everything inside {OUT} to your GitHub repo.")


if __name__ == "__main__":
    main()
