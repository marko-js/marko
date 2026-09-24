---
"@marko/runtime-tags": patch
---

A tag name that may be a `<define>` or another tag's variable, such as `<${show ? Foo : "div"}>`, registers its body for the client, so that tag can still render the body after resume.
