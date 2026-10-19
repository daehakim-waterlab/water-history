# A Brief History of Fluid Mechanics and Water Sciences

An open web textbook by Daeha Kim (Jeonbuk National University), built with [Jupyter Book 2](https://jupyterbook.org/) (MyST) and published at <https://hydroclimatol.com/water-history/>. It is linked from the Teaching menu of the lab homepage, <https://hydroclimatol.com/>.

## Structure

| File | Page |
| --- | --- |
| `intro.md` | Introduction (landing page) |
| `timeline.md` | Timeline: a chronology linked to the chapters (an interactive version is planned) |
| `chapters/01-…` to `chapters/07-…` | Chapters 1–7 |
| `chapters/08-who-lived-when.md` | Chapter 8: interactive lifespan chart; the people list is the JSON in the `{anywidget}` block |
| `assets/lifespans.mjs` | The chart's code (MyST anywidget module) |
| `myst.yml` | Book settings and table of contents (`project.toc`) |
| `footer.md` | Site-wide footer: copyright and license |
| `assets/custom.css` | Phone fixes: the long title wraps in the top bar; no sideways page scroll |

To add a page, create the Markdown file and list it under `project.toc` in `myst.yml`. Chapter numbers are part of each chapter's `title:`.

## Build locally

Jupyter Book 2 needs Python and Node.js (18 or later).

```bash
pip install -r requirements.txt
jupyter book start              # live preview at http://localhost:3000
jupyter book build --html       # static site in _build/html
```

## Deployment

`.github/workflows/deploy.yml` builds the book on every push to `main` and publishes `_build/html` to GitHub Pages with `BASE_URL=/water-history`. In the repository settings, **Settings → Pages → Build and deployment → Source** must be **GitHub Actions**.

## License

Text and figures are licensed under [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/) (see `LICENSE`). © Daeha Kim.
