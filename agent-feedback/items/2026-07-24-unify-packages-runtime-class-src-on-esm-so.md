---
type: dx
impact: low
effort: high
site: packages/runtime-class/package.json › files
---

# Unify `packages/runtime-class/src` on ESM so its module type can be declared

`packages/runtime-class` declares no `"type"`, and 79 ESM-syntax `.js` files sit under `src` alongside 137 CommonJS ones, so Node parses each ESM file as CommonJS, fails, and reparses it as ESM. It is not silent: `pnpm run compile -t class` — the `-t class` form root `AGENTS.md` documents — prints `[MODULE_TYPELESS_PACKAGE_JSON] ... packages/runtime-class/src/translator/index.js ... incurs a performance overhead`. It is harder than `packages/compiler` was: that package fixed it with a `src/package.json` `{"type":"module"}` marker it never publishes, whereas `runtime-class` lists `src` in `files`, so the marker would ship and all 137 CJS files would have to convert. Marko 5 is in maintenance, so weigh the churn before starting.

Check: `pnpm run compile -t class -o dom -d /tmp/x.marko` and observe the warning.
