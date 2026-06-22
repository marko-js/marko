---
"@marko/runtime-tags": patch
---

Fix two resume bugs in control-flow branches: a client-created `<if>`/`<for>`/dynamic-tag branch could be orphaned from the branch tree (leaking effect/`onDestroy` cleanup) when its owner was driven only by input, and a bare `<await>` (no enclosing `<try>`) could throw a `HierarchyRequestError` when its promise re-resolved after resume.

The closest-branch link is now omitted when a branch's contents provably register no cleanup (no `$signal`/`<lifecycle>`, dynamic closure, `<await>`/`<try>`, or custom/dynamic tag), trimming resume data for purely presentational control flow.
