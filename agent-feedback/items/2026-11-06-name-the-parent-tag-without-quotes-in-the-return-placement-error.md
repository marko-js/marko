---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/return.ts › analyze
---

# Name the parent tag without quotes in `<return>`'s placement error

When `<return>` sits under a control-flow tag, `analyze` builds "can not be used under the `<…>` tag" from `parentTag.get("name").toString()`. That prints the name node's source, so a string-literal tag name comes out quoted: the message reads "can not be used under the `<"if">` tag". `getTagName(parentTag)` (`util/get-tag-name.ts`) returns the bare name, and every control-flow parent has a static one. The `error-return-if-else` error snapshots change with the fix.

Check: `packages/runtime-tags/src/__tests__/fixtures/error-return-if-else/__snapshots__/error-compile-dom.txt` reads "under the `<"if">` tag" and "under the `<"else">` tag".
