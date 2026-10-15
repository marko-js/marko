---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/writer.ts › flushSerializer
---

# Serialize globals on a page whose resume writes no scope

`flushSerializer` pushes the `serializedGlobals` as scope 0 only on a flush that writes scopes, so a page whose only client code is an effect (a `<script>` reading `$global`, with nothing else to resume) never ships them: the effect reads `undefined` after resume and the value in a client render. The globals need to go out with the first flush that needs the walker runtime, before the effects it writes.

Check: add a fixture whose `template.marko` is `<main><script>console.log("brand", $global.brand)</script></main>` and whose steps are `[{ $global: { brand: "Marko", serializedGlobals: ["brand"] } }]`; `pnpm run test:update -- --grep "translator <name> "` writes `LOG "brand" undefined` for the resumed render and fails with a `render.debug.md` conflict against the client render, which logs `"Marko"`.
