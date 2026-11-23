---
"@marko/runtime-tags": patch
---

A tag imported with a `load` trigger and rendered through a dynamic tag (`<${show ? Child : null}/>`) now waits for its trigger on a client render, as the tag written directly does, instead of loading as soon as it renders.
