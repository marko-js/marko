---
"@marko/runtime-tags": patch
---

Keep a page's effects and assets right around a caught `<try>`.

- A caught body's effects, `@placeholder`s, `<await>` content and state subscriptions no longer reach the browser, so a resumed page no longer treats the replaced body as live and throws when state it read changes.
- Effects written before a caught `<try>` or a still-streaming lazily loaded tag are kept, and a lazily loaded tag's held effects run in stream order.
- The scripts, stylesheets and load-trigger scripts a lazily loaded tag writes survive a `@catch` replacing the content around it, including the page's own entry script when it was written there.
