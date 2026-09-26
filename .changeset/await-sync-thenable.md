---
"@marko/runtime-tags": patch
---

Fix an `<await>` given a thenable that calls back synchronously: the client no longer throws `Cannot access 'thisPromise' before initialization`, and a server render inside a `<try>` no longer leaves its stream open. Both runtimes now adopt the thenable as a promise.
