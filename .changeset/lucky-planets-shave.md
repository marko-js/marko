---
"marko": patch
---

Persisted register entry builds now import child template render graphs
(template, walks, setup, value setters) from the child's `?register`
module instead of its main module. Previously the lazy register/update
chunks' use of those main-module exports pinned every child template's
otherwise tree-shakeable render graph into the eager hydration chunks;
now slim persisted mains keep only what hydration needs and the graphs
ride the first persisted navigation's chunk load.
