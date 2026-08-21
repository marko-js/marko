---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/signals.ts › writeHTMLResumeStatements
---

# Serialize only the accessed properties of scope values

Scope writes serialize whole values even when analysis knows exactly which properties are read: `<let/user={ name: "x", extra: 1 }/>` with a handler reassigning `user` and a placeholder reading only `user.name` emits `_scope($scope0_id, { user })`, shipping `extra` over the wire though nothing reads it. `propertyAliases` already records the accessed property set per binding, and `excludeProperties` proves the machinery for property-level exclusions exists. When every read of a binding is a statically-known property chain and the value never escapes whole (no spread, whole-value alias, or dynamic member access — all visible in the binding's reads/aliases), the serialized value could be projected to the accessed properties. Wire-size win scales with how much wider input/state objects are than the slice a template touches.

Check: `pnpm run compile -- -o html -d` on `<let/user={ name: "x", extra: 1 }/><button onClick() { user = { ...user }; }>b</button><div>${user.name}</div>` shows `_scope($scope0_id, { user })` serializing the whole object.
