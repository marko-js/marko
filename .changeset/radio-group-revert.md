---
"@marko/runtime-tags": patch
---

Fix a resumed named radio group unchecking entirely when its `checkedValueChange` handler rejects the change (the controlled "ignore" pattern). On resume only the `defaultChecked` member stores a controlled value, so the revert used `undefined` as the group's old value; other members now fall back to `defaultChecked`.
