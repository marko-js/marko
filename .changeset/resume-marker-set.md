---
"@marko/runtime-tags": patch
---

Resume single-node branches in linear time. The walk that skips a render's own markers to find a branch's start node tested membership with `indexOf` over every marker in the render, so resuming an N-row list of marker-elided branches cost ~N² identity comparisons — 100M comparisons / 111 ms at N=10,000, versus 10k / 0.6 ms with a set.
