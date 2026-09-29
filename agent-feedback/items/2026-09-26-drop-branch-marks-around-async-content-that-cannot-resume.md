---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › _try
---

# Drop branch marks around async `<try>` content that cannot resume

`_try` in `html/writer.ts` keeps its BranchStart/BranchEnd marks whenever its body went async (`chunk !== $chunk`), because the start mark is applied at the try's render end, before nested async content settles and shows whether it resumes. A body built only from native tags and core tags whose sections carry no serialize reason can never resume, yet still pays for the marks, even on a page that ships no client code. `_await` no longer does this: its visit waits in `AsyncContent` until something under it resumes, but a try's start mark sits in a chunk that may flush before then. Direction: record in analyze whether a body's section tree holds a custom or dynamic tag or any serialize reason, and pass that to the writer so it drops the async term when nothing below can resume.

Check: render `<try><@catch|e|>${e}</@catch><await=resolveAfter(1, 1)><span>static</span></await></try>` with nothing else on the page; its `writes.html` wraps the body in `<!--M_[-->` and `<!--M_]` though the page ships no client code.
