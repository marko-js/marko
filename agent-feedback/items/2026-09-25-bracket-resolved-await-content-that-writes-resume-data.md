---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/html/writer.ts › _await
---

# Bracket resolved `<await>` content that writes resume data

When `_await` gets a promise and `serializeMarker === 0`, the resolved content renders later with larger scope ids but without the BranchStart/BranchEnd marks that the `resumeMarker` path writes. `dom/resume.ts` › `createVisitBranches` adopts every pending scope whose id is at least the ending branch's id, which assumes out-of-order content is bracketed. So a following sibling branch's end marker adopts the await's resumed child scopes, and destroying that sibling branch destroys a still-mounted child: its `$signal` aborts and its updates stop. Direction: in the promise path, write the BranchStart/BranchEnd pair whenever the resolved content wrote resume data (as `_try` decides from what its content rendered), whatever `serializeMarker` is.

Check: a fixture with `tags/counter.marko` = `<let/count=0/><button.inc onClick() { count++ }>${count}</button><script>$signal.onabort = () => console.log("counter destroyed");</script>` and template `import { resolveAfter } from "../../utils/resolve";` + `<let/show=true/><await|x|=resolveAfter(1, 1)><counter/></await><if=show><span>shown</span></if><button.hide onClick() { show = false }>hide</button>`, with `equivalent: false` and steps `[{}, flush, wait, hide, inc]`. `render-ssr.md` logs "counter destroyed" on hide and the inc click leaves `0`; `render-csr.debug.md` logs nothing and shows `1`.
