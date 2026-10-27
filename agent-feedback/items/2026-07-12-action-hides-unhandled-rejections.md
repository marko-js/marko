---
type: unclear
impact: low
effort: low
site: packages/runtime-tags/src/dom/action.feat.ts › _action
---

# Let an action's rejection stay unhandled when the caller ignores it

`_action` observes a returned promise with `result.then(end, end)`, which marks the original promise handled, so a rejection nobody else handles no longer reports as an unhandled rejection. Rethrowing from the observer instead creates a second unhandled chain, so it needs a different seam: ending the act from a `finally` wrapper around the promise the caller receives.

Check: call an `<action>` whose async function rejects without a `.catch` and see that no `unhandledrejection` fires, where calling the bare function fires one.
