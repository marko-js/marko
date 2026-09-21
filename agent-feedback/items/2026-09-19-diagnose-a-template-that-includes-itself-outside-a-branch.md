---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/structure.ts › resolveRef
---

# Diagnose a template that includes itself outside a branch

A template whose root renders itself unconditionally (`tags/rec/index.marko`
containing `<div><rec/></div>`) compiles, but the emitted template and walk
composition reference their own binding while it initializes:
`const $template$1 = ((_w0) => `<div>${_w0}</div>`)($template$1)`, a
`ReferenceError: Cannot access '$template$1' before initialization` at module
load in both outputs. Such a template never terminates at render either, so a
compile diagnostic on the self-including tag would be the right outcome; the
patch shell builder (`buildShells`) already skips the branch without a shell.

Check: a fixture whose page renders `<if=input.show><rec/></if>` with the
`rec` tag above, `steps: [{ show: false }]`; the ssr step throws the
`ReferenceError` before rendering.
