---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/util/signals.ts › getContentClosureValues
---

# Write the owner link for every content-closure level `_content_resume` walks

Registered content with closure levels is written as `_._[id](_(owner), …levels)`, and `dom/renderer.ts` › `_content_resume` runs while the payload is still being evaluated, walking `scope = scope[AccessorProp.Owner]` once per level. `getContentClosureValues` omits a level's `_` when that owner's serialize reason is static, relying on the scope fill to supply it, but fills are applied only after evaluation, so the walk reaches `undefined` and resume throws. Direction: always write `_` for non-final levels (wire bytes only, no runtime change), plus a MARKO_DEBUG assert in `_content_resume` that each level's scope exists.

Check: fixture with `tags/card.marko` = `<let/open=false><button#toggle onClick() { open = !open }>toggle</button><if=open><${input.content}/></if>`, `tags/heading.marko` = `<let/count=0/><if=input.show><button#inc onClick() { count++ }>${count}</button><${input.type}>depth ${input.depth}</></if>`, template `import Card from "./tags/card.marko";` + `<heading type=Card depth=0 show/>`, steps `[{}, clickToggle]`: `ssr` fails with `TypeError: Cannot use 'in' operator to search for 'input_depth' in undefined` from `_content_resume`. The failing run writes no `writes.debug.html`; rendering the template through `createServerRunner` (`packages/runtime-tags/src/__tests__/utils/bundle.ts`, run with `node --experimental-vm-modules -r ~ts`) shows a payload with `_._["…heading.marko_2*content"](_(3),{input_depth:0},0)` beside scope 3's `{_:_(2)}` fill.
