---
"@marko/runtime-tags": patch
---

Fix a Tags API parent that re-renders a Class API child, which renders Tags API content of its own, treating the rest of that update as a fresh render: a `<let>` after the class child followed its initial value instead of keeping its own, and the resumed page threw `Cannot read properties of undefined`. That Tags API content now renders, and runs its effects, as part of the parent's update, so a change to its own state in the same update renders once.
