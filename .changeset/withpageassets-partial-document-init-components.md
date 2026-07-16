---
"marko": patch
---

Fix client hydration for page entries that render a partial document (no `<body>`). Such entries never triggered the `<init-components>` tag a `<body>` injects, so no hydration payload was serialized and components could not resume. `withPageAssets` now emits it for the top-level entry.
