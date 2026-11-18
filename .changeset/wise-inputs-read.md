---
"marko": minor
---

Add the `Marko.ComponentInput<Module>` type: the input of the component a module exports (a class, or an object), such as a split component's file, so that a declaration can state a template's input as its component's with Marko's public types alone: `export type Input = Marko.ComponentInput<typeof import("./component")>`.
