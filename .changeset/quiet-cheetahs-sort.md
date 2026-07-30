---
"@marko/runtime-tags": patch
---

Speed up keyed lists. A section whose only content is an exhaustive conditional now builds no node of its own — the conditional's content IS the section's range — so a `<for>` over `<if>`/`<else>` allocates one fewer template clone, walk and DOM swap per item, and the rendered DOM carries no marker comments for it. A loop item whose args are unchanged skips its whole params pass, including any nested loop it would otherwise re-run per item. Also drops the per-scope `AbortController` behind closure subscriptions, holds a lone child branch directly instead of allocating a `Set`, memoizes the per-branch cloner lookup, skips the `DocumentFragment` when inserting into a detached tree, keys `_or`'s pending counter by string, and walks cloned templates without a `TreeWalker`.
