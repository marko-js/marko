---
type: bug
impact: high
effort: low
site: packages/runtime-tags/src/html/serializer.ts › writeRegistered
---

# Give registered content's locals an id before a later flush can reuse a member

`writeRegistered` writes each `locals` level (attribute tag `<for>` params, content-closure levels) under `new Reference(ref, null, …)`, which has neither an accessor nor an id. When a later flush reuses an object first written inside one of those levels, `accessPath` climbs into that reference and `toAccess(null)` throws `Cannot read properties of null (reading '0')` out of `stringifyScopes`. The throw happens in a promise callback, so the render never aborts and the stream never ends. Direction: bind an id for a locals object that holds a reusable member, as `writeIntl` does with `isDedupedMember`/`needsId`, and add a MARKO_DEBUG assert in `accessPath` that every reference it climbs has an accessor or an id.

Check: fixture with `tags/list.marko` = `<let/open=false><button#open onClick() { open = true }>open</button><if=open><for|item| of=input.item><${item.content}/></for></if>` and template `import { resolveAfter } from "../../utils/resolve";` + `<let/picked=null/><list><for|item| of=input.items><@item><span>${JSON.stringify(item)}</span></@item></for></list><await|v|=resolveAfter(input.items[1])><button#pick onClick() { picked = v }>pick</button></await><div>${picked && picked.text}</div>`, steps `[{ items: [{ text: "a" }, { text: "b" }] }]`: `pnpm run test:update` reports the worker crashed, and a `for await` over `template.render(input)` (loaded through `createServerRunner` in `packages/runtime-tags/src/__tests__/utils/bundle.ts`, run with `node --experimental-vm-modules -r ~ts`) logs an unhandled rejection from `toAccess` ← `accessPath` ← `writeRef` after the first chunk and never ends.
