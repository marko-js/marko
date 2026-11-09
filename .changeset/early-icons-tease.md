---
"@marko/compiler": patch
---

Read the project's `package.json` through the `fileSystem` option when discovering taglibs, and read it again after `taglib.clearCaches()`, so a virtual or tracking file system sees it and a long-running dev process picks up new dependencies. Taglib JSON files are now read with a string encoding, like every other read, so a file system that only accepts a string encoding can load them.
