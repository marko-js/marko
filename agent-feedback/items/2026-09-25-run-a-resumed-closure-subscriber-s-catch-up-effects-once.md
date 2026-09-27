---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/dom/signals.ts › _closure_get
---

# Run a resumed closure subscriber's catch-up Effects once

When a late closure subscriber resumes after its owner changed on the client, the server-registered Effects of its content run first (HTML output writes a section's `…/subscribe` resume effect with its `_scope` write, after the `_script` registrations of the section and everything inside it), then the catch-up render that `_closure_get`'s resume registration queues re-queues the same `_script` Effects for the same resumed scopes, so each runs twice. Dropping the catch-up's Effects for resumed scopes afterwards is unsafe: its render already ran `$signalReset`, aborting the signal the first run created, so a `$signal` script would lose it without re-running. Direction: write the subscribe resume effect before the section's content (at section start), render the catch-up synchronously there, and keep only its Effects for scopes it created, so resumed scopes run once from their registrations and see the caught-up DOM; the kept Effects must not run with `isResuming` set, or `_attr_input_value_script` resets a controlled value to `el.defaultValue`.

Check: `pnpm test -- --grep "runtime-tags/translator await-closure-changed-by-script "` and read the flush step: `__snapshots__/render-ssr.debug.md` logs `LOG "e5"` twice, `render-csr.debug.md` once.
