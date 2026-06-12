---
"marko": patch
"@marko/runtime-tags": patch
"@marko/compiler": patch
---

Add compiler entry compilation and native asset handling for bundler integrations.

- `entry: "page" | "load"` compiles a template as a top level page entry or a lazily loaded entry, replacing the deprecated `output: "hydrate"`.
- `linkAssets: { runtime, onAsset }` connects the bundler: `onAsset(kind, file, id)` is called for every discovered page and load entry, and `runtime` names a module whose `flush` function resolves an asset id into the HTML for its tags while rendering.

With `linkAssets` configured the server tracks the assets needed by each page, writing their script tags into the streamed HTML (at the end of `<head>` when rendered, otherwise before the first flush).
