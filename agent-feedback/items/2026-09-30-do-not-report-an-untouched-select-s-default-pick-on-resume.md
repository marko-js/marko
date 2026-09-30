---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/controllable.ts › hasSelectChanged
---

# Do not report an untouched select's default pick as a change on resume

A `<select valueChange=…>` with no `value` is controlled as `""`, so no option is `defaultSelected` and the browser selects the first one. On resume `hasSelectChanged` compares each option's `selected` with `defaultSelected`, reads that automatic pick as a change made before resume, and calls `valueChange` with the first option's value although nobody touched the select. The client render never does, so the resumed page renders state the client render cannot reach. When no option of a single select is `defaultSelected`, treat the browser's first-enabled-option pick as unchanged.

Check: remove `skip_settled` from `fixtures/dynamic-tag-native-variants/test.ts` and run `pnpm test -- --grep "runtime-tags/translator dynamic-tag-native-variants "`; `settled` fails, and `render-ssr.md` logs `INSERT: div > a` (the stray `valueChange("a")`) where the client render swaps to `<br>`.
