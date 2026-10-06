---
type: dx
impact: low
effort: med
site: packages/runtime-tags/src/dom/dynamic-tag-var.feat.ts › installDynamicTagVar
---

# Check a server-rendered dynamic tag's variable for a `<return>` in debug builds

A debug build throws when the client creates a dynamic tag branch with a tag variable over content without a `<return>` (`installDynamicTagVar`), but the server renders such content silently (`_dynamic_tag` in `html/dynamic-tag.ts` cannot tell no `<return>` from `<return=undefined>`), and a resumed branch never reaches the check. A page whose dynamic tag only ever renders its first, server-rendered content so never reports the mistake. Direction: a debug-only check in `_dynamic_tag_var_resume` reading the resumed renderer's mark, or debug-only marks on server renderers checked in `_dynamic_tag`.

Check: in `error-dynamic-tag-var-without-return`, start with `<let/Tag=None/>` and no steps; the `ssr` run renders without the error the `csr` run throws.
