# Marko CMS JIT: shape-specialized templates for a dynamic CMS

**Status:** proposal + working prototype · **Scope:** Marko 6 only (`@marko/runtime-tags`), comptime ([marko#3344](https://github.com/marko-js/marko/pull/3344)), persisted pages (`dpiercey-ws-persisted-pages-xh8764` in marko and run)

## TL;DR

- **Specialize on the CMS response's _shape_, not its content.** A shape is the response with every content field removed: view types, tree topology, and a few declared structural props such as `variant` or `columns`. Content (text, URLs, lists of cards) stays runtime input. One compiled shape then serves every page with that structure, and the keyspace stays small. In the prototype corpus, 3,000 pages have 992 page shapes, and the top 32 cover 82% of traffic. They have only 17 **section** shapes.
- **What works today, on the comptime PR as is:** comptime unrolls the shape into a closed-world list of _known_ runtime tags (`<-for>`/`<-if>` over the shape, `<hero ...input.sections[i].props/>` inside). That removes the open-world dispatch.
  - Measured: page-specific client JS falls from 661–754 B to 391 B brotli. A self-contained page (runtime included) falls from 4.7–5.6 KB to 2.6 KB.
  - It renders identical markup and builds in roughly 40–60 ms per shape.
- **Fully baking the content buys little on top** (368 B vs 391 B here) and makes keys per page. Leave that to HTML caching.
- **Two compiler features stand between today and "optimal".** Both are gaps in the comptime PR:
  - **Partial comptime input:** bake `variant`, keep `title` live. Today it is a compile error.
  - **Constant-condition pruning after expansion:** a block's runtime `<if=input.variant === "split">` must fold away once `variant` is known. Today it survives as `if ("centered" === "split")`.
- **The JIT system is a cache, never a dependency.** The generic renderer always works. The bundler builds a shape only after it proves popular, and the request path never waits on a build.
- **Everything links to the host.** A JIT artifact carries only the code that is new. The runtime, asset handling and unspecialized block templates come from the app's own instances on both server and client.
  - Server artifacts are about 7 KB (about 19 KB when they bundle their own blocks).
  - Block client chunks are byte-identical across hundreds of shape builds, so they cache across pages.
- **Persisted pages fits, at one seam.** The swap from generic to JIT must happen at a **server-owned dynamic tag**, with content-addressed JIT template ids. The patch protocol needs three additions: lazy loaders for modules it did not know at build time, CSS delivery, and a shell token that survives registry growth.

Prototype: `cms-jit/` (this directory), on the workspace branch, which is based on the comptime PR.

---

## 1. The problem, measured

Today's renderer is effectively:

```marko
import Hero from "./hero.marko" with { load: "render" }
…
<for|section| of=input.sections>
  <${views[section.type]} ...section.props/>
</for>
```

Marko's analysis stops at that `<${…}>`. The compiler cannot see which templates render, which inputs are constant, or which branches are dead. Lazy imports recover code splitting, but each block arrives as its own wrapper chunk, behind its own ready-wait.

I built the same pages four ways and rendered 48 generated CMS pages with each ([bench.ts](./bench.ts), [blocks](./app/tags/)). The four ways:

- **generic-lazy:** today's renderer.
- **generic-eager:** the same, without `load`.
- **shape:** one comptime-generated template per shape.
- **baked:** one comptime-expanded template per page.

The six blocks are hero, card-grid, rich-text, a dismissible promo banner, a carousel with optional autoplay and dots, and an FAQ with single- or multi-open modes.

The bench checks that every variant renders the same visible markup, and they do.

| variant               | builds | warm build | resume payload | page JS, shared runtime¹ | files | page JS, self-contained² | SSR render |
| --------------------- | ------ | ---------- | -------------- | ------------------------ | ----- | ------------------------ | ---------- |
| generic-lazy (today)  | 1      | —          | 983 B          | 661 B                    | 5     | 5,580 B                  | 12 µs      |
| generic-eager         | 1      | —          | 933 B          | 754 B                    | 1     | 4,670 B                  | 10 µs      |
| **shape** (per shape) | 17     | 53 ms      | 932 B          | **391 B**                | **1** | **2,571 B**              | 13 µs      |
| baked (per page)      | 48     | 36 ms      | 876 B          | 368 B                    | 1     | 2,453 B                  | 9 µs       |

¹ Brotli. The host serves one full client runtime (10.4 KB br), which is cached and not counted here.
² Brotli. Each page bundle includes a tree-shaken runtime.

Raw runs: [shared runtime](./results/bench-shared-runtime.txt), [self-contained](./results/bench-bundled-runtime.txt).

What this says:

- **Most of the win is closed-world composition, not constant folding.** Shape alone gets 754 → 391 B; full baking adds only 391 → 368 B. Closed-world composition means the page lists exactly the templates it renders, as known tags. The compiler then ships only those blocks, as one chunk, with exact per-input serialization.
- **Server render time is not the reason to do this.** Every variant is about 10 µs per page. Shape bundles are a little slower only because each one carries its own copy of the block code, which V8 warms separately. Linking blocks to the host (§4.4) removes that.
- **These blocks are tiny.** The absolute bytes understate real views. The share that specialization removes grows with the amount of variant-dependent code a view carries, for example the carousel's autoplay `<script>` when no carousel on the page autoplays. That is exactly what partial input plus pruning (§3) unlocks.

## 2. Goals and non-goals

**Goals**

- Pages whose CMS structure is popular render with a template compiled for that structure, with near-zero extra latency on the request path.
- Bounded permutations: keys grow with distinct _structures_, not with pages or revisions.
- A cold or broken JIT path costs nothing but optimality. The generic renderer is always correct.
- Works with persisted-pages navigation (patches) as well as with full document loads.

**Non-goals**

- Faster SSR as such. It is already about 10 µs per page.
- Compiling untrusted templates. Only app-owned block templates are compiled, and CMS data never becomes code (§7).
- Marko 5 / class API interop.

## 3. What to specialize: tiers

| tier                        | specialized on                                         | key cardinality     | needs                                           | status                                         |
| --------------------------- | ------------------------------------------------------ | ------------------- | ----------------------------------------------- | ---------------------------------------------- |
| T0 generic                  | nothing                                                | 1                   | —                                               | today                                          |
| **T1 shape**                | view types + topology                                  | low (structures)    | comptime as in #3344                            | **prototyped, measured**                       |
| T2 shape + structural props | T1 + declared props (`variant`, `columns`, `autoplay`) | low–medium          | partial comptime input, constant `<if>` pruning | blocked on 2 compiler features                 |
| T3 baked                    | everything                                             | per page × revision | comptime as in #3344                            | prototyped; use only for very hot static pages |

T1 is the generated entry the bundler compiles per shape ([variants.ts](./lib/variants.ts), `shapeFiles`):

```marko
comptime import shape from "./shape.json";
<-for|section, i| of=shape.sections>
  <-if=(section.type === "hero")>
    <hero ...input.sections[i].props/>
  </-if>
  …one <-if> per view type…
</-for>
```

The runtime `input` is the raw CMS response, unchanged. Content paths like `input.sections[3].props` are valid for every page with the same shape, so no data reshaping happens at request time.

### Why T2 needs compiler work

I tried both T2 routes against the comptime branch:

```marko
<-hero variant=block.variant title=input.blocks[i].title/>
```

fails with "`input` is a comptime binding only when this template is invoked as a comptime tag". Every attribute of a `-` tag is evaluated at compile time; this is RFC open question 9, "partial comptime input". And:

```marko
<-hero ...block/>   // fully comptime
```

expands, but the block's own runtime `<if=input.variant === "split">` survives as `if ("centered" === "split") {…}`, client `_if` signal included. The comptime PR already files that in `agent-feedback/perf.md`.

The fix I'd propose for partial input is **binding-time analysis by scope membership**, which matches how the RFC already classifies `input`:

- An attribute on a `-` tag whose expression reads a _runtime_ binding stops being an error. It becomes a **runtime hole**: a value that carries its expression and the caller's scope, the same machinery content fragments already use.
- Inside the expansion, a hole in a runtime position splices the caller's expression with hygiene, so `${input.title}` becomes `${input.blocks[3].title}`. Member reads compose: `input.cta.href` becomes `<expr>.href`.
- A hole read in a comptime position, such as `<-if=input.title>`, is the error, naming the call site.
- Blocks stay **dual-use**. T0 renders them at runtime; T2 expands them. The specialization comes from constant propagation into ordinary runtime control flow, which is why pruning constant conditions (`<if>`/`<else if>`/`<else>`, `<show>`, constant `<for>` bounds) after expansion is the second required piece.

Until then, the agent that read the implementation verified a workaround that passes content through attribute-tag fragments (`<@title>${input.content[id].title}</@title>`). It works, but it forces block authors to write text props as content, so I would not build on it.

## 4. Architecture

```
                          ┌────────────────────────── app server (N instances) ───────────────────────────┐
 request ──▶ CMS (GraphQL) ─▶ shape = project(response)     key = buildId.hash(shape)                       │
                          │      │                                                                          │
                          │      ├─ in-process LRU hit? ──────────────▶ render with JIT template ──▶ HTML   │
                          │      ├─ KV has artifact? ─▶ vm-evaluate in host realm, link host modules ─┘     │
                          │      └─ miss ─▶ render with generic template; INCR hits:key;                    │
                          │                 ≥ threshold ⇒ enqueue(shape)  (fire-and-forget)                 │
                          └──────────────────────────────────────┬─────────────────────────────────────────┘
                                                                 │ shape only (no content)
                          ┌──────────── bundler service (worker pool) ────────────┐
                          │ SET lock:key NX → generate entry → @marko/compiler +   │
                          │ rolldown (html: CJS, host runtime/blocks external;     │
                          │ dom: ESM, host runtime by URL, blocks split)           │
                          │   ├─▶ KV: artifact:key = {server code, asset manifest} │
                          │   └─▶ CDN: content-hashed client chunks (immutable)    │
                          └────────────────────────────────────────────────────────┘
       KV also holds: hits:key (admission window) · hot (decaying zset of shape hashes) · shape:hash (for prewarm) · failed:key
```

Prototype map:

| piece                                                                  | file                                                                   |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| shape projection + canonical hash                                      | [lib/shape.ts](./lib/shape.ts)                                         |
| build harness, modeled on `runtime-tags/src/__tests__/utils/bundle.ts` | [lib/build.ts](./lib/build.ts)                                         |
| bundler service + worker threads                                       | [jit/bundler.ts](./jit/bundler.ts), [jit/builder.ts](./jit/builder.ts) |
| vm loader + LRU + code cache                                           | [jit/loader.ts](./jit/loader.ts)                                       |
| request path + admission + prewarm                                     | [jit/app.ts](./jit/app.ts)                                             |
| Redis stand-in (TTL, NX, INCR, LFU, zset)                              | [jit/kv.ts](./jit/kv.ts)                                               |
| traffic simulation                                                     | [simulate.ts](./simulate.ts)                                           |

### 4.1 Shape and cache key

- **Projection.** Per view type, a declared list of structural fields; everything else is content ([`structuralFields`](./lib/shape.ts)). Declaring is safer than inferring: a field marked structural multiplies the keyspace by its cardinality, so it should be a deliberate choice.
  - The compiler can _suggest_ candidates. A field read in control-flow positions (`<if>` conditions, `<for>` collections, tag names, `class` maps) is a candidate; a field read only in text or attribute values is content. Marko's analysis already tracks per-input-property reads, so this could surface as compile `meta`. Telemetry on observed cardinality then confirms it.
- **Normalization.**
  - Homogeneous repeats (cards, slides, FAQ items) are _content_: their count is not in the shape, and the block keeps its runtime `<for>`. This is the RFC's "bake structure, not repetition".
  - Nested view trees recurse.
  - Unknown fields are dropped. Canonical JSON then gets a truncated SHA-256.
- **Key** = `buildId.shapeHash`.
  - `buildId` covers block template sources, compiler and runtime versions, compile options, the generator version, and the structural-field schema.
  - It **must equal the persisted-pages build id** (§6), so one deploy invalidates both together.
- **Let the CMS compute the shape** if it can. The GraphQL server knows the `__typename` tree and could return `extensions.shapeHash`. The app then skips hashing, and it can start fetching the artifact while it parses the response.

### 4.2 Granularity: sections, not pages

The corpus has 3,000 pages, 30% of them freeform long-tail pages:

| unit          | distinct keys | traffic covered by top 10 / 32 / 100 |
| ------------- | ------------- | ------------------------------------ |
| page shape    | 992           | 69% / 82% / 89%                      |
| section shape | **17**        | —                                    |

**Recommendation: the JIT unit is a section** (a top-level region of the response, or any node of a view type declared as a boundary).

- The page renders `<for>` over its sections, with one server-owned dynamic tag per section. That tag uses the section's JIT template when it is loaded, or the generic renderer for that section otherwise.
- **A page becomes optimal piecewise**, and a new page made of known sections needs zero builds.
- Each section template is a lazy "load" entry, so its client JS arrives just in time through Marko's existing `withLoadAssets` path. The difference from today is that the lazy unit is a _specialized section_, not a single block.
- Under persisted pages, a section that keeps its shape across a navigation is **patched in place** (fills only), and a changed section swaps its branch (§6). That is the granularity patches want anyway.
- Cost: one dynamic tag per section. That cost is small when, as here, the tag value is not reactive on the client. You also lose cross-section inlining, which the bench says is worth little.

The prototype is still page-level; making it section-level is the next step.

### 4.3 The bundler service

- **Input is the shape only, never content.** Builds are content-independent, so they are shareable, cacheable and never carry PII. CMS data also never enters the compiler realm (§7).
- **Generated entry with a unique, content-addressed filename** (`<workDir>/<buildId>.<shapeHash>/page.marko`), with the shape inlined or `comptime import`ed from beside it. This is required for three reasons:
  - Comptime globals race under concurrent async `compile()` (verified: three concurrent compiles all saw the last global).
  - `cache.get("comptime:modules")` never invalidates.
  - Template ids derive from the path, so a unique path gives every shape its own, stable template id.
- **Worker threads.** Compiles are synchronous, comptime evaluation uses a `$ctInvoke` global, and builds can run for up to 30 s. Rotate the compiler `cache` every N builds, because it grows per filename.
- **Measured: about 40 ms per shape build** with a warm cache (html and dom, rolldown, linked blocks). That is about 50 builds/s on two workers. Compile time scales at about 0.5 ms per expanded block per output.
- **Single flight across the fleet:** `SET lock:key NX PX`, then a re-check that the artifact is absent. Failures write `failed:key` with a TTL (a negative cache) and alert. A page never waits.
- **Outputs:**
  - **Server:** one CommonJS module whose only requires are the host's `@marko/runtime-tags/html`, its asset flush, and its block templates (§4.4). Stored in KV.
  - **Client:** ESM chunks with content-hashed names, uploaded to the CDN (immutable). They import the host's runtime chunk by URL. Each block's code is split into its own chunk, so identical code gets one URL from every build.
- **Dev:** the same generator behind a vite virtual module (`virtual:cms-jit/<hash>.marko`), so block edits hot-reload through vite's module graph. The JIT path can stay off by default in dev.

### 4.4 Linking to the host (the part that makes it cheap)

A JIT artifact must share the host's module _instances_, not copy them:

- **The runtime: one instance per page, on both sides.**
  - On the server, `$chunk`, the serializer `REGISTRY` and the persisted-pages shell registry are module singletons.
  - On the client, `_resumed`, `self[runtimeId]` and the `*.feat` patches assume a single runtime.
  - So the host publishes its runtime as a stable, un-tree-shaken entry (`preserveEntrySignatures: "strict"`; 10.4 KB br here), and JIT bundles mark it external: by specifier on the server, by URL on the client.
  - The trade-off is the full runtime vs a per-page tree-shaken one (2.2–3.9 KB): a few KB once, cached across the whole site.
- **Asset resolution.**
  - On `main`, each lazy or page asset carries its own `flush` (`withLoadAssets(renderer, flush, id)`), so an artifact can bring its own manifest.
  - On the older comptime branch, `withPageAssets` sets a module-global `assetFlush` at load, so the last-loaded module wins. The prototype works around this with a host asset registry that each artifact registers into ([jit/assets.ts](./jit/assets.ts)). Rebasing comptime onto `main` removes the workaround.
- **Unspecialized block templates (T1).** A T1 page calls blocks as ordinary runtime tags, so the server artifact `require`s the host's compiled instances (`cms-jit:tag/hero`). The host compiles them with identical options, so their ids and serialize-reason contracts agree.
  - Measured: artifacts drop from about 19 KB to about 7 KB, and the in-process LRU stops thrashing (334 evictions → 0 at a 2 MB budget).
  - On the client, statically used tags import each other's internal named exports, so linking against host chunks would require the host to emit block entries with strict signatures. The cheaper route, prototyped, is to **split each block into its own chunk**. Across 594 shape builds, every block's client chunk stayed byte-identical, so it is shared and cacheable. Client files from 595 builds totalled 256.
  - The trade-off: a first visit costs more bytes and files (about 640 B in 4 files vs about 400 B in 1, unsplit), while repeat and cross-page visits cost only the page entry (about 140 B). Pick per deployment from the cache-hit profile; HTTP/2 makes the file count cheap.

### 4.5 Loading artifacts on the server

- **Use `vm.Script` with `runInThisContext`, in the host realm, not a new context.** Marko's serializer dispatches on prototype and constructor identity (`Object.prototype`, `Map`, `Promise`, …). In a separate context those checks fail silently in production.
- **Use CJS with a `require` shim** that answers only from an allowlist of host modules and throws on anything else. This needs no experimental flags. (`vm.SourceTextModule` linking host modules through `SyntheticModule` also works, behind `--experimental-vm-modules`.)
- **Never `import()` artifacts.** The ESM module map never evicts, so a long-running server leaks every artifact it ever loaded. A `vm.Script` is collectible once the LRU drops it.
- **Keep a V8 code cache** (`script.createCachedData()`) beside each artifact, keyed by node version, so cold instances skip parsing.
- **Use a size-bounded LRU** (by code bytes) plus a short negative cache (1 s), so generic renders for unbuilt shapes don't cost a KV round trip each.

### 4.6 Admission, eviction, keeping hot pages warm

| concern                   | mechanism (prototyped)                                                                          | production notes                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| don't build the long tail | `INCR hits:key` in a fixed window; build at ≥ `threshold`                                       | TinyLFU-style sketch if key counters get large; per-tenant budgets                    |
| one build per key         | `SET lock:key NX PX` + re-check                                                                 | lock TTL > p99 build; bundler heartbeat extends it                                    |
| KV size                   | `artifact:key` with sliding TTL (`PEXPIRE` on load) + `allkeys-lfu`                             | keep artifacts and counters in separate keyspaces or DBs so counters can't evict code |
| process memory            | LRU by code bytes                                                                               | size from `hot` working set × ~7 KB                                                   |
| popularity                | `hot`: a decaying sorted set of _shape hashes_, independent of build                            | `zdecay` on a schedule; stores `shape:hash` so it can be rebuilt                      |
| deploys                   | before cutover, rebuild the top-K shapes for the new `buildId`; new instances preload the top-K | part of the deploy pipeline; gate cutover on the hit ratio of the prebuilt set        |
| publishes                 | the CMS publish webhook computes the shape and enqueues a build if it's new                     | the RFC's original AOT case, now just a warm-up path                                  |
| CDN cleanup               | immutable files; lifecycle-delete after `max(HTML cache TTL, longest persisted session)`        | open tabs reference old chunks for as long as they live                               |

Simulation, three instances behind one KV, two bundler workers, 2,000 rps of Zipf traffic over the 3,000 pages, with a deploy at 8 s. Raw runs: [linked + prewarm](./results/simulation-linked.txt), [no prewarm](./results/simulation-noprewarm.txt), [blocks bundled into artifacts](./results/simulation-unlinked.txt).

|                           | 1 s | 2 s | 3 s | 8 s | deploy +1 s | deploy +2 s | end |
| ------------------------- | --- | --- | --- | --- | ----------- | ----------- | --- |
| JIT share, prewarm top-32 | 5%  | 76% | 88% | 94% | **81%**     | 86%         | 94% |
| JIT share, no prewarm     | 1%  | 76% | 86% | 94% | **2%**      | 79%         | 95% |

- Builds averaged 37–40 ms; about 600 shapes were built in 16 s, with no failures.
- KV held about 4.2 MB for about 600 artifacts when blocks were linked, vs 11.3 MB when they were bundled.

The real-world version of the deploy dip is much longer than one second, because of CDN upload, Redis latency, larger templates and many more shapes. That is why prewarm belongs in the deploy pipeline.

## 5. Request path, step by step

1. Fetch the CMS response, compute the shape hash (or read it from `extensions`), and form the key `buildId.hash`.
2. `ZINCRBY hot hash`. This is fire-and-forget; batch it.
3. On an LRU hit, render with the JIT template. That is the synchronous fast path.
4. Otherwise, unless the negative cache says not to, `GET artifact:key`. On a hit, evaluate it, put it in the LRU, and render with JIT.
5. Otherwise, render with the generic template, `INCR hits:key`, and enqueue the shape once it passes the threshold.
6. **Shadow verification during rollout:** for a sampled share of JIT renders, also render generic and compare visible markup. The bench already does exactly this. Any mismatch disables that key (`failed:key`) and alerts.

## 6. Persisted pages

Facts from the `dpiercey-ws-persisted-pages-xh8764` branches (marko, run, vite):

- **There is one build id per server**, sent as `x-marko-patch: <build>;<token>`. A mismatch returns 412, and the client does a full load. `@marko/vite` hashes SSR templates plus client output into the id. **JIT artifacts must live under that build id** (§4.1): they are not new builds, they are lazily materialized parts of the same build.
- **Patches address live scopes by compiled accessors.** A patch from template J applied to scopes resumed from template G either throws (full load) or silently writes the wrong slots. So **the generic → JIT swap must happen where the protocol already replaces wholesale: a server-owned dynamic tag whose renderer id changes.** The section-level design (§4.2) puts one there per section. Requirements:
  - JIT template ids must be **content-addressed**: stable per shape, so repeat visits pair rather than recreate, and new on any re-JIT.
  - They must **never collide with the host's `optimizeKnownTemplates` index ids** (`a`, `b`, …). JIT builds therefore hash their paths and must not set `optimizeKnownTemplates`.
  - Re-registering an existing shell id with different markup leaves the client holding a stale shell, which content addressing rules out.
- **Gaps to fill in the patch protocol:**
  1. **Unknown lazy modules.** A frame that leads with a ready id waits for the module to load. Loaders, however, exist only as `_load_lazy(readyId, () => import(…))` calls in the build-time page entry. A JIT section's ready id has none, so the frame waits forever. Proposal: a frame may carry `readyId → URL` pairs, and the client registers loaders for them before holding.
  2. **CSS.** In a patch render `withLoadAssets` writes no asset tags, so JIT CSS has no channel. Proposal: the same frame header carries stylesheet URLs, or the JIT module imports its CSS.
  3. **The token.** It indexes the server's _sorted_ shell id list and resets ("holds nothing") whenever the registry size changes. Every JIT load would therefore reset every client's token and resend shells. Proposal: segment the registry into the host build's sorted shells plus append-only, hash-named JIT segments, so the token encodes holdings per segment.
  4. **Patch features.** The host page entry must already include every `patchers[kind]` feature a JIT template could emit, which is the same "full runtime" rule as §4.4.
- `@marko/run` patches only when the template is the generated app template, so the JIT template renders _inside_ a page through the dynamic tag and never replaces the page entry. That matches §4.2.
- **Payoff:** navigation between two pages that share section shapes becomes fills only, the minimal patch. With the generic renderer, the same navigation already pairs dynamic tags of the same type, so the JIT win under patches is the same as on first load: smaller specialized code, and no per-block lazy-chunk waterfall.

## 7. Security

- **Comptime sees only the shape.** Content never enters the compiler realm, so the RFC's untrusted-data concerns shrink to a small, schema-validated structure. Pass it through `inert()` from `marko/comptime` anyway.
- **KV is now a code-execution boundary.** The app evaluates whatever is in `artifact:*`. Sign artifacts in the bundler (HMAC or Ed25519 over the code and manifest), verify before evaluating, and restrict write access to the bundler.
- **The `require` allowlist (§4.5)** stops an artifact from reaching anything the host didn't hand it.
- **Run the bundler in its own process or container**, with a CPU and time budget per build. Comptime's fixed guards (30 s, 100k iterations, depth 100) are a backstop, not a sandbox.

## 8. Marko changes, ranked

**Needed for T1 in production**

1. **Host "linkable" outputs from `@marko/vite` / `@marko/run`:**
   - a stable server and client runtime entry, including every `*.feat` module;
   - the block templates as a server module the JIT loader can hand out;
   - a manifest a JIT bundler can read, including the persisted-pages build id.
2. **A JIT id namespace:** content-addressed template paths, no `optimizeKnownTemplates` for JIT builds, and a check against collisions with the host's ids.
3. **Rebase comptime onto `main`.** Per-asset `flush` on `main` removes the asset-registry workaround. The branch is about 880 commits behind.

**Needed for T2 (where the rest of the client-JS win is)**

4. Partial comptime input via runtime holes (§3, RFC open question 9).
5. Constant-condition pruning after comptime expansion (`<if>` chains, `<show>`, trivially constant `<for>`), in both the html and dom output. Already filed in the comptime PR's `agent-feedback/perf.md`.

**Comptime hygiene found while prototyping** (on the PR branch, so fix them there):

6. **No per-compile data channel.** Globals race under concurrent async compiles. Either add a per-compile option or document "inline it into the source".
7. **`comptime:modules` cache never invalidates**, so a changed JSON with a newer mtime still serves the old data.
8. **`<-${expr}>` is not rejected**, despite the RFC. It silently compiles to a runtime dynamic tag named `-hero`.
9. **Self-recursive `<-define>` does not resolve.** The snippet copies its environment before binding its own name, so recursive CMS trees must use file tags.
10. **Unguarded fragment splicing gives a misleading error.** `<${input.content}/>` with no body passed reports "Unable to serialize … (reading title.content)".

**Persisted pages** (§6): remote lazy loaders, CSS in patch frames, a segmented shell token, and the full patch feature set in host entries.

**Unrelated bug found on the way** (confirmed on `main` and filed as agent-feedback: branch `dpiercey-ws-marko-cms-byz32i-lazy-static-tdz`, based on `main`). A `load:` lazy import read from `static` code throws `ReferenceError: Cannot access '$Child_withLoadAssets' before initialization`. The server-side wrapper is appended to the end of the module (`getOrCreateHtmlLoadWrapped`). The DOM output is fine.

## 9. Rollout

0. **Measure, before building more.** Run the shape projection offline over a day of real CMS responses and traffic, to get shape and section cardinality and coverage of the top K. Then port 5–10 real views into the harness ([app/tags](./app/tags/)) for real byte numbers. Both scripts exist; they need real data.
1. **T1 at publish time:** build the top pages' shapes on publish, serve them through the loader, and keep shadow verification on.
2. **T1 JIT on traffic:** admission, KV, CDN upload, deploy prewarm, dashboards (JIT share, build queue, failures, LRU and KV hit rates).
3. **Section-level units + persisted pages:** the protocol additions in §6.
4. **T2:** once partial input and pruning land, opt in the structural fields per view type.

## 10. Open questions for you

1. **What does the response actually look like?** How deep is the view tree, how many view types are there, and is there a schema where structural fields could be annotated? Is there a natural section boundary?
2. **What is the real traffic concentration?** That decides the admission threshold, K for prewarm, and whether page-level keys would be good enough.
3. **Is there personalization or A/B?** If responses vary per user, structural variants multiply the shapes and content variants don't. Worth knowing which kind dominates.
4. **What does the infrastructure look like?** Redis and CDN-upload latency and the number of app instances. Is a separate bundler deployment acceptable, or must it run in the app processes (worker threads, as prototyped)?
5. **Is the CMS route the persisted-pages app shell**, i.e. are cross-page navigations patches? If so, §6 (1)–(3) move up the list.
6. **Should the comptime hygiene items (§8 6–10) go onto the comptime PR?** I'd fix them there, or file them, rather than leave them only in this document.
