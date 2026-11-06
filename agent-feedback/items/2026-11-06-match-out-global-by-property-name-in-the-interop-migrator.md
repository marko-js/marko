---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/interop/out-global.ts › ReferencedIdentifier
---

# Match `out.global` by property name in the interop migrator

The `out.global` migrator tests `t.isIdentifier(parent.property) && parent.property.name === "global"` and never checks `computed`. In a Tags template compiled through the interop translator, `out[global]` (a variable named `global`) is therefore rewritten to `$global` and silently reads the wrong value. Meanwhile `out["global"]`, which is the same member as `out.global`, throws "Only `out.global` is supported for compatibility.". Testing `getMemberExpressionPropString(parent) === "global"` (`util/to-property-name.ts`) handles both cases.

Check: `pnpm run compile -- -t class -o html` on `<const/global="name"/><div>${out[global]}</div>` emits `_escape($global)`; on `<const/x=1/><div>${out["global"].name}${x}</div>` it throws "Only `out.global` is supported for compatibility.".
