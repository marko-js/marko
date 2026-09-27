---
type: dx
impact: low
effort: low
site: package.json › scripts.compile
---

# Keep Node's module-type warning out of `pnpm run compile -- -t class`

Loading `marko/translator` from source makes Node reparse `packages/runtime-class/src/translator/index.js` as ESM (the package declares no `"type"`, and its published `dist` is CommonJS), so every `-t class` run prints a four-line `MODULE_TYPELESS_PACKAGE_JSON` warning among the inspected output. The mocha configs already pass `no-warnings` in `.mocharc.json` › `node-option`; the `compile` script runs plain `node -r ~ts`. Giving the script the same flag, or declaring the source format some other way that leaves the published CommonJS untouched, would keep the run quiet.

Check: `pnpm -s run compile -- -t class -o html x.marko 2>&1 >/dev/null | grep -c MODULE_TYPELESS_PACKAGE_JSON` prints `1`, for any template `x.marko`.
