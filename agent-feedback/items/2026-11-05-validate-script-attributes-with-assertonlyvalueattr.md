---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/script.ts › analyze
---

# Validate `<script>` attributes with `assertOnlyValueAttr`

`<script>`'s analyze walks its attributes itself, tracking `seenValueAttr` to reject a second `value=` (through `buildDuplicateAttrError`) and any other attribute with its own "does not support html attributes" message, while every other single-value core tag gets both checks from `assertOnlyValueAttr` in `util/assert.ts`. Calling `assertOnlyValueAttr(tag, false, false, hint)` with the `html-script` suggestion as the hint would drop the loop and `seenValueAttr`, register the effect from the returned `valueAttr`, and span every unsupported attribute as the other tags do. It changes the wording the `error-script-attrs` fixture pins to "only supports the `value=` attribute", which is why it was left out of the duplicate-check consolidation.

Check: compare the attribute loop in `core/script.ts` › `analyze` with `util/assert.ts` › `assertOnlyValueAttr`; compile `<script src="a.js"/>` and read the message.
