---
type: bug
impact: low
effort: high
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js › flushScripts
---

# Hold Class component init under a caught Tags `<try>`

When a Tags page renders a Class component inside a `<try>` body, the Class API's component init script (`$MC`, from `flushScripts`' class init code) is sent with the flush that writes it, not held with the body's effects. If the body is still pending in order and its `@catch` then replaces it, the init script has already run for Class components whose markup the catch removed, while Tags content under the same body correctly holds and drops its effects. Direction: route Class init through the Tags writer as a held effect of the chunk its markup streams in, so it waits and drops with that chunk's effects; this touches how the Class runtime emits `$MC` and needs the lock-step interop change on both sides.

Check: an interop fixture where a Tags page's `<try>` body renders a Class component that logs in `onMount`, followed by an `<await>` that rejects after the page's first flush, with a `@catch`: the log still runs even though the component's markup is replaced by the catch.
