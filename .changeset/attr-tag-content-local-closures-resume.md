---
"@marko/runtime-tags": patch
---

Fix attribute tag content that closes over a local (eg a `<for>` param around an `<@item>`) losing that value when the content is re-rendered on the client. After SSR the locals are now serialized alongside the registered content, and a local read from nested content (eg inside another custom tag's body) is forwarded through the intermediate section instead of being dropped.
