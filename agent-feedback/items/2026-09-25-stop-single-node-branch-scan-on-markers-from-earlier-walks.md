---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/dom/resume.ts › createVisitBranches
---

# Stop the single-node branch scan from adopting markers consumed by an earlier walk

For a single-node branch end, `createVisitBranches` walks `previousSibling` from the end marker and skips a node only while `visits.indexOf(node)` finds it, but `render.m` truncates `render.v` after every pass. When a `M._.w()` walk runs between two loop items (for example a reorder flush while in-order content inside the items is still streaming), the first item's trailing resume comment is no longer in `visits`, so the scan stops there and makes that comment the item's StartNode/EndNode. Removing that item on the client then removes only the comment and leaves its element in the DOM. Direction: skip siblings structurally (`nodeType === 8` and data starting with `render.i`, this render's prefix) instead of by membership in the current batch.

Check: a fixture template `import { resolveAfter } from "../../utils/resolve";` + `<let/items=[1, 2]/><try><@placeholder>loading</@placeholder><await|x|=resolveAfter("done", 1)><span onClick() { console.log(x) }>${x}</span></await></try><for|item| of=items by=(x) => x><button onClick() { items = items.filter((i) => i !== item) }>${item}:<await|v|=resolveAfter(item, item)>${v}</await></button></for>`, with `equivalent: false` and steps `[{}, flush, wait, flush, wait, click the first button]`. In `render-ssr.md` the click changes nothing and both buttons remain; `render-csr.debug.md` removes the first button.
