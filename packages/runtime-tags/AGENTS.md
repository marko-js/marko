# Marko 6 (runtime & translator)

Published as `marko@6` and `@marko/runtime-tags`. Contains both the runtime and the Babel translator that generates code against it; most changes touch both halves plus test fixtures.

## Layout

| Directory         | Purpose                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `src/common/`     | Types, accessor enums, helpers shared by both runtimes                                                                 |
| `src/dom/`        | CSR runtime: scopes, signals, control flow, resume, scheduling                                                         |
| `src/html/`       | SSR runtime: streaming writer, value serializer, resume boilerplate                                                    |
| `src/translator/` | Babel translator: `core/` (built-in tags), `visitors/` (per AST node), `util/` (analysis), `interop/` (Marko 5 compat) |

Entries: `src/dom.ts`, `src/html.ts`, `src/translator/index.ts`. Type stubs for core tags: `tags/*.d.marko`.

## Architecture

[CONTEXT.md](CONTEXT.md) is the canonical glossary — use its terms (and respect
its _Avoid_ lists) in code, comments, and discussion. Read the
[resume architecture guide](RESUMABILITY.md) before changing reference analysis,
signals, serialization, resume, lazy loading, or generated DOM output; it traces
the compiler/runtime model end to end and routes each concept to its code.

Principles that decide most proposals:

- Client code, serialized data, and registrations ship only where analysis shows they can run or update.
- An optimization may take any shape that idiomatic Marko code cannot observe.
- HTML output targets what browsers parse, not validators.
- No API may require `import "marko"`.

## Translator

The compiler phase contract is strict:

| Phase       | Contract                                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Parse       | Create the initial hybrid Marko/Babel AST.                                                                                         |
| `migrate`   | Apply userland and translator-provided Marko-to-Marko codemods that may be written back to disk.                                   |
| `transform` | Apply typically userland Marko-to-Marko codemods that affect compilation only and must never be written back.                      |
| Pre-analyze | Technically part of `transform`; normalize/simplify Marko before analysis when the analyzer or translator needs a canonical shape. |
| `analyze`   | Annotate the AST, usually via `node.extra`, and compute output-neutral graph data: bindings, signals, ids, serialization reasons.  |
| `translate` | Convert Marko to JavaScript for the configured `dom` or `html` output.                                                             |

Everything through `analyze` is cached and reused across outputs. Therefore:

