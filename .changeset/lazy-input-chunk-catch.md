---
"@marko/runtime-tags": patch
---

Route a failed lazy input-signal chunk load to the surrounding `<try>@catch` boundary. Previously, when a lazy tag's input chunk rejected on its own (a network-level partial failure, e.g. deploy skew) while its setup chunk resolved, the branch was cloned but never inserted: the `@placeholder` stayed shown forever and `@catch` never fired. The rejection now drives the same boundary as a setup failure.
