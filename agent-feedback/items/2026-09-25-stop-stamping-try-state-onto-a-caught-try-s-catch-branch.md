---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/dom/control-flow.ts › _try
---

# Stop stamping try state onto a `<try>`'s catch branch after it catches

After `renderCatch`, `setConditionalRenderer` leaves the catch branch in `scope[branchAccessor]`, and every later run of `_try`'s signal (any input change, such as a `@catch` or `@placeholder` declared inside a stateful `<for>` or `<if>`) stamps `BranchAccessor`, `CatchContent` and `PlaceholderContent` onto that catch branch. The catch branch then acts as a try, so an error thrown by the `@catch` content is re-caught by the same `@catch` instead of reaching the enclosing `<try>`. Direction: skip the stamp once the try has caught (the slot no longer holds the body branch), and add a fixture for an update after a catch.

Check: fixture with template `<let/n=0/><button#inc onClick() { n++ }>inc</button><try><@catch|outer|>outer caught ${outer.message}</@catch><try><for|l| of=[n]><@catch|err|>inner caught ${err.message}${n >= 2 && err.message === "body 1" ? (() => { throw new Error("from catch " + n) })() : ""}</@catch></for>${n >= 1 ? (() => { throw new Error("body " + n) })() : "ok"}</try></try>`, steps `[{}, inc, inc]`: `render.md` ends on `inner caught from catch 2`; without the `<for>` wrapper it ends on `outer caught from catch 2`.
