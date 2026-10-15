---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeProp
---

# Drop the dead unserializable diagnostic in `writeProp`'s default branch

`writeProp` switches on `typeof val` and covers every type but `"undefined"`, so its `default` branch only ever sees `undefined`. It calls `MARKO_DEBUG && throwUnserializable(state, val, parent, accessor)`, but `throwUnserializable` does nothing when its cause is `undefined`, so the call is dead in every build. Return `false` directly (or route the case through `State.writeUnserializable` if a value can ever reach it), so the branch reads as what it does.

Check: in `throwUnserializable`, the whole body sits under `if (cause !== undefined)`; `writeProp`'s switch lists `string`, `number`, `boolean`, `bigint`, `symbol`, `function` and `object`.
