---
"@marko/compiler": patch
---

Stop the source printer reindenting the body of a whitespace-preserving tag (`pre`, `script`, `style`, `textarea`), which rewrote user content on every `output: "source"` / `markoc --migrate` pass.
