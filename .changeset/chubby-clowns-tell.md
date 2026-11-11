---
"marko": minor
---

Read only the taglib declarations that change class API output (an attribute's `target-property`, `preserve-name`, `remove-dashes` and `default-value`, attribute patterns, and nested tags), and drop the unknown-attribute and required-attribute compile errors, which TypeScript covers. `marko/src/taglib` no longer exposes `loader`, `finder` or `registerFromFile`, and the legacy compiler API drops `taglibLoader`/`taglibFinder`. The undocumented `htmlType: "custom-element"` taglib setting is no longer read, nor handled by the runtime. A declared dashed attribute's `default-value` now reaches the camelCased property its value would. The core taglib drops its editor-only completion metadata.
