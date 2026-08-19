---
type: unclear
impact: high
effort: low
site: packages/runtime-tags/cheatsheet.md › imports / SSR
---

# Cheatsheet: `client import` is undefined during SSR render

`client import { fn } from "./x"` deliberately omits the binding from the server bundle. Any **render-time** call (`<const/x=fn()>`, attribute expressions, `<if=fn()>`, top-level `<script>` that runs while streaming) therefore throws `TypeError: fn is not a function` on the server — often inside `<try>`/`@catch` or an out-of-order `<await>` stream, so the HTML still ships a placeholder plus a hidden error fragment rather than an obvious build failure.

Pure helpers used while painting SSR HTML (`phaseOf`, `makeFileFilter`, `fuzzy`, `pushSupported` that already guards `typeof window`, etc.) must be ordinary `import`. Reserve `client import` for browser-only modules (DOM, `window`, xterm, WebSocket) and invoke those only from `lifecycle` / event handlers.

Direction: one cheatsheet rule + a common-mistakes row: "render path → normal import; browser-only side effects → `client import` + client-only entrypoints". Ideal follow-up: translator warning when a `client import` binding is referenced from a server-evaluated expression section.

Check: Tags-API page with `<try><await|…|>…` that SSRs a child calling `client import { phaseOf }`; server HTML catch/stream shows `phaseOf is not a function`; switch to `import { phaseOf }` and the SSR tree paints.
