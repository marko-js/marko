---
"@marko/runtime-tags": patch
---

Fix a `Cannot read properties of undefined` error when content that resumes after its owner, such as the body a lazily loaded tag passes to a child or content behind a `<try>` placeholder, reads two values of its owner and only one of them was sent to the browser. Resumed content now re-renders only for a value the page changed while the content was pending, instead of for any value the server happened to send.
