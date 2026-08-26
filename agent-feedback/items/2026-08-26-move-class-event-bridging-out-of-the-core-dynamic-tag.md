---
type: perf
impact: med
effort: med
site: packages/runtime-class/src/runtime/helpers/dynamic-tag.js › addTagsEvents
---

# Move Class event bridging out of the core dynamic-tag helper into tags-compat

`addTagsEvents`, `bindTagsEventHandler`, and `CLASS_EVENT_MARKER` exist only to bridge a Class parent's `on-x(...)` bindings to Tags API children, which are always reached through the wrapper `___runtimeCompat` creates. Yet they live in `dynamic-tag.js`, so every Marko 5 app that uses a dynamic tag bundles them — including pure Class API apps that can never hit the path (the call site guards with `renderer === classRenderer`). Passing `componentDef`/`customEvents` into `___runtimeCompat` and folding events inside the tags-compat wrappers (`tagsToVdom` in `tags-compat/runtime-dom.js` and `runtime-html.js`) removes ~65 lines from the core helper, drops the identity guard, and lets each side keep only its own branch of the `IS_SERVER` conditional; `CLASS_EVENT_MARKER` moves into the two compat files (both ends of the wire format). A prototype of this shape measured ~215 min / ~70 brotli bytes smaller even for interop bundles (e.g. `interop-basic-class-to-tags` sizes.json), with the whole bridge deleted from Class-only bundles.

Check: `grep -n 'addTagsEvents\|bindTagsEventHandler\|CLASS_EVENT_MARKER' packages/runtime-class/src/runtime/helpers/dynamic-tag.js` shows the bridge in the shared helper while its only trigger (`renderer !== classRenderer`) requires tags-compat's `___runtimeCompat` wrapper; `pnpm test -- --grep "interop-event"` covers the behavior a move must preserve.
