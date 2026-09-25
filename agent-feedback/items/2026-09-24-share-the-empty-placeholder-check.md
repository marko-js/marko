---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/placeholder.ts › analyze.enter
---

# Share the empty placeholder check between placeholder.ts and static-text.ts

`isEmptyPlaceholder` in `util/static-text.ts` is private, and `visitors/placeholder.ts` repeats its test (`confident && getHTMLRuntime()[escape ? "_escape" : "_unescaped"](computed) === ""`) inline in `analyze.enter`, `analyze.exit` and the translate path, and `isStaticText` runs `_escape` on the same value again. Four copies must stay in lockstep with what the runtime writes (`""`, `NaN`, `0n`). Export `isEmptyPlaceholder` and call it at each site, or cache the placeholder's static text on its extra once.

Check: `grep -n '_escape" : "_unescaped"' packages/runtime-tags/src/translator/visitors/placeholder.ts packages/runtime-tags/src/translator/util/static-text.ts` lists four copies.
