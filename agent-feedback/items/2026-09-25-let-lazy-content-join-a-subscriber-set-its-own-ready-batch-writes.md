---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/html/writer.ts › _subscribe
---

# Let lazy content join a subscriber set its own ready batch writes

`_subscribe` takes the late path (a `…/subscribe` resume effect that runs the closure's consumer if its owner changed it, then subscribes) for every changeable closure whenever `$chunk.serializeState.readyId` is set, even when the owner renders in the same ready channel and its subscriber set is still unwritten. That owner resumes in the same batch as the subscriber, so that effect never has a change to apply; adding the subscriber to the set, as the main stream does for an unwritten set, would drop one effect (registration id and scope id) per subscriber per closure. The guard needs the set's channel: an unwritten set in an ancestor channel must keep the late path, since a lazy subscriber placed in it would miss a change made before its channel fills. One direction is to let the serializer answer whether a value will be written in the current channel.

Check: a fixture whose `template.marko` is `import Page from "./page.marko" with { load: "render" }` then `<Page/>`, whose `page.marko` is `<let/value=1>`, `<button onClick() { value++ }>inc</button>` and `<child>${value}</child>`, and whose `tags/child.marko` is `<${input.content}/>`: its optimized `writes.html` ready batch writes the subscriber set as `new Set` plus the effect `a0 4`. Without `with { load: "render" }` the set is written as `new Set([_(4)])` and no such effect.
