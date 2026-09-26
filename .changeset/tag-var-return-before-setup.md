---
"@marko/runtime-tags": patch
---

Fix a custom tag's variable staying `undefined` in the browser when the content holding the tag is created together with the input the tag returns, such as `<child/v x=item/>` in a `<for>` row, an `<await>` or `@catch` body, content rendered with parameters, a directly called `<define>`, or a tags template rendered by a class component. Rows a `<for>` adds after the page resumes were affected too.
