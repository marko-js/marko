---
"@marko/runtime-tags": patch
---

Fix incorrect client rendering of `<await>` content that contains nested child scopes (such as a nested component). The eager, detached render of the await body removed only a single scope from the pending-scopes list, which cleared the `Creating` flag on the await branch (or one of its children). When the promise resolved, the affected scope's setup ran in update mode instead of create mode. For example an `<input value=resolvedValue>` inside the await body rendered empty. All eagerly-created scopes are now deferred together and committed when the await resolves.
