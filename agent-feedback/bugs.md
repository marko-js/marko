# Suspected Bugs

Out-of-scope defects noticed while working on something else. Format and rules: [README.md](README.md).

## Spoofed property match can misdirect dynamic style updates

`packages/runtime-tags/src/dom/dom.ts:137` | 2026-07-02 | impact:low | effort:med

`styleRuleItem` locates an existing declaration with `text.indexOf("{" + name + ":")` / `text.indexOf(";" + name + ":")`. A `{` inside an escaped value is stored as `\{`, but the raw `{` character is still present, so a user-supplied value that literally contains `{--<generated name>:` (names are guessable in optimized builds, eg `--a_0`) makes `indexOf` match inside another declaration's value. The subsequent splice then rewrites that value instead of the real declaration: the targeted update is silently lost and the host declaration's tail is replaced. Escaping keeps everything confined to the shell rule (no raw `;`/`}`/`<` can be injected), so this is corruption of the component's own custom properties, not a style/HTML injection escape. A fix could hex-escape `{` (`\7B `) the same way `;`/`<` are hex escaped in `escapeStyleValue` (`packages/runtime-tags/src/common/helpers.ts:64`), so a raw `{` can only ever be the rule opener.
