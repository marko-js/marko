---
"@marko/runtime-tags": patch
---

Serialize less resume data by letting the client walker infer what the markers already imply:

- A `<try>` no longer serializes its `BranchAccessor`; the walker reads it off the branch end mark. Its `@catch` and `@placeholder` renderers ship only when something inside the boundary resumes: a body that finished synchronously without a resume write drops the boundary entirely, and a body that went async before writing anything sends the renderers once it settles with resumable content (or once its catch fires with resumable content). This covers placeholder-only boundaries too.
- A scope that writes a node or branch end marker no longer serializes `ClosestBranchId`; the walker parents every marker's owner when the enclosing branch ends. The translator knows which markers a section writes and under which guard, so `_resume_branch` (and the link an effect in async or lazy content writes) is dropped or guarded at compile time.
- Reordered content (a placeholder body, an async catch) is bracketed by the reorder runtime so the walker parents its branches and owners to the branch that encloses it. This also fixes a throw from a nested placeholder-only `<try>` escaping the enclosing `@catch`, because such branches previously never got a parent.

Scope data that lands after a branch was destroyed no longer revives that scope.
