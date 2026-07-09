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
