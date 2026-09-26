---
"@marko/runtime-tags": patch
---

Keep values reachable when later resume data reuses them. A value first sent with the loop values or closures of content passed to a dynamic tag no longer throws on the server (leaving the stream open) when a later flush reuses it, and a value the main stream sent stays reachable from the main stream after a lazily loaded tag's data reuses it, instead of aborting debug renders and being dropped from optimized ones. Content passed to a dynamic tag that reads closures from more than one owner now always links those owners, so it no longer throws on resume when an owner's scope data arrives after it.
