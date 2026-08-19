---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › rendererKey
---

# Shorten the owner-qualified dynamic tag content key in optimized output

`rendererKey` joins a content id and its owner scope id with a space on both runtimes
(`html/writer.ts` mirrors it), so a qualified key is `"a0 1"` where the bare id is `"a0"`.
The separator is only load-bearing in debug: `encodeTemplateId`
(`packages/compiler/src/babel-utils/tags.js`) draws its first character from `n % 53`, which
covers `a-z`, `A-Z` and `$` but never a digit, so in optimized output `ownerScopeId + id` is
already unambiguous and saves a byte per qualified slot. Debug ids are relative paths and can
start with a digit, so they would keep the separator — meaning a build-mode-dependent key
format, which is why this was left alone. Measure first: qualified keys are only ~0.23% of
resume payload (see below), so the win is ~0.1%.

Two owner-elision routes were measured and rejected; do not re-attempt without new evidence.
Eliding the suffix when the owner is the scope holding the slot applies to 4 of 218 serialized
slots (1.8%). Skipping the owner argument entirely for sections with `readsOwner === false`
(482 of 626 sections) is unsound: `createBranch` substitutes `parentScope`, which broke
interop (`Invalid dynamic tag value`), `lazy-tag-load-error` and `await-update-after-resume`;
gating instead on `getSectionRegisterReasons` passes the suite but couples an unrelated
serialization decision to an ownership contract and saves only 66 bytes corpus-wide.

Wire composition of the fixture corpus, for calibration: 48.4% resume script, 15.8% `M_`
walker markers, 36% markup. Within the markers, `<!--M_*n x-->` node references are 1665
occurrences and 11% of all SSR bytes at 13 B each, 9 B of which is fixed comment syntax.

Check: grep `"a0 1"` in `__tests__/fixtures/*/__snapshots__/writes.html`.
