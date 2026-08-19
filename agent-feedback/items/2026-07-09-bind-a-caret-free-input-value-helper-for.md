---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › getRelatedControllable
---

# Bind a caret-free input value helper for statically non-text `type`s

A `type="number"` input still ships caret-preservation code that can never fire: `setInputValue` (`src/dom/controllable.ts`) calls `resolveCursorPosition` + `setSelectionRange`, and selection APIs only apply to text/search/url/tel/password and `<textarea>` (`selectionStart` is null elsewhere, so the runtime is already correct -- this is bytes only, roughly 0.5 kB raw for `resolve-cursor-position.ts` plus the two caret lines, not the ~1.25 kB the whole value path costs). `getInputValueMode` already evaluates a static `type` to pick `attribute`/`dynamic` mode and `getDOMControllableDefaultHelper` maps a mode onto `_attr_input_value_<mode>_default`, so a caret-free mode slots in there. Note both emitted helpers must be covered: one-way `value=` emits only `_attr_input_value_default`, but two-way `value:=` also emits `_attr_input_value_script`, whose post-handler `setInputValue` keeps `resolve-cursor-position` alive on its own -- a caret-free default helper without a caret-free script variant saves nothing for `value:=`. Opt out only for types where selection provably never applies (number, range, color, file, date/time family) rather than 'not in the text family', so `email` keeps the generic path, and weigh the split: a page with both a text and a number controllable ships both variants.

Check: by compiling a `type="number"` `value:=` input and checking neither emitted helper reaches `resolve-cursor-position`.
