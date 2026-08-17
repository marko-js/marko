---
"@marko/runtime-tags": patch
---

Fix a streamed `<await>` whose body arrives before the page's entry module has run (a slow bundle, or a promise that settles right after its `@placeholder` flushed) throwing `Cannot read properties of null (reading 'insertBefore')` during resume when the placeholder held stateful content. The reorder runtime now parks the swapped-out placeholder in a detached holder instead of removing its nodes one by one, so markers the walker already collected still resolve.
