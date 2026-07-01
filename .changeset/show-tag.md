---
"@marko/runtime-tags": minor
---

Add a `<show>` core tag. Unlike `<if>`, the body is always rendered and kept mounted; the value only toggles whether the body's nodes are in the document, so state in the body (component state, input values, and the DOM nodes themselves) persists across toggles.

```marko
<show=condition>
  Hello!
</show>
```

The body compiles inline into the parent section rather than as a branch, so a resumed page never ships the body's template to the browser; when the value can change client side only a small node-range toggle is bundled. Hidden content is parked in a detached document fragment. On the server, hidden content still renders (so it resumes) inside a `<t hidden>` wrapper, which is dissolved lazily the first time the value changes. With a static value the tag compiles to plain markup with no runtime at all.

Note that until the first client-side toggle, server-rendered hidden content remains in the document (hidden); afterward it is detached while hidden. Moving nodes out of the document resets transient state like focus, unlike a pure `display: none` toggle.
