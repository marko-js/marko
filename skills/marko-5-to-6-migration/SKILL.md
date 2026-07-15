---
name: marko-5-to-6-migration
description: Migrate Marko 5 (Class API / legacy widget API) applications and component libraries to Marko 6 (Tags API). Use when asked to upgrade Marko, convert class components to tags, remove the Class or widget API, or plan an incremental Marko 6 adoption using the Marko 5 interop layer.
---

# Marko 5 → Marko 6 Migration

Marko 6 replaces the Class API (`class {}` blocks, `component.js` files, `this.state`, `this.emit`, legacy widgets) with the Tags API (`<let>`, `<const>`, tag variables, function-valued event attributes). `marko@6` is **not** backward compatible: it cannot compile Class API files at all. `marko@5` **is** forward compatible: through the interop layer built into modern `marko@5`, one app compiles Tags API and Class API files side by side, classifying each `.marko` file individually.

That gives two supported migration strategies. **Confirm with the user which one they want before editing code** (unless they already said):

| Strategy                  | End state                                                                                                                                                              | Choose when                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Full migration**        | `marko@6` installed; zero Class/widget API anywhere                                                                                                                    | Small-to-medium codebase, you control all `.marko` sources, one big change is acceptable     |
| **Incremental migration** | Stays on latest `marko@5`; files convert to Tags API one at a time via interop; app is shippable after every step; ends with the same final flip as the full migration | Large codebase, must keep shipping, third-party Marko 5 tag libraries in use, multiple teams |

Hard constraints that force the choice:

