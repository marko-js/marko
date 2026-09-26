---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/native-tag.ts › assertDetachedChildrenNotResumed
---

# Reject the client work that still reaches inside `<template>`, `<iframe>` and `<noscript>`

`assertDetachedChildrenNotResumed` rejects DOM bindings created in these bodies with a state or forced serialize reason, but three shapes still need nodes the client cannot reach. A custom tag that resumes on its own (`<template><my-counter/></template>`) gives the parent's `#childScope` binding no reason, so it compiles and its markers land in the template's `content`. A lone control-flow child reuses the element's own binding through the only-child optimization, so a binding the element created for its own attributes falls outside the body's uid window. Param-only content (`<template><i>${input.x}</i></template>`) is left legal because server-only renders of it work, yet its DOM walk enters the template and a client render crashes; a maintainer should decide whether that compiles. Direction: fold the child program's `hasResumes` into the check, and either skip the only-child optimization under these elements or test its claimed binding.

Check: `tags/my-counter.marko` = `<let/c=0><button onClick() { c++ }>${c}</button>` and template `<template><my-counter/></template><my-counter/>` with steps `[{}, click]`: ssr throws `reading '1click'`, csr throws `reading 'data'`. ``<let/n=1><template id=`a${n}`><if=n % 2><b>odd</b></if></template><button onClick() { n++ }>${n}</button>`` with steps `[{}, click, click]`: ssr throws `reading 'getAttribute'`. `<template><i>${input.x}</i></template>` with steps `[{ x: 1 }]`: csr throws `reading 'data'` in `_text`.
