---
"@marko/runtime-tags": minor
---

Add a `has` lazy load trigger.

The `has` trigger starts a lazy load the first time a CSS selector matches any element on the page, including state-based selectors like `:hover` and `:focus`:

```marko
import Child from "./child.marko" with { load: "has.my-button:focus" }

<Child/>
```

It works by attaching a no-op CSS animation to a sentinel element via `:has(<selector>)` and resolving when that animation starts, so it reacts to interaction state changes that a `MutationObserver` could not. Once a selector has matched it stays matched for the lifetime of the page, so any later load using the same selector fires immediately. Like the other triggers it can be combined with `|` (e.g. `has.my-button:focus|idle`) and runs both on the client and via the inline trigger scripts written during streaming SSR.

When `$global.cspNonce` is set, the inline trigger scripts (for every trigger type) stamp the nonce on the asset tags they insert once triggered, and the `has` watcher's injected `<style>` carries it inline, so lazy loading keeps working under a CSP without `unsafe-inline`. A `has` watcher created purely client side instead reads the nonce off any element carrying one. Note that the trigger requires [`:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) support (Chrome/Edge 105+, Safari 15.4+, Firefox 121+); in older browsers a `has` trigger never fires.
