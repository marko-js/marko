---
type: cleanup
impact: low
effort: low
site: zcov.json › exclude
---

# Drop the zcov exclude that matches no file

`zcov.json` excludes `**/html/reorder-runtime.ts`, and no file of that name exists anywhere in the repo — `git ls-files | rg 'html/reorder-runtime'` is empty. It was deleted in `a3378e265f` ("Tags API: New HTML writer implementation"), superseded by `html/inlined-runtimes[.debug].ts`, and the exclude has been dead since. A reader auditing the list has to check the repo to learn that, which is the cost.

Check: `rg -n 'reorder-runtime' zcov.json` matches, and `git ls-files | rg 'html/reorder-runtime'` returns nothing.
