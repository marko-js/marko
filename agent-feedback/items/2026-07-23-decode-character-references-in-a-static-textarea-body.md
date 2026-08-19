---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/core/textarea.ts › preAnalyze
---

# Decode character references in a static `<textarea>` body

`preAnalyze` folds a `<textarea>` body into a synthetic `value` attribute by pushing each `MarkoText` child's raw source into `normalizeStringExpression`, and `_textarea_value` (`html/attrs.ts`) escapes it again: `<textarea>&lt;p&gt;hi</textarea>` compiles to `_textarea_value("&lt;p&gt;hi")` and shows the literal `&lt;p&gt;hi`, while the same body in `<title>`/`<div>` passes through, as it does in Marko 5. Entities are the only way to author literal markup in a text-only tag, so that case is unrepresentable. CSR matches SSR, so the fix is decoding `MarkoText` children at compile time — but `MarkoText.value` is raw source and the only decoder in the tree is `he` under `packages/compiler/node_modules` (~100KB, tree-shaken out today), so it needs a new `babel-utils` export; weigh that cost.

Check: compile `<textarea>&lt;p&gt;hi</textarea>` with `-o html` and check the emitted `_textarea_value` literal.
