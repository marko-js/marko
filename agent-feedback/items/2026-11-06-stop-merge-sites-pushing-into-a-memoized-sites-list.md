---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/solve-reasons.ts › mergeSites
---

# Stop `mergeSites` pushing into a memoized sites list

`mergeSites` adds `b`'s sites to `a` with `optional.ts` › `push`, which appends in place once `a` is an array. `a` can be the list held by a memoized `bindingReaders` result. `readersOfDerived` passes `linked.deepSites` in directly, and `mergeReaders` returns a memoized `Readers` unchanged when the other side is `UNREAD`, so the next merge pushes into it. Take a content param that is passed into two other templates and also rendered directly, so its memoized `deepSites` holds two sites. When a caller that passes it on is asked, the param's own direct site is appended to that memoized `deepSites`, and later `getContentSites` reads in the same pass see a list the memo never computed. No output change was observed, since an extra site only makes `mayContentFollowText` more conservative, but the memo's answer now depends on query order. Copy the list on the first add when `a` is an array.

Check: temporarily make `util/cyclic-memo.ts` › `createCyclicMemo` `Object.freeze` the `sites`/`deepSites` arrays of each result it caches, then compile (dom) the template below. `push` throws "Cannot add property 2, object is not extensible" from `mergeSites` in `readersOfDerived`. With the freeze, every fixture template still compiles, so the corpus never hits it.

```marko
<define/A|{ content }|><div><${content}/></div></define>
<define/B|{ content }|><p><${content}/></p></define>
<define/Layout|{ content }|><A content=content/><B content=content/><${content}/></define>
<define/Outer|{ content }|><Layout content=content/></define>
<Outer><span>${input.x}</span></Outer>
```
