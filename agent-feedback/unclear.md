# Unclear Code & Docs

Things that were hard to understand, and what would have clarified them. Format and rules: [README.md](README.md).

## Document why side-effecting runtime factories are safely marked pure

`packages/runtime-tags/src/translator/util/runtime.ts:21` | 2026-07-02 | impact:low | effort:low

`pureDOMFunctions` includes `_template`, `_await_promise`, `_await_content`, `_load_template`, and `_load_setup`, yet those factories have observable side effects at call time: `_template` calls `_resume(id, renderer)` (`packages/runtime-tags/src/dom/template.ts:42`) and the await/load factories call `_enable_catch()`/`enableBranches()` latches. The annotations are sound only because of a non-obvious invariant: registration is needed exactly when the value can be referenced by a serialized register id, which requires the value to be reachable in the client module graph anyway, and the enable latches are re-triggered by whichever construct survives tree-shaking. Two independent reviews flagged these as possibly-unsound; a comment on `pureDOMFunctions` stating the invariant would prevent repeated re-derivation.

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

## Resume marker protocol has no written spec; reverse-engineering it burns hours

`packages/runtime-tags/src/html/writer.ts:1` | 2026-07-10 | impact:med | effort:med

The comment-marker protocol that resume depends on lives only in code spread
across `html/writer.ts`, `html/inlined-runtimes[.debug].ts`, `dom/resume.ts`,
and `translator/util/walks.ts`. Undocumented facts a contributor must
re-derive: marker grammar (`<runtimeId><renderId><symbol><scopeId>` then
` <accessor>` and optional ids), which `ResumeSymbol` each node kind expects,
when a `<!>` separator is obligatory (the `ContentType` cases in
`translator/visitors/placeholder.ts` — several resume bugs in `bugs.md` are
exactly missed separator obligations), and the `render.b` lazy-stream
registration grammar emitted by the serializer. A `docs/`-level or in-tree
spec (even 50 lines in `dom/resume.ts`'s header) would make the class of
"SSR empty value / sibling claiming" bugs reviewable instead of empirical.

## Serializer lossiness is undocumented and mostly silent

`packages/runtime-tags/src/html/serializer.ts:834` | 2026-07-10 | impact:med | effort:med

What survives SSR→client serialization is discoverable only by reading
`writeUnknownObject` and friends: `Symbol` descriptions are preserved but
identity/registration is not; arrays drop their own non-index properties;
symbol-keyed props are skipped everywhere; `RegExp.lastIndex` resets;
`DataView`, `BigInt64Array`, `BigUint64Array` are unserializable even though
they sit in `KNOWN_FUNCTIONS`. In production all of these drop silently; in
debug, "Unable to serialize" names the accessor but not the reason. A
lossiness matrix in the docs (or a `serialize-reasons.ts` doc block) plus
reason strings in the debug error would turn silent data loss into a
diagnosable event.
