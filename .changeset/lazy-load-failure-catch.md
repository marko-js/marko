---
"@marko/runtime-tags": patch
---

A lazily loaded tag whose module fails to load on a server-rendered page now fails into its enclosing `<try>`'s `@catch`, the way a client-side load failure already did, instead of leaving the server-rendered content inert. This covers both the loader script failing at the network level and its module import rejecting, in production as well as debug builds.
