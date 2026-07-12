# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Dynamic style values inside `<for>`/`<if>` are undocumented but load-bearing

`src/translator/core/style.ts:113` | 2026-07-09 | impact:low | effort:low

A `<style>` with `${...}` interpolations placed inside a `<for>` body gives
each iteration its own values (the emitted `<style class=sN>.sN~*{--x:v}`
shell precedes that iteration's siblings, and the latest preceding stylesheet
wins the tie), which is exactly what per-item styling wants — verified live
with 24 loop iterations resolving 24 distinct values. Nothing in the styling
docs says the feature composes with control flow, and two real traps sit next
to it: the emitted style ELEMENTS interleave with the loop's content, so
`nth-child` selectors over the siblings silently skip half their targets (use
`nth-of-type`), and any higher-specificity rule using the `animation:`
shorthand resets an interpolated `animation-delay` because the shorthand
implicitly sets delay to `0s`. A docs example of a dynamic style in a loop,
plus a note about element interleaving, would have saved the debugging session.
