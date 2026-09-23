---
"@marko/runtime-tags": patch
---

A server render no longer reads the wrong value, or throws, through a member of a tag variable renamed for sharing its name (`<div><const/x/>${x.n}</div><div><const/x/>${x.n}</div>`).
