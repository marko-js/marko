---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/evaluate.ts › getIdentifierKind
---

# Add a value kind for content so a `<define>` reached through a binding composes like a direct call

`getIdentifierKind` follows a `<const>`, a template's default import and the template's own params, so a `<define>` variable, or a `<const>` naming one, is unknown and a tag named by it renders through `_dynamic_tag`. Its body then counts as handed to code the analysis cannot see: `sections.ts` › `getDynamicTagContentClosures` keeps the body's closures with a module-level `_content_closures_resume`, and the call builds a `{ content }` object, where `<Inner>` passes the body straight to the `<define>`'s own signals and registers nothing. A content bit, with the `<define>` bodies the value may be held beside `templates`, would let `analyzeTagNameType` compose a name that is only those bodies as it does `<Inner>`, and let the content-registration readers (`getDynamicTagContentClosures`, `bindingLandsRetained`) treat a body passed to one as landing in a known section. The kind is cheap (a bit and an `Opt` list); the readers are the work.

Check: `pnpm run compile -- -o dom -d` on `<define/Inner|{ content }|><b><${content}/></b></define><const/Alias=Inner/><Alias>body ${input.label}</Alias>` emits `_content_closures_resume($Alias_content)`, `_dynamic_tag` and `{ content: $Inner_content($scope) }`; with `<Inner>body ${input.label}</Inner>` in place of the last two tags it emits no `_content_closures_resume` and passes the body to `_dynamic_tag_content`.
