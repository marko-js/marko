---
"@marko/runtime-tags": patch
---

Better tree-shaking for the browser runtime:

- The package declares `"sideEffects": ["**/*.marko"]` — runtime module
  bodies were previously retained as potential side effects (a plain
  fixture page bundle dropped 16.1 → 2.7 kB minified). Compiled templates
  rely on top-level registration side effects, so `.marko` files are
  explicitly excluded from the declaration; none ship in this package
  today (`tags/` holds `.d.marko` type stubs), the Marko 5 interop compat
  file the translator bare-imports lives in the runtime-class package
  (undeclared, unaffected), and every runtime-internal import carries
  bindings — the glob keeps a future runnable template from becoming
  silently droppable.
- `dist` ships the dom runtime as preserved modules behind the `dom.mjs`
  re-export facade, so application bundlers chunk it at file granularity
  instead of hosting one big module in the first chunk that needs any of
  it.
- Three phase splits so hydration-time imports stop dragging render-time
  machinery: the spread/`content`-attr machinery moved out of the plain
  write helpers (`dom/spread.ts`), `<try>` catch/pending installation
  moved out of the render queue into control-flow (the queue exposes
  `enableCatchPending` wrap hooks instead of importing branch machinery),
  and `_script_update`/`_updating` moved out of the persisted-update
  applier file into the queue. Public exports are unchanged.

Fixture `sizes.json` diffs from this change mix real wins with
accounting: side-effect-free runtime modules that previously landed in a
shared chunk (which the per-entry sizes never counted) now inline into
the measured entry chunks.
