---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/await.ts › translate.html.exit
---

# Force the `<await>` resume marker under persisted builds regardless of body serialize reason

The `_await` serialize marker arg is `getSerializeGuard(section, bodySection?.serializeReason, true)`, which can emit `0` when the body has no serialize reason of its own. Persisted patches pair the await body through the `BranchStart`/`BranchEnd` resume markers plus the runtime's boundary patch link, so a marker-less body could resume without its owner's `BranchScopes` link and a later patch's `PatchChild` entry would miss (rejecting to navigation). Every current persisted fixture forces the reason via the capture path (the body always holds a patch capture), so this is unverified; if it reproduces, the marker guard should ride the root scope reason like `getExprIfSerialized`'s capture-path rule.

Check: a persisted `<await>` whose body is fully static (`<await|v|=p>done</await>`); inspect the document render for the branch markers.
