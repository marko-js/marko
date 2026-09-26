---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/visitors/program/dom.ts › translate.exit
---

# Declare `$setup` when a hoisted root's setup signal is empty

For a root section with `hoistedTo` set, `getSetup` (`util/signals.ts`) always returns a signal and `writeSignal` skips it when it has no statements, but `translate.exit` emits its empty `$setup` fallback only when `!setup`. `visitors/program/index.ts › analyze.exit` also leaves `setupEmpty` unset for hoisted roots, so `_template(...)` names a `$setup` nothing declares and the module throws a ReferenceError at load. Direction: emit the fallback when `!written.has(setup)`, raise an internal error whenever the program would reference an undeclared `$setup`, and add a fixture for sibling branches hoisting through a root with no setup work.

Check: `pnpm run compile -- -o dom -d` on `<if=input.show><div/el/></if><if=input.y><button onClick() { el() }/></if>` ends with `_template("…", $template, $walks, $setup, $input)` and declares no `$setup`.
