---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/__tests__/main.test.ts › assertPatchedLikeFresh
---

# Probe that a same-input patch changes nothing

A patch is a rerender of the page for an input applied to the live DOM, so a patch of the input the page already shows must apply without rejecting and without touching a node. The harness compares the patched DOM against a fresh render, which is blind to a destructive path that ends in the right shape: a caught `<try>` torn down and rebuilt, an unchanged unescaped hole rewritten, a patched spread dropping attributes the client set, `<details open>` toggled and restored. Each loses focus, selection or client state while the comparison passes. After every applied navigation and client step, request `template.patch(current, headers)` for the page's current input, discard the token line, apply each flush under a `MutationObserver` on the document (subtree, childList, attributes, characterData), and fail on a rejection or any record. Land it once the caught-`<try>` rebuild is fixed: with that bug in place about eighteen patch fixtures need an opt-out, which turns the rule into an exception table.

Check: on `patch-async-catch-scriptless`, after the rejection step, apply a patch of the same input; the observer records the catch subtree being removed and re-inserted although nothing changed.
