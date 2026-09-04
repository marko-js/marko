---
type: bug
impact: med
effort: low
site: packages/runtime-tags/tags/try.d.marko › Input.catch
---

# Type `<@catch>`'s error parameter as `unknown`, not `any`

`catch?: Marko.AttrTag<{ content?: Marko.Body<[any]> }>` types the caught value as `any`, so `<@catch|err|>` silently accepts whatever annotation the developer writes and leaves every property access on `err` unchecked. A project running strict type-checking gets no checking at exactly the place TypeScript's own `useUnknownInCatchVariables` exists to cover, and the hole is invisible: nothing errors, so nobody looks. The neighbouring `tags/await.d.marko` shows the intended standard, threading a real type through as `Marko.Body<[Awaited<T>]>`. `unknown` is the correct type here and forces the narrowing a catch clause should require.

Check: `packages/runtime-tags/tags/try.d.marko` declares the catch body as `Marko.Body<[any]>`, so `<@catch|err|>${err.notAProperty}</@catch>` type-checks; `tags/await.d.marko` alongside it threads `Awaited<T>` instead.
