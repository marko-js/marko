---
"@marko/compiler": patch
---

Bundle the compiler with rolldown instead of compiling file-by-file with babel. The published output drops from 54 files to 5 and is 17% smaller; every `exports` entry point and its module shape are unchanged.
