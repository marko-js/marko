---
"@marko/runtime-tags": patch
---

The body and attribute tag content of a dynamic tag whose name the compiler cannot resolve, such as `<${input.as}>`, keep the values they read after resume when a component passed as that name renders them later, for example behind its own `<if>`. Those values reach the browser only when the component sends the content there, so attribute tag content no longer serializes everything it reads on every render.
