---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/references.ts › trackReferencesForBinding
---

# Reject a hoisted tag variable read while rendering instead of rendering its getter

A tag variable declared in a tag's body and read from a sibling attribute tag, `<wrap><id/fid><form id=fid/><@footer><button form=fid>Go</button></@footer></wrap>`, takes the `isReferenceHoisted` branch, so the footer's attribute receives the hoist getter itself: dom `_attr($scope["#button/0"], "form", $fid_getter($scope._))`, html `_attr("form", $fid_getter)`. A debug build throws at runtime (`Hoisted values must be functions, received type "string"` from `_assert_hoist`, or ``The `form` attribute cannot be a function``), but an optimized build renders the getter's source, `form="() => void 0"`, so the button names no form and clicking it submits nothing, with no error. The compiler knows enough to reject it: the reference is outside any function (`getFnRoot` finds none), so it is read during render, which marko-js/website `docs/reference/language.md` › Tag Var Scope calls incorrect; and a `<id>` variable is never a function, while `core/define.ts › analyze` already throws for a hoisted `<define>`. An attribute tag reads like part of the same tag, so the mistake is easy to make and nothing downstream catches it (`mtc` types the read as `never`). Throw a compile error for a hoisted read outside a function, at least where a function is never valid (a native tag's non-handler attribute, a placeholder) and for any hoisted `<id>` variable, e.g. "`fid` is declared inside `<wrap>`'s body and read here while rendering; only scripts and event handlers can read a hoisted tag variable. Declare it above `<wrap>`." Lowering to the value is not an option, since the child tag decides whether and when its body renders.

Check: `tags/wrap.marko` = `export interface Input { content?: Marko.Body; footer?: Marko.AttrTag<{ content?: Marko.Body }> }`, `<div><${input.content}/></div>`, `<footer><${input.footer}/></footer>`; `page.marko` = the `<wrap>` above, one tag per line. `pnpm run compile -- -o dom -d page.marko` and `-o html -d` compile without error and emit the getter reads quoted above. Rendering the optimized html output against the built `packages/runtime-tags/dist/html.mjs` prints `<button form="() => void 0">Go</button>`. Expect a compile error.
