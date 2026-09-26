---
"@marko/runtime-tags": patch
---

Write an error's or typed array's constructor name from the built-in the serializer matched instead of from the value itself. An own `constructor` property, such as one `Object.assign(new Error(message), JSON.parse(body))` copies from an API response, could otherwise put arbitrary code into the page's resume script.
