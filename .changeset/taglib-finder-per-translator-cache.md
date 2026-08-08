---
"@marko/compiler": patch
---

The taglib finder cache is now keyed per translator, so a process compiling with both the Marko 5 and Marko 6 translators (e.g. a language server over a mixed workspace) no longer lets whichever translator runs first freeze tag discovery for the other.
