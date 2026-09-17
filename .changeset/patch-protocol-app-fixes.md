---
"@marko/runtime-tags": patch
---

Fix five patch protocol faults found driving a real app: `writeBranch` no longer leaks a reserved scope id when its branch renders nothing; a flush whose shell or renderer is missing is rejected instead of throwing mid-apply; a resumed page no longer replays server-fed closures against a value it never serialized; plain child-scope entries no longer settle an enclosing pending await; and a template whose `@placeholder` is not static markup ships its dom module so a patch can create the boundary.
