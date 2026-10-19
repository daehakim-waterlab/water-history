// Lifespan chart for chapter 8, rendered by MyST's {anywidget} directive.
// The people list comes from the directive body in chapters/08-who-lived-when.md:
//   people: [[name, born, died, field, chapter, circa], ...]
// Years before the Common Era are negative. circa: 0 none, 1 birth, 2 death, 3 both.

const FIELDS = {
  M: "Mathematics and fluid theory",
  E: "Hydraulic and civil engineering",
  H: "Hydrology and water sciences",
  F: "Engines, flight and rockets",
  P: "Physics, heat and society",
};
const FIELD_ORDER = ["M", "E", "H", "F", "P"];

const CHAPTERS = {
  1: "before-the-scientific-revolution",
  2: "the-scientific-revolution",
  3: "enlightenment-analytical-hydrodynamics",
  4: "industrial-age-engineering-hydraulics",
  5: "turbulence-and-boundary-layers",
  6: "war-flight-and-computing",
  7: "history-of-hydrology",
};

// "All" compresses antiquity into the first 16 % of the width.
const ERAS = [
  { id: "all", label: "All", start: -550, end: 2025, ticks: [-500, 0, 500, 1000, 1500, 1600, 1700, 1800, 1900, 2000], knee: [1400, 0.16] },
  { id: "ancient", label: "Before 1500", start: -550, end: 1550, ticks: [-500, 0, 500, 1000, 1500] },
  { id: "e1", label: "1500–1700", start: 1500, end: 1750, ticks: [1500, 1550, 1600, 1650, 1700, 1750] },
  { id: "e2", label: "1650–1850", start: 1650, end: 1850, ticks: [1650, 1700, 1750, 1800, 1850] },
  { id: "e3", label: "1750–1920", start: 1750, end: 1920, ticks: [1750, 1800, 1850, 1900] },
  { id: "e4", label: "1840–1960", start: 1840, end: 1960, ticks: [1850, 1875, 1900, 1925, 1950] },
  { id: "e5", label: "1880–today", start: 1880, end: 2025, ticks: [1900, 1925, 1950, 1975, 2000, 2025] },
];

