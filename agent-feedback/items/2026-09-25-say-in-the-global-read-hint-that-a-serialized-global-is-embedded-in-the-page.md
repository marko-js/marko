---
type: dx
impact: med
effort: low
site: packages/runtime-tags/src/dom/signals.ts › _global_read
---

# Say in the `$global` read hint that a serialized global is embedded in the page

`_global_read`'s debug hint says "Add `${key}` to `serializedGlobals` at the render call" with no caveat. Following it for `$global.request` (the incoming `Request` under `@marko/run`) makes `html/serializer.ts` › `writeRequest`/`writeHeaders` write every request header, `cookie` and `authorization` included, into the page's inline script. Direction: word the hint to copy the serializable, non-secret field the client needs into its own `$global` key and serialize that key, noting that serialized globals are readable by anyone who can read the page.

Check: `packages/runtime-tags/src/__tests__/fixtures/dollar-global-client-not-serialized/__snapshots__/render-ssr.debug.md` shows the hint's wording; in a `node -r ~ts` script inside the repo, `new Serializer().stringifyScopes([[0, { request }, { request }]], { signal: { aborted: false }, state: {}, abort() {} })` for `request = new Request("https://x.test/a", { headers: { cookie: "sid=secret", authorization: "Bearer t" } })` returns a payload containing `cookie:"sid=secret"` and `authorization:"Bearer t"`.
