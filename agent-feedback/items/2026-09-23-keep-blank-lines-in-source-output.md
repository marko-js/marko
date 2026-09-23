---
type: cleanup
impact: low
effort: med
site: patches/@babel__generator@7.29.7.patch › MarkoTagBody
---

# Keep blank lines between tags in source output

The source printer joins a body's children with single newlines, so every blank line the author left between tags is dropped: `output: "source"` turns `<let/a=1/>\n\n<div/>` into `<let/a=1/>\n<div/>`. Type-stripped output is the main consumer, eg the docs site's JavaScript variant of a typed code block, which loses the grouping its TypeScript variant keeps. The nodes carry their source locations, so one blank line can be kept wherever the source had at least one between two children, the way prettier preserves them.

Check: `compileSync("<let/a=1/>\n\n<div/>", "t.marko", { output: "source" }).code` is `<let/a=1/>\n<div/>`; expect the blank line kept.
