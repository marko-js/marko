---
"@marko/runtime-tags": patch
---

A keyed `<for>` inside an `<if>`, `<await>`, `<try>`, another `<for>` or tag content now keeps its O(1) row selection: when the loop compares its key to a value declared further out (`class=(selected === row.id && "danger")`), a change updates only the previous and next selected rows instead of every row subscribing to the value.
