---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › forBranches
---

# Range-encode the branch ids packed into a single-node loop's BranchEnd marker

For a `singleNode` `<for>`, `forBranches` builds one string (`flushBranchIds = " " + branchId + flushBranchIds`) that `writeBranchEnd` emits as a single `BranchEndSingleNode` (`|`/`}`) comment — e.g. `<!--M_}1 a 4 3 2-->` — so a loop body with a fixed scope count per item spends ~4.5 SSR bytes per row on a constant-stride descending run. A run token (`start~end[:stride]`) with an explicit-id fallback collapses it to a constant. The decoder is `createVisitBranches` in `dom/resume.ts` (`while ((branchId = +lastToken))`), and expansion must preserve order because the single-node path walks `previousSibling` and depends on `endedBranches.reverse()`; the `]`/`)` variants already spread one id per `BranchStart` and are unaffected. Weigh the decoder's client bytes first — the adjacent comment there budgets ~18 B brotli.

Check: SSR a 2000-row `<for>` and compare the `<!--M_}…-->` length before and after.
