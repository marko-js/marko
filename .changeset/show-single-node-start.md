---
"@marko/runtime-tags": patch
---

Drop the range markers a client-rendered `<show>` does not need: a body of one element gets no start marker, and a body ending in a static element no end marker. Each such template loses a `<!>`, a walk step and an argument per marker, and each instance a cloned comment.
