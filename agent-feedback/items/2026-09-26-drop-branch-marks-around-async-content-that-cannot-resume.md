---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › _await
---

# Drop branch marks around async `<await>`/`<try>` content that cannot resume

`_await` (promise path) and `_try` in `html/writer.ts` keep their BranchStart/BranchEnd marks whenever their content went async (`chunk !== $chunk`), because the start mark is committed before nested async content settles and shows whether it resumes. Content built only from native tags and core tags whose sections carry no serialize reason can never resume, yet still pays for the marks, even on a page that ships no client code. Direction: record in analyze whether a body's section tree holds a custom or dynamic tag or any serialize reason, and pass that to the writer so it drops the async term when nothing below can resume.

Check: `packages/runtime-tags/src/__tests__/fixtures/async-nested-resolve-in-order` has no client code, yet its `__snapshots__/writes.html` contains `<!--M_[-->` and `<!--M_]` comments.
