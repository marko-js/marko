---
"@marko/runtime-tags": patch
---

A dynamic tag whose name computes a value from passed content, such as `<${open && input.content}/>`, or `<${open ? content : undefined}/>` in a `<define>`, now compiles and renders that value: its caller no longer imports a `$input_content_direct` signal the child never exports, nor renders the content in place of the computed name.
