---
"@marko/runtime-tags": patch
---

Fix an `<html-comment>` whose body serializes empty resuming as a new text node — resume's empty-comment heuristic (meant for `<!>` separators) skipped the comment, so later updates rendered the comment content as visible text. `<html-comment>` markers now use a dedicated resume symbol that always claims the preceding comment node.
