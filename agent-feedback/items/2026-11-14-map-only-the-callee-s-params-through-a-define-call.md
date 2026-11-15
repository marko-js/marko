---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/reasons.ts › mapParamReason
---

# Map only the callee's params through a `<define>` call's expressions

`mapParamReason` picks the params it dereferences through a call site's `KnownExprs` by program (`param.section.program === program`). For a `<define>` body called in its own template, that also takes the template params the body reads as closures. The call's `KnownExprs` describe only the body's params, so `getKnownExprsAt` finds no expression for those and the reason is dropped. In a tag whose caller toggles `show` from state, `<define/Label|{ getLabel }|><if=input.show>${getLabel()}</if></define><Label getLabel=(() => input.label)/>` writes `getLabel` under `input.show`'s guard, but the arrow gets no `_resume` registration. Debug SSR then throws "Unable to serialize", and production throws `$scope._.d is not a function` on the toggle. Direction: map only params whose alias root is the callee section's params binding and keep the rest as they are. `readersOf` (`solve-reasons.ts`) and `getRendererReason` (`sections.ts`) both reach it this way.

Check: `pnpm run compile -- -o html -d` on `<define/Foo|{ fn }|><if=input.show>${fn()}</if></define><Foo fn=(() => input.label)/>` writes `fn` in the body's scope under `$wi__input_show`, while `fn: () => input.label` has no `_resume`.
