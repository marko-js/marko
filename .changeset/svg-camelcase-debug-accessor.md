---
"@marko/runtime-tags": patch
---

Fix a dev-mode (`MARKO_DEBUG`) crash when a camelCase SVG or MathML element (`<linearGradient>`, `<clipPath>`, `<feGaussianBlur>`, …) carries a tag variable, dynamic attribute, event handler, or a lone control-flow child. The compiler wrote the element's debug scope accessor using the source-case tag name, while the DOM walker looks the node up by its lowercased `tagName`, so the accessor never resolved and mounting or hydrating threw. The debug accessor name is now lowercased to match the walker. Optimized builds use numeric accessors and were unaffected.
