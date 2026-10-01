---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/html/serializer.ts › trackChannel
---

# Let lazy content read a value that lazy content nested in it serialized first

A value is owned by the ready channel that first serializes it, and a channel can only read values from itself, its ancestors or the main stream (`trackChannel`). Lazy content nested in other lazy content often serializes first, since it comes earlier in the stream or settles in the same pass. When the parent then serializes the same object, the channel can't reach it: debug renders abort with "Unable to serialize a value shared between independently lazy loaded content", and optimized renders drop the value. Within a pass, `Chunk.flushReadyScripts` and `Chunk.consume` order lazy data by stream position, not by channel depth. So ordering alone can't fix it: the descendant may claim the value in an earlier pass. This is the ancestor/descendant case of "Share a value between sibling lazy tags through their common parent" (`2026-09-30-share-a-value-between-sibling-lazy-tags-through-their-common-parent.md`). The same direction covers both: a value a channel can't reach is written by the nearest channel both can read, here the parent itself.

Check: a fixture with `child.marko` = `import { resolveAfter } from "../../utils/resolve";`, `export interface Input { shared: { n: number } }`, `<await|v| = resolveAfter("child", 1)><let/count=0/><button.child onClick() { count += Object.keys(input.shared).length }>${count}</button></await>`; `parent.marko` = `import { resolveAfter } from "../../utils/resolve";`, `import Child from "./child.marko" with { load: "render" }`, `static const cache = { n: 1 };`, `<Child shared=cache/>`, `<await|v| = resolveAfter("parent", 1)><const/shared=cache/><let/count=0/><button.parent onClick() { count += Object.keys(shared).length }>${count}</button></await>`; `template.marko` = `import Parent from "./parent.marko" with { load: "render" }`, `<Parent/>`; and `test.ts` with `equivalent: false`, steps `[{}, wait]`. The debug SSR test fails with the error above.