const STYLE = `
.ls-root {
  --surface: #fcfcfb; --ink: #0b0b0b; --ink-2: #52514e; --muted: #6f6d68;
  --grid: #e1e0d9; --axis: #c3c2b7; --ring: rgba(11,11,11,0.12); --chip: #f0efec;
  --s-M: #2a78d6; --s-E: #eb6834; --s-H: #1baf7a; --s-F: #eda100; --s-P: #e87ba4;
  --mark: #d03b3b;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  color: var(--ink); background: var(--surface);
  border: 1px solid var(--ring); border-radius: 10px;
  padding: 12px; margin: 1rem 0; font-size: 14px; line-height: 1.35;
}
.ls-root.ls-dark {
  --surface: #1a1a19; --ink: #f0efec; --ink-2: #c3c2b7; --muted: #a3a29b;
  --grid: #2c2c2a; --axis: #383835; --ring: rgba(255,255,255,0.12); --chip: #2c2c2a;
  --s-M: #3987e5; --s-E: #d95926; --s-H: #199e70; --s-F: #c98500; --s-P: #d55181;
  --mark: #e66767;
}
.ls-root * { box-sizing: border-box; }
.ls-row-controls { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 10px; }
.ls-label { width: 100%; font-size: 12px; color: var(--ink-2); margin: 2px 0 0; }
.ls-btn {
  font: inherit; font-size: 13px; color: var(--ink); background: var(--chip);
  border: 1px solid transparent; border-radius: 999px; padding: 5px 11px; cursor: pointer;
  min-height: 32px;
}
.ls-btn[aria-pressed="true"] { border-color: var(--ink); font-weight: 600; }
.ls-btn[aria-pressed="false"].ls-field { opacity: 0.45; }
.ls-swatch { display: inline-block; width: 10px; height: 10px; border-radius: 3px; margin-right: 6px; vertical-align: -1px; }
.ls-year { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; margin: 4px 0 10px; }
.ls-year input[type=range] { flex: 1 1 180px; accent-color: var(--mark); min-height: 32px; }
.ls-year label { font-size: 13px; color: var(--ink-2); display: inline-flex; align-items: center; gap: 6px; }
.ls-summary { font-size: 13px; color: var(--ink-2); margin: 0 0 8px; }
.ls-summary strong { color: var(--ink); }
.ls-chart { position: relative; }
.ls-axis { position: relative; height: 22px; font-size: 11.5px; color: var(--muted); font-variant-numeric: tabular-nums; }
.ls-axis span { position: absolute; top: 3px; transform: translateX(-50%); white-space: nowrap; }
.ls-axis span.ls-first { transform: none; }
.ls-axis span.ls-last { transform: translateX(-100%); }
.ls-body { position: relative; overflow-x: clip; }
.ls-grid { position: absolute; top: 0; bottom: 0; width: 1px; background: var(--grid); }
.ls-compressed { position: absolute; top: 0; bottom: 0; left: 0; background: repeating-linear-gradient(135deg, transparent 0 6px, var(--grid) 6px 7px); opacity: 0.6; }
.ls-now { position: absolute; top: -22px; bottom: 0; width: 2px; margin-left: -1px; background: var(--mark); z-index: 0; pointer-events: none; }
.ls-now span { position: absolute; top: 2px; left: 4px; font-size: 11.5px; font-weight: 600; color: var(--mark); white-space: nowrap; background: var(--surface); padding: 0 3px; border-radius: 3px; }
.ls-now.ls-flip span { left: auto; right: 4px; }
.ls-person { position: relative; z-index: 1; height: 32px; cursor: pointer; border-radius: 4px; }
.ls-person:hover, .ls-person:focus-visible { background: var(--chip); outline: none; }
.ls-person.ls-dim { opacity: 0.22; }
.ls-name { position: absolute; top: 2px; font-size: 12.5px; white-space: nowrap; color: var(--ink); }
.ls-name small { color: var(--ink-2); font-size: 11.5px; margin-left: 4px; font-variant-numeric: tabular-nums; }
.ls-name.ls-right { text-align: right; }
.ls-bar { position: absolute; top: 20px; height: 7px; border-radius: 4px; }
.ls-bar.ls-c1 { border-top-left-radius: 0; border-bottom-left-radius: 0; -webkit-mask-image: linear-gradient(90deg, transparent, #000 12px); mask-image: linear-gradient(90deg, transparent, #000 12px); }
.ls-bar.ls-c2 { -webkit-mask-image: linear-gradient(270deg, transparent, #000 12px); mask-image: linear-gradient(270deg, transparent, #000 12px); }
.ls-bar.ls-c3 { -webkit-mask-image: linear-gradient(90deg, transparent, #000 12px, #000 calc(100% - 12px), transparent); mask-image: linear-gradient(90deg, transparent, #000 12px, #000 calc(100% - 12px), transparent); }
.ls-detail { font-size: 13px; color: var(--ink-2); background: var(--chip); border-radius: 6px; padding: 6px 10px; margin: 2px 0 6px; }
.ls-detail a { color: var(--s-M); font-weight: 600; }
.ls-note { font-size: 12px; color: var(--muted); margin-top: 8px; }
.ls-table-wrap { overflow-x: auto; }
.ls-table { border-collapse: collapse; width: 100%; font-size: 13px; }
.ls-table th, .ls-table td { text-align: left; padding: 5px 8px; border-bottom: 1px solid var(--grid); }
.ls-table td.ls-num { font-variant-numeric: tabular-nums; white-space: nowrap; }
.ls-table a { color: var(--s-M); }
`;

function yearText(y, circa) {
  const c = circa ? "c. " : "";
  return y < 0 ? `${c}${-y} BCE` : `${c}${y}`;
}

function spanText(p) {
  const [, b, d, , , circa] = p;
  const cb = circa === 1 || circa === 3;
  const cd = circa === 2 || circa === 3;
  if (b < 0 && d < 0) return `${cb ? "c. " : ""}${-b}–${cd ? "c. " : ""}${-d} BCE`;
  return `${yearText(b, cb)}–${yearText(d, cd)}`;
}

function age(p) {
  const [, b, d] = p;
  return b < 0 && d > 0 ? d - b - 1 : d - b; // there is no year 0
}

function chapterHref(ch) {
  const path = window.location.pathname.replace(/\/+$/, "");
  const base = path.slice(0, path.lastIndexOf("/") + 1);
  return base + CHAPTERS[ch] + "/";
}

function makeScale(era) {
  if (!era.knee) return (y) => (y - era.start) / (era.end - era.start);
  const [ky, kx] = era.knee;
  return (y) =>
    y <= ky ? ((y - era.start) / (ky - era.start)) * kx : kx + ((y - ky) / (era.end - ky)) * (1 - kx);
}

function h(tag, attrs = {}, ...children) {
  const el = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") el.className = v;
    else if (k === "style") el.style.cssText = v;
    else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v);
  }
  for (const c of children) if (c != null) el.append(c);
  return el;
}

