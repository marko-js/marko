---
"@marko/runtime-tags": patch
---

A page whose server output reads many dynamic closures in one section — a layout that renders a long list of components into one content outlet, say — no longer ships output that grows with the square of the number it reads, and no longer overflows the call stack while compiling. The section writes its scope once, subscribes to each closure in its own statement, and resumes under a guard it names once.
