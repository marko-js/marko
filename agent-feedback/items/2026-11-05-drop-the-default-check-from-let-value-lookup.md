---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/let.ts › translate.exit
---

# Drop the `attr.default` test from `<let>`'s value lookup

`<let>`'s translate finds its value with `attr.default || attr.name === "value"`, but the parser names every default attribute `value` (`packages/compiler/src/babel-plugin/parser.js` › `onAttrName` builds it as `t.markoAttribute(name || "value", …, !name)`), so `attr.default` never decides the match. Test the name alone.

Check: `grep -n 'name || "value"' packages/compiler/src/babel-plugin/parser.js`; compile `<let/x=1/>` with the `attr.default ||` removed and see identical output.
