---
"@marko/runtime-tags": patch
---

Clean up effects inside a `<show>` body while it is hidden. A `<show>` whose body contains a `<script>` or `<lifecycle>` now renders that body as its own keep-alive branch: hiding it runs the effect cleanups (a `<lifecycle>`'s `onDestroy`, a `<script>`'s `$signal` abort) and showing it re-runs the effects (a fresh `onMount`), while the body's state is preserved across toggles. This mirrors React's [`<Activity>`](https://react.dev/reference/react/Activity#my-hidden-components-have-unwanted-side-effects), so an effect like a subscription no longer keeps running while its content is hidden.

```marko
<show=open>
  <lifecycle
    onMount() { subscribe() }
    onDestroy() { unsubscribe() }
  />
</show>
```

A body with no such effects still compiles inline as before.