function render({ model, el }) {
  const people = (model.get("people") || []).slice().sort((a, b) => a[1] - b[1] || a[2] - b[2]);
  const state = { era: ERAS[0], fields: new Set(FIELD_ORDER), year: 1750, onlyAlive: false, view: "chart", open: null };

  const root = h("div", { class: "ls-root" });
  root.append(h("style", {}, STYLE));
  const syncTheme = () => root.classList.toggle("ls-dark", document.documentElement.classList.contains("dark"));
  syncTheme();
  const themeObserver = new MutationObserver(syncTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  // Controls: era, fields, year, view.
  const eraRow = h("div", { class: "ls-row-controls", role: "group", "aria-label": "Period" });
  const fieldRow = h("div", { class: "ls-row-controls", role: "group", "aria-label": "Fields" });
  const yearInput = h("input", { type: "range", step: "1", "aria-label": "Year" });
  const onlyBox = h("input", { type: "checkbox" });
  const viewBtn = h("button", { class: "ls-btn", type: "button" });
  const yearRow = h("div", { class: "ls-year" }, yearInput, h("label", {}, onlyBox, "Only people alive in this year"), viewBtn);
  const summary = h("p", { class: "ls-summary", "aria-live": "polite" });
  const content = h("div");
  root.append(
    h("p", { class: "ls-label" }, "Period"), eraRow,
    h("p", { class: "ls-label" }, "Fields (tap to show or hide)"), fieldRow,
    h("p", { class: "ls-label" }, "Move the red line through time"), yearRow,
    summary, content,
    h("p", { class: "ls-note" }, "Faded bar ends mark approximate (c.) dates. Tap a name for details and a link to its chapter. In “All”, the years before 1400 are compressed (hatched area).")
  );

  for (const era of ERAS) {
    eraRow.append(h("button", { class: "ls-btn", type: "button", "data-era": era.id, onclick: () => {
      state.era = era;
      // Start the red line in the middle of the chosen period ("All" keeps 1750).
      state.year = era.knee ? 1750 : Math.round((era.start + Math.min(era.end, 2025)) / 20) * 10;
      state.open = null;
      update();
    } }, era.label));
  }
  for (const f of FIELD_ORDER) {
    fieldRow.append(h("button", { class: "ls-btn ls-field", type: "button", "data-field": f, onclick: () => {
      if (state.fields.has(f) && state.fields.size > 1) state.fields.delete(f);
      else state.fields.add(f);
      update();
    } }, h("span", { class: "ls-swatch", style: `background: var(--s-${f})` }), FIELDS[f]));
  }
  yearInput.addEventListener("input", () => { state.year = +yearInput.value; update(); });
  onlyBox.addEventListener("change", () => { state.onlyAlive = onlyBox.checked; update(); });
  viewBtn.addEventListener("click", () => { state.view = state.view === "chart" ? "table" : "chart"; update(); });

  function visible() {
    const { era } = state;
    return people.filter((p) => state.fields.has(p[3]) && p[2] >= era.start && p[1] <= era.end);
  }
  const alive = (p) => p[1] <= state.year && state.year <= p[2];

  function update() {
    for (const b of eraRow.children) b.setAttribute("aria-pressed", String(b.dataset.era === state.era.id));
    for (const b of fieldRow.children) b.setAttribute("aria-pressed", String(state.fields.has(b.dataset.field)));
    yearInput.min = String(state.era.start);
    yearInput.max = String(Math.min(state.era.end, 2025));
    yearInput.value = String(state.year);
    onlyBox.checked = state.onlyAlive;
    viewBtn.textContent = state.view === "chart" ? "Show as table" : "Show as chart";

    const list = visible();
    const living = list.filter(alive);
    const shown = state.onlyAlive ? living : list;
    summary.replaceChildren(
      h("strong", {}, yearText(state.year, false)), `: ${living.length} of the ${list.length} people in this period were alive.`
    );
    content.replaceChildren(state.view === "chart" ? chart(shown) : table(shown));
    requestAnimationFrame(fitLabels);
  }

  // Keep every name label inside the chart: a label that would run past the
  // right edge is pulled back, and one that would start before 0 is pinned to it.
  function fitLabels() {
    const body = content.querySelector(".ls-body");
    if (!body) return;
    const width = body.clientWidth;
    // Drop axis labels that would collide with the previous one or with the red year label.
    const now = content.querySelector(".ls-now span")?.getBoundingClientRect();
    content.querySelectorAll(".ls-axis").forEach((axis, i) => {
      let lastRight = -Infinity;
      for (const tick of axis.children) {
        const { left, right } = tick.getBoundingClientRect();
        const underNow = i === 0 && now && right > now.left - 4 && left < now.right + 4;
        if (left < lastRight + 6 || underNow) tick.style.visibility = "hidden";
        else lastRight = right;
      }
    });
    for (const label of body.querySelectorAll(".ls-name")) {
      const w = label.offsetWidth;
      if (label.offsetLeft + w > width) { label.style.right = "auto"; label.style.left = `${Math.max(width - w, 0)}px`; }
      else if (label.offsetLeft < 0) { label.style.right = "auto"; label.style.left = "0px"; }
    }
  }
  // Re-lay out only when the width changes (height changes come from update itself).
  let lastWidth = 0;
  const resizeObserver = new ResizeObserver(([entry]) => {
    const w = Math.round(entry.contentRect.width);
    if (w !== lastWidth) { lastWidth = w; if (state.view === "chart") update(); }
  });

  function chart(list) {
    const era = state.era;
    const x = makeScale(era);
    const pct = (y) => `${(Math.min(Math.max(x(y), 0), 1) * 100).toFixed(3)}%`;
    const axis = h("div", { class: "ls-axis", "aria-hidden": "true" });
    era.ticks.forEach((t, i) => {
      const cls = x(t) < 0.04 ? "ls-first" : x(t) > 0.96 ? "ls-last" : "";
      axis.append(h("span", { class: cls, style: `left: ${pct(t)}` }, t < 0 ? `${-t} BCE` : String(t)));
    });
    const body = h("div", { class: "ls-body", role: "list" });
    if (era.knee) body.append(h("div", { class: "ls-compressed", style: `width: ${era.knee[1] * 100}%` }));
    for (const t of era.ticks) body.append(h("div", { class: "ls-grid", style: `left: ${pct(t)}` }));
    const xr = x(state.year);
    body.append(h("div", { class: `ls-now${xr > 0.75 ? " ls-flip" : ""}`, style: `left: ${pct(state.year)}` }, h("span", {}, yearText(state.year, false))));

    for (const p of list) {
      const [name, b, d, f, ch, circa] = p;
      const x0 = Math.max(x(b), 0), x1 = Math.min(x(d), 1);
      const right = x0 > 0.55;
      const label = h("span", {
        class: `ls-name${right ? " ls-right" : ""}`,
        style: right ? `right: ${((1 - x1) * 100).toFixed(3)}%` : `left: ${(x0 * 100).toFixed(3)}%`,
      }, name, h("small", {}, spanText(p)));
      const bar = h("div", {
        class: `ls-bar${circa ? " ls-c" + circa : ""}`,
        style: `left: ${(x0 * 100).toFixed(3)}%; width: ${Math.max((x1 - x0) * 100, 0.6).toFixed(3)}%; background: var(--s-${f})`,
      });
      const row = h("div", {
        class: `ls-person${alive(p) ? "" : " ls-dim"}`, role: "listitem", tabindex: "0",
        title: `${name}, ${spanText(p)} · ${FIELDS[f]}`,
        "aria-label": `${name}, ${spanText(p)}, ${FIELDS[f]}, chapter ${ch}`,
      }, label, bar);
      const toggle = () => { state.open = state.open === name ? null : name; update(); };
      row.addEventListener("click", toggle);
      row.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
      body.append(row);
      if (state.open === name) {
        body.append(h("div", { class: "ls-detail" },
          `${name} · ${spanText(p)} · lived about ${age(p)} years · ${FIELDS[f]} · `,
          h("a", { href: chapterHref(ch) }, `Chapter ${ch} →`)));
      }
    }
    const bottom = axis.cloneNode(true);
    return h("div", { class: "ls-chart" }, axis, body, bottom);
  }

  function table(list) {
    const rows = list.map((p) => {
      const [name, , , f, ch] = p;
      return h("tr", {},
        h("td", {}, name),
        h("td", { class: "ls-num" }, spanText(p)),
        h("td", {}, FIELDS[f]),
        h("td", { class: "ls-num" }, h("a", { href: chapterHref(ch) }, String(ch))));
    });
    return h("div", { class: "ls-table-wrap" }, h("table", { class: "ls-table" },
      h("thead", {}, h("tr", {}, h("th", {}, "Name"), h("th", {}, "Lived"), h("th", {}, "Field"), h("th", {}, "Ch."))),
      h("tbody", {}, ...rows)));
  }

  update();
  el.replaceChildren(root);
  resizeObserver.observe(root);
  return () => { themeObserver.disconnect(); resizeObserver.disconnect(); };
}

export default { render };
