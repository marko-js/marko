---
"@marko/runtime-tags": patch
---

Fix two resume bugs in control-flow branches: a client-created `<if>`/`<for>`/dynamic-tag branch could be orphaned from the branch tree (leaking effect/`onDestroy` cleanup) when its owner was driven only by input, and a bare `<await>` (no enclosing `<try>`) could throw a `HierarchyRequestError` when its promise re-resolved after resume.

The closest branch for a control-flow owner is now derived during resume from the branch markers it already emits — nested under its enclosing stateful branch the same way branches link to their parents — so no extra closest-branch id is serialized.
