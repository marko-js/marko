---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › analyze.enter
---

# Hoist a native tag's object-literal spread properties into attributes

The `t.isMarkoSpreadAttribute(attr)` branch of `analyze.enter` treats every spread as an opaque effect (`valueExtra.isEffect = true; hasEventHandlers = true; hasDynamicAttributes = true`) without inspecting the value. An object literal whose properties all have static keys (no computed keys, no `...rest` inside) says exactly which attributes it sets, so each property can be hoisted in place as the attribute it names (`...{ id: "x", class: input.cls, content: x, onClick() {} }` as `id="x" class=input.cls content=x onClick() {}`), keeping spread order so later attributes still override. The opaque path costs whatever its values are: a fully static `<div ...{ "data-a": "1" }>hi</div>` marks the program interactive and resumes the element with a `_script`, and a dynamic `content` key reads its value on every resume (`solve-reasons.ts › computeBindingReaders` only exempts a binding spread as is), so the values that content reads ship unconditionally. Hoisted, each property takes its attribute's precise path: a static one folds into the markup, and `content=` renders through `_attr_content`, whose reasons gate on what selects the content.

Check: `pnpm run compile -- -o html <file>` on `<define/one><em>one ${input.title}</em></define><define/two><strong>two ${input.title}</strong></define><div ...{ content: input.which ? one : two }/>` writes `d: input.title` unguarded, `_resume_branch` unguarded and a `_script`; the same tag as `<div content=(input.which ? one : two)/>` writes `d: ($wi__input_which) && input.title`, a guarded `_resume_branch` and no `_script`. For the static case, `<div ...{ "data-a": "1" }>hi</div>` emits `_attrs(...)`, `_el_resume(...)` and `_script(...)` where `<div data-a="1">hi</div>` emits a single `_html(...)`; in-tree, `grep -n _el_resume packages/runtime-tags/src/__tests__/fixtures/controllable-select-dynamic-spread/__snapshots__/html.bundle.js`.
