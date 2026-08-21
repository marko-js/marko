---
"@marko/runtime-tags": patch
---

`<try>` boundaries with a `<@catch>` now share their parent's abort signal, so a consumer disconnecting mid-stream stops pending `<await>` regions under the try instead of leaving them rendering into a dead stream. Disconnects never fire the `@catch` content.
