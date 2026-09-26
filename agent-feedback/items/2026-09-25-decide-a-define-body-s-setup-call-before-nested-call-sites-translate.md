---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › translate.exit
---

# Decide a `<define>` body's setup call before nested call sites translate

The setup callback `translate.exit` hands to `knownTagTranslateDOM` for a `<define>` call emits `$Foo_content__setup._(childScope, owner)` only if `signalHasStatements(getSignal(definedBodySection, undefined))` holds at that moment. A recursive call nested inside the body translates before the body's later statements exist, so when an event handler follows the recursive call, every nested instance renders without its handler in CSR and in client-created branches; only the outermost call gets it. Direction: decide the body's setup emptiness once in analyze (the static part of `signalHasStatements`: `sectionHasSetupStatements`, `referencedClosures`, `hoistedTo`) and read that fact both at call sites and where `core/define.ts › translate.exit` builds `_child_setup`, with an internal error if the built setup disagrees.

Check: `pnpm run compile -- -o dom -d` on `<define/Foo|{ n }|><if=n><Foo n=n - 1/></if><button onClick() { console.log(n) }>${n}</button></define><Foo n=2/>` gives `const $if_content__setup = $if_content__n;` with no `$Foo_content__setup._(...)` call, while `$setup` has one. Move the `<button>` above the `<if>` and `$if_content__setup` calls `$Foo_content__setup._`.
