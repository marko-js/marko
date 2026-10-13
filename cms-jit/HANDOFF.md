# Handoff: continuing the CMS JIT prototype with real CMS data

Read [PROPOSAL.md](./PROPOSAL.md) first. It holds the design, the measurements so far, and the open questions. This file covers what a new session needs to pick it up: setup, where real data plugs in, what to evaluate, and what was learned the hard way.

The goal of the next phase is **§9 step 0 of the proposal**: replace the synthetic corpus with real CMS responses, real views, and real traffic. Then decide, from numbers:

- whether shape keys stay small enough;
- which fields are structural;
- whether the unit should be the page or the section;
- how much client JS specialization actually saves on real views.

## Setup

- **Repo:** marko-js/marko, branch `dpiercey-ws-marko-cms-byz32i`. Its base is `claude/marko-comptime-design-le2g48` (PR #3344, comptime).
  - In a `work` workspace, set it with `git config branch.dpiercey-ws-marko-cms-byz32i.gh-merge-base claude/marko-comptime-design-le2g48`.
  - The comptime branch predates `main`'s move to pnpm, so this branch uses **npm**: `npm ci`.
- **Node:** 22 or newer. The measurements used 26.8.1.
- **Run** from the repo root:
  - `node -r ~ts cms-jit/bench.ts`
  - `node -r ~ts cms-jit/simulate.ts`
  - Their environment knobs are listed in [README.md](./README.md).
- **Committing:** the repo's pre-commit hook runs lint-staged, a full build, and `build:sizes`, which takes about 20 s. Run `npx eslint --fix cms-jit --ignore-pattern 'cms-jit/app/.gen/**'` and `npx prettier --write cms-jit` first.
- **Related branches on origin**, for the persisted-pages work (proposal §6): `dpiercey-ws-persisted-pages-xh8764` in marko-js/marko, marko-js/run and marko-js/vite.

## Where real data plugs in

| what                            | file                                              | today                                                                                |
| ------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| CMS responses                   | [lib/pages.ts](./lib/pages.ts)                    | `generatePages()` synthesizes `CmsPage { slug, title, sections: { type, props }[] }` |
| structural fields per view type | [lib/shape.ts](./lib/shape.ts) `structuralFields` | hand-picked for the six demo blocks                                                  |
| the views                       | [app/tags/](./app/tags/)                          | six small demo blocks                                                                |
| entry generation per shape      | [lib/variants.ts](./lib/variants.ts) `shapeFiles` | flat section list, one `<-if>` per view type                                         |
| traffic                         | [simulate.ts](./simulate.ts) `zipfPicker`         | Zipf over the synthetic pages                                                        |

Suggested order:

1. **Keep proprietary data out of git.** Put response samples and access logs under `cms-jit/data/`, which `.gitignore` excludes. Write an adapter from the real response (GraphQL `__typename` tree) to the prototype's page model. Generalize `CmsPage` and `getShape` to nested view trees if the real data nests.
2. **Shape cardinality before anything else.** Projecting and hashing needs no compiling. Over a day of real responses weighted by real traffic, report:
   - distinct page shapes vs section shapes;
   - traffic covered by the top 10, 32 and 100 shapes;
   - how each candidate structural field multiplies the count.

   `printShapes` in `simulate.ts` is the starting point. This decides page vs section keys and the admission threshold.

3. **Port 5–10 real views** into `app/tags/` as ordinary Marko 6 tags, keeping them dual-use (no comptime constructs inside). Rerun `bench.ts` for real client-JS, resume and HTML numbers per tier.
4. **Replay real traffic** in `simulate.ts` in place of `zipfPicker`. Then tune `THRESHOLD`, `WINDOW_MS`, `PREWARM`, `LRU_BYTES` and `KV_BYTES`.

## What to report back

- Shape and section cardinality, and the coverage curve.
- Per-tier bytes on real views: generic-lazy, shape, baked.
- Build time per shape and its distribution. It was 40–60 ms on demo blocks, and comptime scales at about 0.5 ms per expanded block per output.
- Which fields really are structural, with their observed cardinality.
- Answers to the open questions in proposal §10.

## Next prototype steps after that

These are in the proposal; the order depends on what the data says.

- **Section-level JIT units (§4.2).** Each section gets its own JIT template as a lazy load entry. The page renders one server-owned dynamic tag per section, which picks generic or JIT per section.
- **Persisted pages (§6).** Swap at that dynamic tag. Prototype these protocol additions on the persisted-pages branches:
  - `readyId → URL` lazy loaders carried in a patch frame;
  - CSS in patch frames;
  - a segmented shell token.
- **T2 (§3)** needs two compiler changes on the comptime branch: partial comptime input (runtime holes), and pruning constant conditions after expansion.

## Learned the hard way

- **Comptime data must not go through `globalThis`.** Concurrent async `compile()` calls race on globals: three concurrent compiles all saw the last value. Give each shape its own generated entry with a **unique, content-addressed path** and the shape beside it (`comptime import shape from "./shape.json"`), as `jit/builder.ts` does.
  - The compiler's `comptime:modules` cache never invalidates, so the same path with new data serves stale data.
  - Unique paths also give unique, stable template ids.
- **Compile options:** set `modules: "esm"` and `babelConfig: { babelrc: false, configFile: false }`. Otherwise the repo's root Babel config turns templates into CommonJS.
- **Server artifacts:**
  - Evaluate them with `vm.Script#runInThisContext`, in the host realm. A new context breaks the serializer's prototype checks without any error in production.
  - Never `import()` them: the ESM module map never evicts.
  - Link the runtime and unspecialized block templates to the host's instances (`jit/loader.ts`'s `require` allowlist). Bundling them makes artifacts about 3× larger and duplicates hot code.
- **Asset flush:** on this older comptime branch, `withPageAssets` sets a module-global asset flush, so the last-loaded module wins. `jit/assets.ts` is a host-side registry working around that. On `main`, each asset carries its own `flush`, so the workaround goes away once comptime is rebased.
- **Lazy imports from `static` code:** a `with { load: … }` import read from `static` code throws a TDZ `ReferenceError` on the server. It is filed as agent-feedback on `main`. Read lazy imports inside the template body (`<const/views={…}/>`), as `lib/variants.ts` does.
- **Comptime gaps** (proposal §8, items 6–10):
  - `<-${expr}>` is not rejected;
  - a self-recursive `<-define>` doesn't resolve, so use file tags for recursive trees;
  - splicing `<${input.content}/>` when no content was passed gives a misleading serialize error; guard with `<-if>`.
- **Equivalence:** `bench.ts` checks that every variant renders the same visible markup. Keep that check whenever you add a variant or port views; it is the prototype's shadow-verification.