- A dependency that ships Class API tags you cannot fork (e.g. `@ebay/ebayui-core`) blocks the final flip to `marko@6`. Use the incremental flow and stay on `marko@5` until every dependency has a Tags API release. For a small straggler module, converting it locally and carrying the diff with [`patch-package`](https://github.com/ds300/patch-package) is often practical — patch, verify, and upstream the conversion.
- Legacy widget usage (`marko-widgets`, `@marko/compat-v4`, `w-bind`, `defineComponent`) has no interop with Marko 6 and no automated path. Those components must be rewritten to Tags API (or at minimum to the Class API first) in either flow.

There is **no automatic source-to-source converter** from Class API to Tags API. Every file is converted by hand (by you), using the mapping tables in this skill.

## Reference files

Read these on demand; do not guess at mappings from memory:

- [`api-mapping.md`](./api-mapping.md) — exhaustive Marko 5 → 6 translation tables: template syntax, core tags, the full `Marko.Component` API, legacy widget API, server/template rendering APIs, taglib metadata, TypeScript types. **Read before converting your first file.**
- [`patterns.md`](./patterns.md) — worked before/after conversions of the common component shapes (stateful, controllable, refs, third-party DOM libraries, attribute tags, `<await>`, split components, legacy widgets).
- [`interop.md`](./interop.md) — exact file-classification rules, boundary semantics, limitations, and troubleshooting for running both APIs in one app. **Read before any incremental work**, and when debugging "Cannot mix Tags API and Class API features" or hydration issues in a mixed app.

## Step 1 — Assess

Gather facts before proposing anything:

```sh
npm ls marko @marko/compiler   # current versions (use the project's package manager: pnpm ls / yarn why)
find . -type d \( -name components -o -name tags \) -not -path '*/node_modules/*'  # directory conventions in use
```

Inventory the migration surface (run from the project root; counts of affected files). The greps are heuristics for sizing the work, not an exact list — review matches before acting on them, and extend the exclusions to cover this project's build output, docs, and any installed skills:

```sh
cf() { grep -rlE --exclude-dir={node_modules,.git,dist,build,coverage,.claude} "$@" . | wc -l; }  # count files matching

# Class API
cf '^\s*class \{' --include='*.marko'                 # inline class blocks
find . -not -path '*/node_modules/*' \( -name 'component.js' -o -name 'component.ts' \
  -o -name 'component-browser.js' -o -name 'component-browser.ts' \
  -o -name '*.component.js' -o -name '*.component-browser.js' \) | wc -l  # external/split components
cf '^\$ ' --include='*.marko'                         # $ scriptlets
cf 'on-[a-zA-Z-]+\(' --include='*.marko'              # attribute-argument event handlers
cf 'renderBody' --include='*.marko'
cf 'this\.(state|emit|getEl|getComponent|subscribeTo|setState|forceUpdate)'
cf ':scoped|:no-update|no-update' --include='*.marko'
cf '<(while|macro|include-text|include-html|module-code|await-reorderer|init-components)' --include='*.marko'
cf '<await' --include='*.marko'                       # async boundaries (interop-sensitive)

# Legacy widget API (Marko 3/4 era) — must be rewritten in every flow
cf 'w-bind|w-on-|widget-types|defineComponent|defineWidget|defineRenderer|legacy-components|marko-widgets|@marko/compat-v4'

# Server / rendering API
cf 'renderSync|renderToString|\.stream\(|out\.global|beginAsync|res\.marko|marko/node-require|marko/components'
```

Also identify: the bundler (lasso / webpack / rollup / vite / `@marko/run` / `browser.json` files), the server integration (`@marko/express`, koa, fastify, raw http), the test setup, and whether TypeScript or `marko.json` `"script-lang": "ts"` is configured.

Report the inventory to the user together with the recommended strategy, then proceed on the agreed flow.

## Step 2 — Modernize the foundation (both flows, still on Marko 5)

Each of these is an independently shippable change. Verify the app builds and tests pass after each.

1. **Upgrade to the latest `marko@5`** and `@marko/compiler` 5.x. Modern `marko@5` (5.39+) depends on `@marko/runtime-tags` and its `marko/translator` entry _is_ the interop translator, so this alone enables Tags API files — no other configuration.
2. **Clear existing deprecations** (they become hard errors or dead ends in 6): see "Already deprecated in Marko 5" in [`api-mapping.md`](./api-mapping.md). Run the app with `MARKO_DEBUG` / non-production `NODE_ENV` and fix every `complain()` deprecation warning.
3. **Rewrite legacy widgets** (`defineComponent` / `defineWidget` / `w-bind` / `getInitialState`). Rewrite straight to Tags API when the component is small; otherwise to Class API first so it rides the normal conversion path later. Mapping table: "Legacy widget API" in `api-mapping.md`.
4. **Delete explicit `<init-components/>` and `<await-reorderer/>` tags unconditionally.** Marko 5 injects both implicitly, so explicit usages are already redundant — removing them is safe today and required eventually (both are Class-only signals to the interop classifier).
5. **Adopt `server` and `client` statements early.** These were backported to Marko 5 (5.38+) and are API-neutral for interop classification, so they work in Class files today. Replace environment guards (`typeof window` checks, browser-only `require`s) and — importantly — any `component-browser.js` that exists only as a glorified bundling trick to keep code out of the server build: `client import "./browser-only"` expresses that directly in the template. This shrinks the real migration surface before any API conversion.
6. **Consider modernizing the bundler.** `@marko/vite`, `@marko/webpack`, `@marko/rollup`, and `@marko/run` all support Marko 5 _and_ 6 (e.g. `@marko/run` declares `"marko": "5 - 6"`), so this ships while still fully on Marko 5. Lasso also keeps working with Marko 6 — staying on it is viable; you only give up code-splitting of lazy imports (`with { load }` needs the bundler-provided `linkAssets`; without it those imports just load eagerly). `browser.json` component wiring should be retired regardless.
7. **Baseline**: record SSR output of key pages (curl to files) and make the test suite green. These are your regression oracle.

## Step 3 — Convert files

The per-file mechanics are identical in both flows; the flows differ in ordering and in when the dependency flips.

For each `.marko` component (work **leaf-first**, bottom-up):

1. Read _everything_ that makes up the component: `index.marko`, `component.js` / `component-browser.js` (also `.ts` and `*.component[-browser].js` variants), `marko-tag.json`, `browser.json`, adjacent `style.*` files, plus every call site of the tag.
2. Classify its shape and open the matching worked example in [`patterns.md`](./patterns.md): inert/presentational · stateful · controllable (state initialized from input + change events) · element refs / imperative DOM · third-party library host · attribute tags · async (`<await>`) · split component · legacy widget.
3. Translate template syntax first, then the component class, using [`api-mapping.md`](./api-mapping.md). Everything from `component.js` / `component-browser.js` folds into the one `.marko` file; delete the JS files, `marko-tag.json` (types move into `export interface Input`), and `browser.json`.
4. Convert state mutations to **immutable updates** (`items = items.concat(x)`, `obj = { ...obj, k: v }`). Marko 6 reactivity is assignment-driven; `setStateDirty`-style mutation has intentionally no equivalent. Marko 6 serializes to the browser only what client-side code actually references (the compiler computes serialization reasons/intersections per value) — so keep class instances, DOM nodes, and server-only resources out of values that browser code touches.
5. Update call sites: `on-foo("method")` → `onFoo=fn` function attributes, `renderBody` → `content`, `key=` on loop children → `by=` on `<for>`. In the incremental flow, Class API parents keep working for attributes and body content (the interop bridges `renderBody`/`content` and props automatically), but any `on-foo("method")` bindings on the converted child **must** flip to function attributes in the same change — Class-style event bindings on a Tags API child compile but never fire (see `interop.md`).
6. Place the file correctly. Incremental flow: converted files should live in a `tags/` directory or contain an unambiguous Tags signal; add a `// use tags` comment to converted route/page files that could be ambiguous. Never leave a file with signals from both APIs — that is a compile error, not a preference.
7. Verify (Step 4) before moving to the next component.

### Flow A — Full migration finish line

When every `.marko` file uses the Tags API and the inventory greps from Step 1 return zero:

1. Rename remaining `components/` directories to `tags/` (Marko 6 discovers relative tags from `tags/` only). For **published tag libraries**, move `marko.json` from `"tags-dir"` to `"exports"` — `exports` exists only for packages consumed from `node_modules`; `tags-dir` still works in both majors but is discouraged, and apps shouldn't need a `marko.json` at all.
2. Migrate server entry points and any `template.render(input, cb/stream)` / `renderSync` / `renderToString` / `out.*` usage per "Template & server API" in `api-mapping.md`. Remove `marko/components` `init()` calls and `marko/node-require` (→ `@marko/compiler/register`); explicit `<init-components>` / `<await-reorderer>` tags should already be gone from Step 2.
3. Swap the dependency to `marko@^6` using the project's package manager (npm/pnpm/yarn — detect via the `packageManager` field or the lockfile; e.g. `npm rm marko && npm i marko@^6`, and use `marko@next` while 6 is on the `next` dist-tag). `@marko/compiler` stays 5.x — that is expected; only the `marko` runtime major changes.
4. Delete now-inert `// use tags` / `// use class` comments, run the full verification suite, and diff SSR output against the Step 2 baseline.
5. Grep once more for stragglers. Unambiguous Class API tokens must be gone from app code: `renderBody`, `getEl(`, `subscribeTo`, `:scoped`, `no-update`, `<await-reorderer`, `legacy-components`. Broad patterns are review lists, not mandatory zeroes — inspect each match, since they also occur in unrelated code: `key=` (matches `apiKey=` etc.), `\bout\.`, `\bcomponent\.`, `\.emit\(`.

### Flow B — Incremental migration loop

Read [`interop.md`](./interop.md) first. The mechanism that makes per-file adoption safe is the compiler's **Class/Tags feature detection** — each `.marko` file is classified individually, so drive the classification deliberately instead of leaving files ambiguous:

1. Files under a `tags/` directory are seeded **Tags API**.
2. An exact `// use tags` or `// use class` comment pins a file explicitly.
3. Class syntax anywhere in the file (a `$ scriptlet`, `class {}`, `style {}` block, attribute arguments like `on-click("m")`, or `<while>`/`<macro>`/`<include-*>`/…) marks it Class; Tags syntax (a tag variable, `:=`, or `<let>`/`<const>`/`<id>`/`<return>`/…) marks it Tags. Signals from **both** APIs in one file are a compile error.
4. A file with no signals is Tags only when _no_ `components/` directory is discoverable anywhere — otherwise it silently defaults to **Class**.

(Full rules, escape hatches, and troubleshooting: `interop.md`.) In practice: converted and new components go under `tags/`, shells and route files get pinned with a comment when signal-free, and each conversion is completed fully so no file mixes APIs.

Then repeat, in increments sized to one subtree/page per PR:

1. Pick the next subtree (a page or a self-contained component cluster). Prefer converting **whole subtrees** so Tags components mostly reference Tags components — every Class↔Tags boundary costs compat runtime and serialization.
2. Convert leaf components of that subtree first (inert/presentational ones are nearly free), parents next, using Step 3 mechanics. Route/page/layout files flip last, once their whole subtree is Tags — flipping a shell early maximizes boundary crossings below it.
3. Do not put an `<await>`/async boundary across the API seam: a pending promise crossing the compat layer throws `Cannot serialize promise across tags/class compat layer`. Resolve async fully on one side.
4. Ship the increment. Verify SSR + hydration + interactions on the affected pages (Step 4).
5. When the last Class file is gone, run the Flow A finish line.

New code during the migration goes in `tags/` directories and uses the Tags API from day one.

## Step 4 — Verify each change

- **Build + typecheck**: run the app build; if TS/jsconfig is set up, run `mtc` (`@marko/type-check`). Format with `prettier` (v3 `prettier-plugin-marko` handles both syntaxes).
- **Tests**: run the project's suite. `@marko/testing-library` supports both runtimes; update `rerender`-era assertions to reflect that Marko 6 batches updates (await a microtask / use `find*` queries).
- **SSR parity**: render the affected page server-side and diff against the baseline HTML. Expect attribute-order/comment-marker noise; investigate _content_ differences.
- **Hydration**: load the page in a browser; check the console for hydration/serialization errors and verify every interaction on the page (clicks, inputs, focus) still works. In mixed apps also confirm Class children inside Tags parents come alive (buttons actually respond, not just render).
- **Common regressions to hunt**: state that silently stopped updating (mutation instead of assignment), event payload shape changes (`emit("change", a, b)` → single object argument conventions), lost `:scoped` id uniqueness (→ `<id>`), form elements fighting Marko over state (→ change handlers / `:=`), `<select>`/`checked` behavior, and `no-update` regions that relied on Marko _not_ touching third-party DOM (→ `<lifecycle>` owning a container element).

## Renamed / removed quick list

The ten highest-frequency rewrites (full tables in `api-mapping.md`):

| Marko 5                                                             | Marko 6                                                                           |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `$ const x = ...;` scriptlet                                        | `<const/x=...>` (derived) or `<let/x=...>` (mutable)                              |
| `class { onCreate() { this.state = { n: 0 } } }` + `state.n`        | `<let/n=0>` per state key                                                         |
| `this.state.n = v` / `setState("n", v)`                             | `n = v` (plain assignment)                                                        |
| `on-click("handleClick")` / `once-click(...)`                       | `onClick() { ... }` or `onClick=fn`                                               |
| `this.emit("select", x)`                                            | call `(input.onSelect \|\| null)?.(x)` — events become function props             |
| `<${input.renderBody}/>` / `renderBody`                             | `<${input.content}/>` / `content`                                                 |
| `key="el"` + `this.getEl("el")`                                     | tag variable `<div/el>` … `el()` (browser getter)                                 |
| `onMount`/`onUpdate`/`onDestroy`                                    | `<script>` (+ `$signal` for cleanup); `<lifecycle>` only for imperative libraries |
| `key=` on loop children                                             | `by=` attribute on `<for>`                                                        |
| `component-browser.js` as a bundling trick / `typeof window` guards | `client import` / `server` statements (backported to Marko 5.38+)                 |
| `out.global`                                                        | `$global`                                                                         |

## Escalate to the user

Stop and ask (with your analysis) when you hit:

- `shouldUpdate`, `update_<state>` handlers, `forceUpdate`-driven flows, or `no-update` regions whose _behavior_ (not just syntax) has no 1:1 equivalent — the replacement is a design decision.
- Public component APIs consumed by code you can't see (published libraries): event rename (`on-change` → `onChange`) and payload shape changes are breaking for consumers.
- `out.beginAsync` / manual `out.write` streaming code, custom taglib `transformer`/codegen hooks, or `<module-code>` — these need bespoke redesign.
- Anything where SSR baseline diffs show content changes you cannot explain.
