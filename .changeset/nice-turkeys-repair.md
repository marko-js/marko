---
"marko": minor
---

Add the `Marko.ComponentOf<Module>` type: the component a module exports (a class's instance, or an object), such as a split component's file, so that a declaration can name a template's component with Marko's public types alone: `export type Component = Marko.ComponentOf<typeof import("./component")>`.
