---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/dom/resume.ts › init
---

# Name a foreign or duplicate `window[runtimeId]` in debug builds

The inline walker does `self[runtimeId] ||= …` and `init` treats whatever `self[runtimeId]` holds as Marko's render map, so a page where another library already owns `window.M` (Materialize CSS, for example) fails resume with a raw `TypeError: visits is not iterable` from `render.m`, after `init` has iterated the foreign object's keys as render ids and overwritten the library's global. The only debug check, "Marko initialized multiple times with different $global.runtimeId's.", fires only when one runtime copy calls `init` twice with different ids, so neither this case nor a second DOM runtime copy sharing a runtimeId gets a message that names the cause. Direction: in MARKO_DEBUG, have `init` (and the debug walker) check that an existing `self[runtimeId]` is a Marko render map and otherwise throw an error naming the conflicting global and pointing at `$global.runtimeId`; state the one-owner rule next to `runtimeId` in the docs.

Check: a fixture with template `<html-script>window.M = { toast() {} };</html-script><let/count=0/><button onClick() { count++ }>${count}</button>` and steps `[{}, click]`: `pnpm run test:update -- --grep "runtime-tags/translator <fixture> "` fails both `debug › ssr` and `optimize › ssr` with `TypeError: visits is not iterable` from `render.m` via `init` instead of a Marko error naming the conflicting global.
