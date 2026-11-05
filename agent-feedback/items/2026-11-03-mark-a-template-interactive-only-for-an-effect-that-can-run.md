---
type: perf
impact: med
effort: med
site: packages/runtime-tags/src/translator/core/script.ts › analyze
---

# Mark a template interactive only for an effect that can run

`<script>` analyze sets `getProgram().node.extra.isInteractive = true` for any `<script>` with a body, and `core/lifecycle.ts` › `analyze` does the same for any `<lifecycle>`, whether or not the section holding it ever renders. A `<define>` body no tag calls never renders, yet its `<script>` makes `builder.build` (`translator/util/entry-builder.ts`) import `init` into the page entry, so a page that resumes nothing ships the resume runtime. This is the program-wide effect following a feature's presence rather than the reason that needs it: derive it where the effect's own reason is known, as `finalizeRegistrations` (`translator/util/module-registrations.ts`) already does for registered functions with `isInteractive ||= !isGuardedReason(reason)`.

Check: a fixture whose `template.marko` is `<div/el/><define/Foo><script>document.body.focus()</script></define><button>b</button>` with `steps: [{}]`; `pnpm run test:update -- --grep "runtime-tags/translator <name> "` writes a `sizes.json` whose `template.marko.page.mjs` is 1431 min / 782 brotli, against 376 / 233 with the `<define>` removed or its body replaced by `<p>x</p>`. `<lifecycle onMount() { document.body.focus() }/>` in place of the `<script>` gives the same 1431 / 782.
