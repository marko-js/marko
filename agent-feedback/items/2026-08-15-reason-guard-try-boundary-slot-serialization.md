---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › _try
---

# Reason-guard `<try>` boundary slot serialization

The `CatchContent`/`PlaceholderContent` slots serialize on every document render of the boundary: `_try`'s `writeScope` has no serialize-reason guard (translate gates only statically via `getSectionRegisterReasons`). A dynamic reason that evaluates false at runtime still ships the slot, and the cost grew now that scriptless pages inline the template (`_._.content(tpl, _(scope))`) instead of an id ref. The value cannot simply be reason-nulled because `_try` also invokes it server-side for error UI, so the guard must apply inside serialization (e.g. `registerAccess` honoring a runtime guard).

Check: a `<try>` whose register reason rides a source guard that stays false still serializes the slot.
