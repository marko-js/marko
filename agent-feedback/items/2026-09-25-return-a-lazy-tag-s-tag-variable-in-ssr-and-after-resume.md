---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Resume a lazy tag's variable where nested content, another tag's input, or a `<return>` carries it

A value from a lazily loaded tag's variable that reaches nested content (a `<const>` in an `<if>` body), another tag's input, or a wrapper tag's `<return>` is written by that section's `_scope` into the main resume stream, which runs before the lazy module registers the value; only the tag's own section routes values holding it through its ready stream (`_var_scope`, `getTagVarValues`). `html/serializer.ts` › `writeRegistered` therefore aborts the debug render and drops the value in optimized output, while CSR works. A value holding the variables of two tags lazily loaded from different modules (`<const/both={ a, b }>`) is sent with only one of their ready streams, where the other tag's value is unreachable, so the debug render aborts as "shared between independently lazy loaded content". Direction: send writes from sections nested in the tag's section through the same ready stream when they render synchronously with the tag (an `<await>` body may run after that stream flushed), let a child scope or tag variable that receives such a value carry the lazy stream across templates, and make a value derived from several lazy tags wait for each of their streams.

Check: fixture with `child.marko` = `<let/n=0><p>n ${n}</p><return=() => n++>` and `template.marko` = `import Child from "./child.marko" with { load: "render" }` + `<Child/api/><if=true><const/actions={ api }><button onClick() { actions.api() }>inc</button></if>`, `equivalent: false`, steps `[{}, wait, click, wait]`: the debug `ssr` run fails with "Unable to serialize a value from lazily loaded content outside of that content", the optimize `ssr` run throws a `TypeError` on the click, and `render-csr.debug.md` updates to `n 1`. Replacing the `<if>` with `<other fn=api/>` (`tags/other.marko` = `<button onClick() { input.fn() }>inc</button>`) fails the same way.
