---
"@marko/compiler": patch
"@marko/runtime-tags": patch
---

Make common syntax errors self-guiding. Call-style control flow (`<if(cond)>`, `<await(x) p>`, `<show(x)>`) now says how to write the condition/value as an attribute; bare JS declarations at the template root (`let count = 0;`) and slashless `<let count=0>`/`<const x=1>` point at the tag-variable form and `static`; unknown tags from other frameworks get curated pointers (`<slot>` → `<${input.content}/>`, `<state>` → `<let>`) before falling back to nearest-name suggestions; JSX-style brace-wrapped attribute values (`onClick={handler}` and values that only parse once unwrapped) explain that attribute values are plain JavaScript expressions; attribute tags on `<await>` point at `<try>` with `<@placeholder>`/`<@catch>`. Also fixes a typo in the nested-attribute-tags assertion message ("Tag not support" → "Tag does not support").
