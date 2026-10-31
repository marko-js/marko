---
type: perf
impact: low
effort: high
site: packages/runtime-tags/src/translator/util/solve-reasons.ts › addRegisteredFnReasons
---

# Write a function's captures only where its branch renders, without guarding its registration

A function read inside a branch takes `ALWAYS` from the branch's own point of view, and `addRegisteredFnReasons` adds that reason to every value the function captures, so a capture is written on the owner scope even where the branch doesn't render. Narrowing that reason to what creates the branch (`getBranchExprReasonUntil`) saves the capture but also guards `fn.reason`, which `finalizeRegistrations` uses to decide `isInteractive` and registration: a handler inside a branch the server renders then resumes against a function the client never registered (`_resumed[registryId] is not a function`). The direction is two answers where `fn.reason` gives one: registration stays static (any instance may render the branch), and the capture write follows the branch per instance. The saving is a few bytes per function in a branch that doesn't render; no existing fixture shows it.

Check: `<if=input.show><Child onClick=log/></if>` with `<const/log=() => { console.log(input.step) }>` and `show: false` writes `input.step` in the resume payload; the change must keep `fn-capture-in-rendered-branch` (the same template with `show: true`, then a click) passing.
