---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/patches/writer.ts › getPatchGlobals
---

# Clear serialized globals omitted by later routes

When a later route stops including a key in `$global.serializedGlobals`, the client keeps its old value and its readers never re-run; for example, a logout route that stops serializing `user` leaves the previous user visible.
`getPatchGlobals` and `packages/runtime-tags/src/html/patches/template.ts` › `renderPatch` send only the next selection (an empty selection sends no globals entry), while `packages/runtime-tags/src/dom/patches/global.ts` › `patchGlobals` and the fallback in `packages/runtime-tags/src/dom/patches/apply.ts` › `patch` only merge received values.
The implemented direction sends the complete next selection, records the server-delivered key list from resume and patches, and sets omitted keys to `undefined` while re-running their readers, preserving the global object's identity, metadata and client-added keys without `delete`; own-property checks still see removed keys.
Its measured cost is a median **+233/+82 B min/Brotli per patch page**, plus **5 B per patch** for an empty globals entry inside an otherwise nonempty patch.
Gating tracking to client `$global` readers needs an analysis fact that currently does not cover both invoke-only handler reads and lazy-only readers.
The deferred implementation is preserved at `refs/backup/ready-globals-omit-impl` (`dd3874e4e8c4899c026d318ab7ad6235f2055d6c`).

Check: create a translator fixture named `patch-global-omitted-selection` whose `template.marko` is `<let/n=0/><button onClick() { n++ }>${n + ($global.brand || "none")}</button>` and whose `test.ts` exports `export const config = { patches: true, steps: [{ $global: { brand: "a", serializedGlobals: ["brand"] } }, { $global: { serializedGlobals: [] } }] }`; run `pnpm run test:update -- --grep "runtime-tags/translator patch-global-omitted-selection "` and observe the fresh-render assertion expect `0none` while the patched button remains `0a`.
