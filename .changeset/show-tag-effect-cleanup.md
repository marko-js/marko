---
"@marko/runtime-tags": patch
---

Clean up effects inside a `<show>` body while it is hidden. A `<show>` whose body contains a `<script>`, a `<lifecycle>`, or a `$signal` reference (directly, inside native elements, or inside `<if>`/`<for>` control flow) now renders that body as its own keep-alive branch: hiding it runs the effect cleanups (a `<lifecycle>`'s `onDestroy`, a `<script>`'s `$signal` abort) and detaches the body, while showing it re-attaches the body and re-runs the effects (a fresh `onMount`). The body's state is preserved across toggles, and updates from outside the `<show>` are not applied (and effects never run) while it is hidden; revealing re-reads the latest values. This mirrors React's [`<Activity>`](https://react.dev/reference/react/Activity#my-hidden-components-have-unwanted-side-effects), so an effect like a subscription no longer keeps running while its content is hidden.

```marko
<show=open>
  <lifecycle
    onMount() { subscribe() }
    onDestroy() { unsubscribe() }
  />
</show>
```

A body with no such effects still compiles inline as before. Two behavior notes for bodies that do contain effects: the body is not server rendered while hidden (it mounts on the client on first reveal, so its effects never run hidden), and effects inside a nested custom tag are not yet detected — the `<show>` stays inline in that case.
