---
type: bug
impact: high
effort: high
site: packages/runtime-tags/src/dom/patch-ready.feat.ts › commitReady
---

# Land a later flush whose ready channel belongs to a freshly created layout

A flush that settles after a patch created a lazy layout throws inside
`commitFlush`, reading its `PatchKey.Ready` entry off an undefined partial:

```
TypeError: Cannot read properties of undefined
  (reading 'PatchReady:ready:src/routes/map/+layout.marko')
    at processResumes → commitFlush → applyFrames → navigate
```

The client then reports `A patch navigation fell back to a document load: a
frame did not apply` and reloads, seconds after a navigation that had already
applied — so the page is replaced well after it looked settled. `commitReady`
already contemplates this shape ("a cold page under a warm layout"), so the
gap is which scope the later flush nests its channel entry under, not whether
nesting is expected.

Not reducible in the fixture harness: `getReadyId` returns an id only under
`linkAssets`, and while the bundled fixtures set it, every module is in one
bundle, so `isReady` is already true when the flush lands and the channel is
never genuinely pending. Reproducing it needs a module that is still in
flight when a later flush arrives, which today means a real `@marko/run`
build.

Check: a `@marko/run` app with `patches: true` and a nested layout over two
routes, whose page bodies `<await>` server data that settles a beat later.
Navigate in from a route outside the layout and wait past the page's data:
the console shows the throw above and a document load follows.
