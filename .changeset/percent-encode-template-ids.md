---
"@marko/compiler": patch
---

Stop folding unusual characters in template ids to `/`, which let distinct paths collide (`foo+bar.marko` and `foo/bar.marko` produced one id, silently cross-wiring the two templates in the resume registry). Only characters unsafe in a string/URL/filesystem context are percent-encoded now; benign punctuation such as `+`, `[`, `(` and `@` passes through literally. Also documents the `getTemplateId` config override.
