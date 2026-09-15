---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/resume.ts › failPatch
---

# Apply the frame that first constructs a nested layout

With `@marko/run`'s `patches: true`, navigating from a route outside a nested
layout to one inside it fails to apply and falls back to a full document
load, warning `A patch navigation fell back to a document load: a frame did
not apply.` Navigations between routes that already share the layout patch
normally, so the failure is the frame that constructs the nested layout for
the first time. A nested layout is how an app keeps a component alive across
a group of routes, which is the feature's main draw, so this costs the
persisted navigation exactly where it matters most.

Not reduced to a runtime-tags fixture: a plain custom tag wrapping a
conditional that wraps another custom tag and conditional patches fine, so
the trigger involves more of run's generated app entry (per-route page
branches under `usePatch`) than that shape carries. It may belong to
`@marko/run`'s codegen rather than here.

Check: in a `@marko/run` app with `patches: true`, add `src/routes/x/+layout.marko`
over two routes under `/x`, then click a link from a route outside `/x` into
one of them. The warning appears and `performance.getEntriesByType("navigation")`
grows, where the same click without the nested layout patches in place.
