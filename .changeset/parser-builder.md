---
"@marko/compiler": patch
---

Parse templates about a quarter faster: the parser builds the Marko AST without a NodePath per tag (only the tags a taglib parse hook visits get one, once the tree is built).
