---
type: bug
impact: low
effort: low
site: packages/compiler/src/babel-plugin/parser.js › onCloseTagEnd
---

# Read `parseOptions.controlFlow` when moving empty nested control flow into attribute tags

The comment in `onCloseTagEnd` says a control-flow tag holding attribute tags moves "empty nested control flow" into `attributeTags`, but the check reads `child.tagDef?.controlFlow`, which is never set; the flag lives at `tagDef.parseOptions.controlFlow`, as the `isControlFlow` check in the same block reads it. So an empty `<if>` next to an attribute tag inside a `<for>` stays in the body and trips "Cannot have attribute tags and body content under a control flow tag." Read `child.tagDef?.parseOptions?.controlFlow` and add a compiler fixture with an empty nested `<if>`.

Check: with `tags/lister.marko` containing `<for|item| of=input.item><${item}/></for>`, `pnpm run compile -- -o html -d` on a sibling template `static const l = [1];` + `<lister><for|x| of=l><@item>a</@item><if=x></if></for></lister>` throws "Cannot have attribute tags and body content under a control flow tag." pointing at the empty `<if=x></if>`.
