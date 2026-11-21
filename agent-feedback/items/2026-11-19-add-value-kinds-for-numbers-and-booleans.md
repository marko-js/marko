---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › buildLogicalAttr
---

# Add value kinds for numbers and booleans so an attribute writes its known form at compile time

`KIND_FALSY` holds `0` with `false`, `""`, `NaN` and `0n`, and `KIND_SCALAR` holds truthy numbers with `true`, so `getKind`'s `BinaryExpression` arm gives `input.n > 1` (only a boolean) and `input.n - 1` (only a number) the same kinds, and both attributes go through `_attr`'s generic write. Their forms differ and are known: `html/attrs.ts` › `_attr` drops `false` (`isNullishOrFalse`), and `stringifyAttr` writes `true` as the bare name and any number, `0` included, as `name=value`, just as `${0}` shows text where `${false}` renders nothing. Number and boolean bits would let the HTML write `(input.n > 1 ? " hidden" : "")` and `" data-n=" + (input.n - 1)`, the prebuilt form `buildLogicalAttr` already writes for a confident side, and let a text hole tell a value that renders nothing from one that renders `0`. The kinds are cheap, two bits; each reader of `KIND_FALSY` and `KIND_SCALAR` must take the split.

Check: `pnpm run compile -- -o html -d` on `<div hidden=(input.n > 1) data-n=(input.n - 1)/>` writes `_attr("hidden", input.n > 1)` and `_attr("data-n", input.n - 1)`.