- Mutating AST structure during `analyze` is an anti-pattern; perform reshaping in pre-analyze.
- Never retain an AST node or `NodePath` across phases, including inside `node.extra` (or program extra/`Section`/`Binding` fields): the analyzed AST is cached and `t.cloneNode`d for each output, so a stored node points at the cache while translate walks a clone — reads go stale and identity checks fail silently. The metadata shell itself (`node.extra` objects, `Section`s, `Binding`s) is shared by reference across clones, so record facts there — flags, ids, `Section`/`Binding` references — and resolve current nodes within the current phase. If the fact concerns a child whose metadata does not exist yet at your visitor, flag it from an analyze `exit` hook (children are analyzed by then) rather than storing the child node for later.
- Never make output-specific decisions before `translate`. Branch on `dom`/`html` only while translating.
- Reach the current compilation through `getFile()`/`getProgram()` (from `@marko/compiler/babel-utils`), never `path.hub.file`: the hub chain re-derives what the compile state already tracks and reads inconsistently across contexts. There are currently zero `hub.file` uses in the translator; keep it that way.
- `file.metadata.marko` is public compiler output (returned from the top-level compile APIs): never route internal channels through it. Internal analyze products belong on the extras shell (program extra, `Section`, `Binding`); metadata carries only deliberately public facts.
- Naming follows the same contract: analyze metadata (Binding/Section/`node.extra` fields) records **what the template does** — observed facts, in template terms (sources, reads, uses, shapes). Translate names its **conclusions** — decisions, policies, and output mechanisms (ownership, wire channels, masks). A shared field named after a decision (e.g. server/client "owned", "required") is a smell: name the observation and derive the decision where it is made. Never coin a term the compiler does not already use; a new concept gets a `CONTEXT.md` entry first.
- Gather in analyze, act in translate. There are currently zero Babel `traverse` calls in the translator; keep it that way. Before adding analysis, find the fact in what exists (`Section`, a binding's reads/aliases/sources, `node.extra`, serialize reasons, tag-name and known-tag analysis) and extend it; after adding one, check what else can use it.
- Analyze facts settle once. `Binding.reads`, `Binding.pruned`, and serialize reasons are complete only once `finalizeReferences` runs at program analyze `exit`, so tag and expression analyze visitors never read them. Hold intermediate analysis in `node.extra` or `createProgramState`, write a `Binding`/`Section` field only when final, never un-set one, and never read a field for a fact it was not built for.
- `util/references.ts` is tag-agnostic: a tag records a generic fact on its expression's `node.extra`, and the analysis reads it without naming the tag.
- Compile-context helpers (`isOptimize`, `isOutputHTML`, `getMarkoOpts`, `callRuntime`) are called where needed, never passed in as overridable parameters. Non-capturing callbacks become named file-level functions here too.

Node visitors live in `visitors/` and are split per phase by `extractVisitors` (`util/visitors.ts`); `visitors/tag/index.ts` dispatches to `native-tag.ts` / `custom-tag.ts` / `dynamic-tag.ts` / `attribute-tag.ts` or a tag definition's own hooks.

Core tags are one file per tag in `core/`, registered in `core/index.ts`:

```ts
export default {
  analyze(tag) { ... },
  translate: translateByTarget({
    html(tag) { ... },
    dom(tag) { ... },
  }),
} as Tag;
```

- `callRuntime("_name", ...args)` (`util/runtime.ts`) references runtime helpers with automatic imports; DOM helpers listed in `pureDOMFunctions` get `/*@__PURE__*/`.
- Validate early: `assertNoSpreadAttrs` / `assertNoTagVarMutation` / `assertNoBodyContent` are local (`util/assert.ts`), while `assertNoArgs` / `assertNoParams` / `assertNoVar` / `assertAllowedAttributes` come from `@marko/compiler/babel-utils`. Compile errors use `path.buildCodeFrameError` with backticked names and a markojs.com docs link — `core/if.ts` is the canonical style.
- `util/marko-config.ts` provides `isOutputHTML` / `isOutputDOM` / `isOptimize`.
- `util/optional.ts` (`Opt`/`Sorted` list algebra) underpins reference tracking; a list a `Sorted` instance builds (`bindingUtil`, `propsUtil`, `sectionUtil`, `sourcesUtil`) is looked up by binary search, so it is typed `SortedOpt` and only that instance can write it (`push`/`concat` results do not type-check into one). Work on these lists with its helpers (`forEach`, `some`, `reduce`, `filter`, the `Sorted` utils): build-then-`reverse` and dedupe-on-add are smells; `util/known-tag.ts` holds the custom/dynamic tag input contracts. Native element work lives in `visitors/tag/native-tag.ts` (with `common/helpers.ts` and `util/is-non-html-text.ts`).

## Runtime conventions

- **`_name` exports** are runtime API called by generated code — public to codegen, not to app authors. Renames must update `callRuntime` call sites and `pureDOMFunctions`.
- **`MARKO_DEBUG`** gates all validation, descriptive names, and detailed error messages (`if (MARKO_DEBUG) { ... }`); builds strip these. It is `true` for code loaded through the `~ts` register hook; fixture bundles define it per mode (`false` under optimize). Runtime error helpers live in `common/errors.ts`.
- **`.debug.ts` pairs**: source imports the `.debug` module (e.g. `common/types.ts` imports `./constants/accessor-prop.debug`); the production build remaps `X.debug` → `X.ts`. Both files must export identical member names with unique string values. `src/__tests__/debug-pairs.test.ts` checks every pair because the types cannot — each module's `Value` is `typeof import("./<itself>")` and `translator/util/get-accessor-enums.ts` casts `as any` — so a member added to only one half would otherwise type-check and show up as `undefined` in an optimize build. A runtime record that needs readable debug keys uses a pair, extending the module for the object type that owns the property (repeated short values compress better).
- **Optional feature enablement** (tree-shakable runtime API) has two patterns:
  - **`src/{dom,html}/**/*.feat.ts`** are compiler-injected side-effect modules for behavior a referenced import cannot keep alive (catch handling, controllable registration). The build emits them as extra entries of their runtime's bundle — a shared chunk keeps one state instance, so they import runtime internals directly. A feature body is direct registry/property assignments (plus at most one installer call, e.g. `installCatch`); the compiler emits it once per program via `importRuntimeFeature` (typed by `DOMRuntimeFeature`). `lazy.feat` is the exception: `translator/util/entry-builder.ts` › `builder.build` imports it (via `getRuntimeFeatureImport`) into a resuming entry that reaches a lazy import, since resume needs its latch even when no bundled template references lazy runtime.
  - **Definition-site wrappers** gate behavior on a helper's own retention: `export const _if = /*@__PURE__*/ withBranches(...)`.
  - Latches are `let`s written only by their enabler (`branchesEnabled`, `catchEnabled`) so bundlers fold latch and guarded code away together; object-property flags defeat that analysis and re-inflate resume bundles.
  - Never statically import control-flow or a `.feat` module from a main-graph module (queue, resume, load) — it fuses the feature into every bundle.
  - Base helpers and the writer take no feature-only params, hooks, or flags (a feature-only param goes last). A `.feat` imports the features it always needs.
- **Size idioms** (client runtime): inline a helper, `const`, or `let` used once, and repeat a short member read rather than binding it (gzip favors repetition). Prefer truthiness with `0`/`1` over `undefined`/booleans, default params, `||=`, `for (let i = n; i--;)`, and `else` over an early `return`. Settle byte questions by measuring with `build:sizes`.
- **Hot paths** (SSR writer, serializer, resume): never `delete`, copy with spread/rest, `unshift`/`reverse`, take rest params per tag, or create a promise or closure unconditionally. Never post-process output with string `replace`/`split`/`indexOf`; the serializer appends valid JavaScript. Keep object shapes consistent; put cheap checks first.
- **Wire bytes**: before serializing a link or field, derive it from what the client already knows (walk and insertion order, id order). Rare tuple slots go last so trailing-empty trimming drops them.
- Named/top-level functions use `function` declarations; arrows only for closures that must capture or for wrapped feature helpers (smaller output). Extract non-capturing closures into named file-level functions.

## Testing

Fixture-based snapshot tests driven by `src/__tests__/main.test.ts`. Fixtures live in `src/__tests__/fixtures/<area>/<name>/` (see [Fixture areas](#fixture-areas)), plus `fixtures-interop/<name>/` (Marko 5 ↔ 6 mixing, suite name `translator-interop`). A dir suffixed `.skip` is ignored.

From the repo root:

```sh
pnpm test                                                            # whole suite, fanned across CPU cores
pnpm test -- --grep " <fixture> "                                    # one fixture (the spaces keep it from matching others)
pnpm test -- --grep "translator <area> "                             # one area
pnpm run test:update -- --grep " <fixture> "                         # regenerate its snapshots
pnpm test -- --grep "translator-interop"                             # interop suite (run after base suite passes)
MARKO_TEST_WRAPPERS=1 pnpm test                                      # also render each fixture inside a host's <if>, <for>, <try>, tag bodies and <define>, which must log alike (~4x slower)
```

Iterate scoped, then run `pnpm test` for everything; it fans across cores and reports every failure. Repeating a grep as `pnpm run test:serial -- --grep "..."` runs it in one process, with `bail: true` and live output, for a debugger or a clean stack trace.

`pnpm run fuzz -- [--seed N] [--count N] [--jobs N]` (`src/__tests__/fuzz/`) generates templates from the shapes past bugs combined (state read across branches, loops and tag bodies, updated by clicks and input) and checks each with no expected output: it must compile, render without errors, log alike when resumed and client rendered (or settle alike when async), and log alike in debug and optimize. A seed reproduces its case; each failure is shrunk and written as a fixture directory under `src/__tests__/fuzz/dist/found/` with its `failure.txt`. Run it after a change to analysis, resume or control flow; a real failure becomes a named fixture (or an agent-feedback item when out of scope).

### Fixture areas

A fixture lives in the area of the behavior it pins (what a fix to it would touch), not of every feature it uses; a fixture outside an area fails the run. Compile errors live with the feature they validate; only generic ones (syntax, tag resolution, imports) go to `diagnostics`.

| Area                                                 | Pins                                                                                                                 |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `if`, `for`, `show`                                  | the control flow tags: branches, rows, keyed moves                                                                   |
| `await`, `try`                                       | async content and streaming; `@catch`/`@placeholder` boundaries and abort                                            |
| `let`, `const`                                       | state and assignment (incl. controllable `<let>`); derived values                                                    |
| `script`                                             | `<script>`, `<lifecycle>`, `$signal`, effect order and cleanup, `<log>`/`<debug>`                                    |
| `custom-tags`, `dynamic-tags`, `attr-tags`, `define` | calling tags: input, body content, params, tag variables, `<return>`; `<${…}>`; `@` attribute tags; `<define>`       |
| `controllable`                                       | bound native attributes and change handlers (`value:=`, `checked:=`, select/textarea/details/dialog)                 |
| `native`                                             | native elements: attributes, class/style, events, spread, refs, text and escaping, `html-*` tags, namespaces, `<id>` |
| `closures`                                           | reactivity across sections: closures, intersections, hoisted reads, pruning and registration                         |
| `resume`                                             | serialization, resume walks and markers, adoption, inert regions, embedding, `$global`, runtime ids                  |
| `lazy`                                               | `import … with { load }` and its triggers, order and failures                                                        |
| `style`                                              | the `<style>` tag                                                                                                    |
| `diagnostics`                                        | compile errors and warnings not specific to one feature                                                              |

Name a fixture `<subject>-<condition>[-<outcome>]` in the codebase's vocabulary: never `basic-*`, a bare number or a repro nickname; `error-*` exactly when it expects an error.

### Fixture anatomy

```
fixtures/<area>/<name>/
  template.marko    # entry (required); custom tags under tags/
  test.ts           # optional: export const config: TestConfig = { ... }
  sizes.json        # generated compiled-size tracking
  __snapshots__/    # generated + auto-pruned by test:update; never edit or delete by hand
    dom.bundle[.debug].js       # compiled CSR output
    html.bundle[.debug].js      # compiled SSR output
    render.md                   # per-step rendered HTML + granular mutation log + `## Console` output, shared by both modes
    writes[.debug].html         # SSR stream chunks (joined by <!-- FLUSH -->)
    diagnostics.md              # debug-only meta.diagnostics (warnings/deprecations)
    error-compile.txt           # expected compile failure (error_compiler), shared by both outputs and modes
    {ssr,csr}.error[.debug].txt # expected render failure (error_html/error_dom)
```

Adding or removing a recoverable diagnostic or deprecation therefore fails a `diagnostics.md` snapshot in every fixture that carries one.

`TestConfig` (see `main.test.ts`): `steps` (`[initialInput, ...]` where later steps are input updates, interactions — `click(selector, index?)` / `type(selector, value, index?)` from `utils/steps.ts`, labeled by their call in `render.md`, or a `(document) => {}` function for anything else — or async `Wait`/`Flush`/`Throws` controls), `error_compiler` (expect compile failure), `error_html` / `error_dom` (expect a render failure), `equivalent: false` (separate `render-ssr`/`render-csr` snapshots; unless a step updates input, where the SSR run stops, the `settled` test still requires both runs to end on the same page once pending work lands), `skip_settled` (the resumed page and client render end apart by design; comment why), `skip_wrapped` (logs differently inside a host's content by design; comment why), `embedded`, `load_order` / `reject_load` (lazy-chunk ordering and failure), `fix_guide`, `skip_optimize` / `skip_dom` / `skip_html` / `skip_csr` / `skip_ssr`, `skip_parity` (debug intentionally logs a diagnostic optimize cannot, so it keeps a separate `render.debug.md`), `runtime_id`. Each fixture runs in `debug` and `optimize` modes; CSR only runs in `debug`.

To add a fixture: create the dir under its area + `template.marko` (+ `test.ts` with steps exercising the behavior), run `test:update` scoped to it, then **read the generated snapshots as part of your change** — the mutation log in `render.md` shows update granularity (an unexpected extra `UPDATE:`/re-render is a regression), and the `.bundle.js` diff shows generated-code cost. Name a fixture for the behavior it pins, not the repro that found it; it fails without the change, uses current syntax (never deprecated features), and gets async values from `__tests__/utils/resolve.ts` (`resolveAfter`, `rejectAfter`). The summary names each changed snapshot family and why it changed.

## Workflows

**New/changed core tag** (see the `<show>` tag commit for a full example):

1. `translator/core/<tag>.ts` + register in `core/index.ts` (and `util/is-core-tag.ts`).
2. Runtime helpers in `src/dom/` / `src/html/`, exported from `src/dom.ts` / `src/html.ts`; add to `util/runtime.ts` lists as needed.
3. Several small fixtures covering static values, dynamic updates, nesting, and interaction with `<for>`/`<if>`.
4. `pnpm run change` — user-facing changes need a changeset.
5. Update `cheatsheet.md` (the LLM syntax reference shipped in the published package) when the change affects user-facing syntax, idioms, or guidance. Keep it dense: a line earns its place only by preventing a real mistake.
6. Expect broad snapshot/`sizes.json` churn and an update to `packages/runtime-class/test/taglib-lookup/fixtures/getTagsSorted/expected.json` (interop taglib lookup).

**Changing generated output**: iterate with `pnpm run compile -- -o dom -d file.marko` (and `-o html`), then `test:update` and audit snapshot diffs — output shape changes ripple through hundreds of fixtures; `pnpm run digest` prints each repeated hunk once with the fixtures it hit, behavior (`render*.md`, errors) first. Verify a sample by hand, don't rubber-stamp.

**Changing runtime behavior**: find the covering fixtures by grepping `__tests__/fixtures` for the runtime helper or syntax; extend `steps` before touching the runtime so the mutation log captures the before/after.

## Gotchas

- `translator/util/references.ts` imports `toAccess` from `html/serializer.ts` — serializer key encoding changes affect the translator.
- Adding an accessor enum member: keep the `src/common/constants/*[.debug].ts` pair in lockstep (same members, char vs. readable string values).
- Size regressions count as review findings: check the fixture `sizes.json` diffs and root `.sizes.json` (updated by the pre-commit hook).
- Language semantics questions (what a tag/attribute should do) are answered by the docs, not inferred: <https://markojs.com/llms.txt>.
