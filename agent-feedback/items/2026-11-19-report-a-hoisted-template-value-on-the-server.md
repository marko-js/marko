---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/common/errors.ts › _assert_hoist
---

# Report a hoisted template value on the server

`_assert_hoist` rejects a hoisted tag variable whose value is not a function, but a template is a function in the html runtime and an object in the dom runtime. So a hoisted `<const>` whose value is a template passes on the server, and only a client render throws "Hoisted values must be functions". `core/const.ts` › `assertNoHoistedTagName` rejects it at compile time only where the value is certainly not a function and the read is a whole tag name. Report it in both runtimes.

Check: a fixture with `<${Tag} title="hoisted"/>` above `<const/Tag=(input.renderer || Child)/>` (`Child` a `.marko` default import), steps `[{}]` and `error_dom: true` writes a `csr.error.debug.txt` and no `ssr.error.debug.txt`.
