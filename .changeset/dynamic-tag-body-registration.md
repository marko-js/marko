---
"@marko/runtime-tags": patch
---

A dynamic tag body registers for resume on what can actually name it rather than unconditionally. When the name is always a string, that is the tag's own serialize reason: never when the tag cannot resume, unconditionally when the reason is static, and as a droppable side effect when it depends on params, so the tag's signal keeps the registration exactly where client code can change the tag. When the name only ever resolves to known templates, it is those templates' reasons for serializing their content, mapped through the tag's attributes, as content passed to a known tag already resolves. A name that may be anything else keeps registering, since a component can serialize the body for reasons of its own.
