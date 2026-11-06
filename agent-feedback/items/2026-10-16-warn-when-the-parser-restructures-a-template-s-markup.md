---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › analyze
---

# Warn when the parser restructures a template's markup

Markup the HTML parser restructures breaks client walks without saying why: a `<table>` whose first child is a `<tr>` gets an implied `<tbody>`, so the walk written for `<table><tr>` lands on the wrong node and node bindings (`_text`, `_on`) receive `undefined` (`TypeError: Cannot read properties of undefined (reading 'data')` at mount), while server rendering works because resume reads nodes by marker. Walks follow the markup as written (noted at `structure.ts` › `resolveStructure`); the supported form is explicit markup (`<tbody>` around rows), and the fix is a development warning naming the restructured markup and the explicit form. Open PR #3686 checks server-rendered HTML at runtime, which this client-render case never reaches; a compile-time `diagnosticWarn` from native tag analysis covers client templates too.

Check: a fixture with `<let/n=0/><table><tr><th><button onClick() { n++ }>${n}</button></th></tr></table>` fails its `csr` step with that TypeError and no message pointing at the missing `<tbody>`.
