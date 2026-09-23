---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/translator/util/signals.ts › getSignal
---

# Stop inlining a collapsed intersection member whose property alias has consumers

When `collapsedIntersectionSource` folds an intersection into its single source signal, `getSignal` inlines a derived member into the intersection body whenever `member.reads.size === 1`. That gate ignores `member.propertyAliases`. A read like `xs.length` is recorded on the `xs_length` alias, not in `xs.reads`, so `xs` is inlined, `getSignalFn` skips its value call, and the `$xs` signal feeding `xs_length` → `many` is never invoked. `$xs` is still emitted, reading an undeclared `input`. On the client, `many` stays `undefined`: the template below renders "none" for `list: [1, 2]` and never updates, while SSR renders "1,2", and `<for|x| of=(many ? xs : [])>` renders no rows. Treat a member with property aliases as not inlinable; adding `!member.propertyAliases.size` to the gate emits `_const("xs", …)` and renders correctly.

```marko
<const/xs=input.list || []/>
<const/many=(xs.length > 1)/>
<p>${many ? xs.join() : "none"}</p>
```

Check: save that as `fixtures/<name>/template.marko` with `test.ts` `{ equivalent: false, steps: [{ list: [1, 2] }, { list: [1, 2, 3] }] }` and run `pnpm run test:update -- --grep "runtime-tags/translator <name> "`. `render-csr.debug.md` renders `<p>none</p>` and logs no change for the update, `render-ssr.debug.md` renders `1,2`, and `dom.bundle.debug.js` defines `$xs` (reading `input.list`) without calling it.
