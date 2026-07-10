---
"@marko/runtime-tags": patch
---

Fix style object values containing `;` injecting extra declarations on SSR (`style={color: c}` with `c = "red;background:blue"`) that the granular client updates could never remove. `stringifyStyleObject` now applies the same escaping guarantee the `<style>` tag path already relies on.
