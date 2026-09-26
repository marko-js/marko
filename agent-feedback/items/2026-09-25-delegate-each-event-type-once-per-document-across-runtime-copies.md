---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/dom/event.ts › delegate
---

# Delegate each event type once per document across runtime copies

`delegate` keeps its once-per-type flag on the handler function (`handleDelegated[1 + type]`, `handleChange[1 + type]`), and each bundled copy of the runtime has its own functions, while the element expandos those handlers read (`el[1 + type]`, and `el._`/`el.c` from `syncControllableFormInput`) are shared by every copy. Two separately bundled Marko 6 apps on one page (the case `runtimeId` exists for) therefore each add a document capture listener and each call every handler: every `onClick` runs twice, and a controlled checkbox is negated and reported twice. Direction: keep the flag where every copy sees it (for example an expando on `document` keyed by handler kind and type), and warn in MARKO_DEBUG when a second copy delegates a type.

Check: a `node -r ~ts` script at the repo root that creates a jsdom window with buttons `#a` and `#b`, sets `globalThis.document`, imports `./packages/runtime-tags/src/dom/event.ts?copy=1` and `?copy=2`, attaches `_on(a, "click", () => countA++)` from the first copy and `_on(b, "click", () => countB++)` from the second, then clicks each once: both counts are 2.
