---
"marko": patch
---

Only fold a Class parent's `on-x(...)` bindings into a dynamic tag child's input when the child is a Tags API component. Class API children rendered through a dynamic tag were also receiving the injected `onX` handler, which leaked into the DOM as a serialized `on-click="function () {...}"` attribute when the child spread its input onto a native element.
