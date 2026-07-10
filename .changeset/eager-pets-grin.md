---
"@marko/runtime-tags": minor
---

Support returning an object from the `<lifecycle>` tag's `onMount` handler. The returned properties are assigned onto the lifecycle instance, making values created at mount (element references, third party instances, etc.) available as `this` properties in `onUpdate` and `onDestroy`.
