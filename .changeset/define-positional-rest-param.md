---
"@marko/runtime-tags": patch
---

Fix a locally-invoked `<define>` with a positional rest parameter (`<define/MyTag|a, ...rest|>`) silently dropping every rest argument on the client. Server rendering passed all arguments positionally, but the DOM path wired only the named parameters and never applied the rest, so `<MyTag(x, "two", "three")/>` rendered the rest on the server and lost it after hydration. A positional rest now routes through the whole-arguments path on both runtimes.
