---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/known-tag.ts › finalizeKnownTagRenders
---

# Register a lazy child's param-named content per caller

`finalizeKnownTagRenders` skips a known tag loaded with `load`, since the child's load entry (`visitors/program/index.ts`, `isLoadEntry`) reads `m.$renders` and so registers every body the child's input may name, whatever its callers pass. A caller passing only strings still ships those bodies in the lazy chunk. The caller could instead register exactly the content it may name without joining the child's chunk, as lazy tags already load: a dynamic import with explicit member reads (`buildLoadSetupVirtualModule` in `visitors/tag/custom-tag.ts`) that finishes before the child's ready channel resumes. The load entry would then keep `$renders` only for callers the compiler cannot see.

Check: `resume-register-lazy-tag` passes `type=count % 2 ? "h2" : "h1"`, yet its `dom.bundle.js` keeps `$inputtype_content2` in `$renders`.
