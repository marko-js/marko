---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › _resume_locals
---

# Flush a `_resume_locals` scope only once its registered function is serialized

`_resume_locals` calls `writeScope` eagerly, so the attr-tag loop params it captures set `flushScopes` and ride the resume payload on every SSR render even when the handler is never serialized. The reachable shape is a runtime-conditional consumer — parent `<my-menu><for|foo| of=[…]><@item onClick(ev){…}>` with a child that spreads `...item` only under `<if=input.enabled>` — where `_resume_locals(fn, id, {"foo/5": foo})` still runs per iteration and `flushSerializer` writes those props with `enabled` false (a statically unused handler is already elided). The serializer resolves registered-value scopes lazily (`writeRegistered` › `trackScope` in `packages/runtime-tags/src/html/serializer.ts`), so the fix is a channel that flushes a scope's props only when the registered value is written — serializer surgery, not a helper tweak.

Check: SSR that template with `enabled=false` and look for the `foo` scope in the payload.
