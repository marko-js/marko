---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/effect.ts › migrate
---

# Name `<script>` in the `<effect>` shape errors, which preempt its deprecation

The `migrate` hook runs five shape asserts before `diagnosticDeprecate`, so a malformed `<effect>` throws and "The 'effect' tag has been replaced by the 'script' tag." is never recorded — not in `meta.diagnostics` and not in an editor, which is otherwise the one surface that shows it, since `@marko/language-server` maps a deprecation to a warning severity. The thrown error instead presents `<effect>` as a current core tag and links it to `https://markojs.com/docs/reference/core-tag`, a page whose headings never mention `<effect>` — `packages/runtime-tags/src/translator/util/assert.ts` maps it to the empty anchor for exactly that reason — so the message leads nowhere. The likeliest malformed shape is the one the replacement accepts: `<effect> console.log(count) </effect>` fails on body content while the byte-identical body under `<script>` compiles, so the one-word rename that clears the error is the same rename the deprecation would have asked for, and nothing says so. Record the deprecation before the asserts — its `fix()` already rewrites the tag to `<script>` and is applied unconditionally when no `applyFixes` map is supplied — or have `<effect>`'s shape errors name `<script>` as the replacement; the `error-effect-body-content` fixture and its snapshots need regenerating either way.

Check: `pnpm run compile -- -o html -d /abs/eff.marko`, where `eff.marko` is `<let/count=0 />` followed by an `<effect>` whose body is `console.log(count);`, reports ``The [`<effect>`](https://markojs.com/docs/reference/core-tag) tag does not support body content.`` and says nothing about the deprecation or about `<script>`; the same file with `script` in place of `effect` compiles.
