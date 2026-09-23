---
"@marko/compiler": patch
---

End a compiled template's source map `sourceRoot` with a path separator, so Node's `--enable-source-maps` and URL-based consumers such as browser devtools resolve the original `.marko` file instead of a path with the directory and file name run together.
