---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/html/serializer.ts › accessPath
---

# Root a later flush's read paths at server values, not live scope slots

When a later flush reuses a value first written as a Scope property, `writeRef` emits a path rooted at that Scope (`_(1).selected`), and `dom/resume.ts` › `applyScopes` has already adopted the earlier fill as the live Scope. If the client rebinds that slot (a `<let>` assignment) before the late payload runs, which it can while a `@placeholder` reorder or a lazily loaded child is still pending, the payload reads the client's current value instead of the server's, and handlers in the late content silently close over the wrong object. Direction: root cross-flush paths at a record of the server fills rather than the live Scope (for example keep each scope's fill reachable by id, latched so the floor bundles do not pay; measure with `build:sizes`).

Check: fixture with template `import { resolveAfter } from "../../utils/resolve";` + `<let/selected=input.items[0]/><button#top onClick() { selected = { name: "z", prev: selected } }>top</button><div#out>${selected.name}</div><try><@placeholder>loading</@placeholder><await|_|=resolveAfter(1)><for|item| of=input.items><button.row onClick() { selected = item }>${item.name}</button></for></await></try>`, `equivalent: false`, steps `[{ items: [{ name: "a" }, { name: "b" }] }, clickTop, flush, wait, clickFirstRow]`: the second flush in `writes.debug.html` has `item: _(1).selected`, and after the row click `render-ssr.md` leaves `#out` at `z` while `render-csr.debug.md` shows `a`.
