# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Support numeric literal keys in destructure patterns

`src/translator/util/references.ts:660` | 2026-07-09 | impact:low | effort:low

`{ 0: first } = value` in a tag variable/param pattern reports "Only
identifier and string literal keys are supported when destructuring." even
though a numeric literal key is statically known. Array patterns already
create numeric string properties (`"0"`, `"1"`), so accepting
`NumericLiteral` keys is likely `key = String(prop.key.value)` plus a
fixture. Left out of the computed-key diagnostic fix (which added that
error) to keep that change error-only.

## Analyze phase models attrs at the post-args param slot unconditionally

`src/translator/util/known-tag.ts:453` | 2026-07-09 | impact:low | effort:low

The analyze pass runs `known[i] = analyzeAttrs(...)` for
`propTree.props[args.length]` whenever that prop exists, while the
translate pass (`writeParamsToSignals`) now only writes the attrs object
into that slot when the tag has attributes, attribute tags, or body
content (otherwise the slot is applied as `undefined`, matching the
runtime params applier). For an args-form tag with no attrs the analyze
side may therefore register setup expressions or serialization reasons
for a param that never receives input. Cannot produce wrong output, only
potential over-serialization; worth aligning the analyze condition with
the translate condition and checking fixture `writes.html` diffs for
size wins.
