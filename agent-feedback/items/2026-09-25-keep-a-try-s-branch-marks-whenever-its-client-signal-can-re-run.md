---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/html/writer.ts › _try
---

# Keep a `<try>`'s branch marks whenever its client signal can re-run

HTML `_try` writes its branch marks only when the body rendered something async or resumable, and unlike `_await` it takes no serialize guard from the translator. `dom/control-flow.ts` › `_try` treats a missing `scope[branchAccessor]` as the creating run and calls `setConditionalRenderer` with no marker node. So when the try's input can change on the client (its `@catch` or `@placeholder` comes from a stateful `<for>` or `<if>`) but its body is static, the first update after resume throws. Direction: pass the body's branch serialize guard to HTML `_try`, as `translator/core/await.ts` does for `_await`, so the marks are written whenever the DOM signal can re-run.

Check: fixture with template ``<let/clicks=0/><button onClick() { clicks++ }>${clicks}</button><try><for|l| of=[`update ${clicks}`]><@catch>caught ${l}</@catch></for>static body</try>``, steps `[{}, click]`: `ssr` fails with `TypeError: Cannot read properties of undefined (reading 'nodeType')` from `setConditionalRenderer`, while `csr` passes.
