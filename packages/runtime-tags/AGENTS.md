# Marko 6 (runtime & translator)

Published as `marko@6` and `@marko/runtime-tags`. Contains both the runtime and the Babel translator that generates code against it; most changes touch both halves plus test fixtures.

## Layout

| Directory         | Purpose                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `src/common/`     | Types, accessor enums, helpers shared by both runtimes                                                                 |
| `src/dom/`        | CSR runtime: scopes, signals, control flow, resume, scheduling                                                         |
| `src/html/`       | SSR runtime: streaming writer, value serializer, resume boilerplate                                                    |
| `src/*/patches/`  | Persisted pages: each runtime's patch helpers, in files named like the runtime's own                                   |
| `src/translator/` | Babel translator: `core/` (built-in tags), `visitors/` (per AST node), `util/` (analysis), `interop/` (Marko 5 compat) |

Entries: `src/dom.ts`, `src/html.ts`, `src/translator/index.ts`. Type stubs for core tags: `tags/*.d.marko`.

## Architecture

[CONTEXT.md](CONTEXT.md) is the canonical glossary — use its terms (and respect
its _Avoid_ lists) in code, comments, and discussion. Read the
[resume architecture guide](RESUMABILITY.md) before changing reference analysis,
signals, serialization, resume, lazy loading, or generated DOM output; it traces
the compiler/runtime model end to end and routes each concept to its code.

Principles that decide most proposals:

- Client code, serialized data, and registrations ship only where analysis shows they can run or update. Decide at compile time where possible; only what it cannot decide for every instance (callers that differ) falls to the server per instance, from the write guards it already writes. A static artifact (a shared id, a constant, an unconditional registration) never stands in for a per-instance decision; a value derivable from code the client bundles is never serialized.
- Code ships because code that ships references it, never by force. Never keep a call or declaration for its side effect (a registration, a stamp) or to make an optimized build work, unless it is droppable together with its value: a kept value pins its whole reference graph (signals, joins, renders, runtime). Deliver the fact the client needs instead (serialized data or a compiler literal). An unreferenced top-level declaration in an optimized bundle snapshot is this bug.
- Judge a kept thing by its reachable graph, never a fixture's bytes (fixtures pass a `<em>` where apps pass a subtree): list what it references and whether something else already keeps it. What grows with what callers pass (content and its subtree) or with the tree below is unbounded and blocks: pass content by reference and register only bounded work. Per-template code grows with the app and the runtime is fixed, so never bundle signal graph to save runtime or wire.
- No cliff at what analysis cannot see: real apps have dynamic tags and templates reached through JS. Prefer a design whose cost stays local to the unanalyzable site, or is near zero everywhere, over a gate that falls back app-wide, and measure the conservative path (what one unknown dynamic tag near the root forces). A template reached only through a JS module may get lesser support, with no code spent on it.
- Every emitted token is used. For each shape a change emits (a parameter, `$` placeholder, key, wrapper, argument, init), count its uses in the optimized snapshots against its emissions; anything unused goes. The serializer's conventions win (it drops a key it fills in later rather than holding it with a placeholder). An id or accessor repeated in one generated expression, or two calls differing only by a wrapper, becomes one call taking each argument once.
- Developer mistakes and build contracts (an id the compiler registered) are `MARKO_DEBUG` invariants: no production check, no fixture faking the violation. Production rejects or falls back only for conditions found at run time (another build, a cut or failed response, a protocol error). A case valid Marko reaches that the runtime cannot handle is a bug to fix, never a rejection.
- An optimization may take any shape that idiomatic Marko code cannot observe.
- HTML output targets what browsers parse, not validators.
- No API may require `import "marko"`, and nothing in the output is specific to one bundler.

## Translator

The compiler phase contract is strict:

| Phase       | Contract                                                                                                                           |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Parse       | Create the initial hybrid Marko/Babel AST.                                                                                         |
| `migrate`   | Apply userland and translator-provided Marko-to-Marko codemods that may be written back to disk.                                   |
| `transform` | Apply typically userland Marko-to-Marko codemods that affect compilation only and must never be written back.                      |
| Pre-analyze | Technically part of `transform`; normalize/simplify Marko before analysis when the analyzer or translator needs a canonical shape. |
| `analyze`   | Annotate the AST, usually via `node.extra`, and compute output-neutral graph data: bindings, signals, ids, reasons.                |
| `translate` | Convert Marko to JavaScript for the configured `dom` or `html` output.                                                             |

Everything through `analyze` is cached and reused across outputs. Therefore:

- Mutating AST structure during `analyze` is an anti-pattern; perform reshaping in pre-analyze.
- Analyze records facts about the template, never nodes. Never retain an AST node or `NodePath` across phases, including in `node.extra` (or program extra/`Section`/`Binding` fields): the analyzed AST is cached and `t.cloneNode`d per output, so a stored node points at the cache while translate walks a clone, and reads go stale and identity checks fail silently. The metadata shell itself (`node.extra` objects, `Section`s, `Binding`s) is shared by reference across clones: record flags, ids, and `Section`/`Binding` references there and resolve current nodes within the current phase. A fact about a child whose metadata does not exist yet is flagged from an analyze `exit` hook (children are analyzed by then), not by storing the child node.
- Never make output-specific decisions before `translate`. Branch on `dom`/`html` only while translating.
- Reach the current compilation through `getFile()`/`getProgram()` (from `@marko/compiler/babel-utils`), never `path.hub.file`: the hub chain re-derives what the compile state already tracks and reads inconsistently across contexts. There are currently zero `hub.file` uses in the translator; keep it that way.
- `file.metadata.marko` is public compiler output (returned from the top-level compile APIs): never route internal channels through it. Internal analyze products belong on the extras shell (program extra, `Section`, `Binding`); metadata carries only deliberately public facts.
- Naming follows the same contract: analyze metadata (Binding/Section/`node.extra` fields) records **what the template does** — observed facts, in template terms (sources, reads, uses, shapes). Translate names its **conclusions** — decisions, policies, and output mechanisms (ownership, wire channels, masks). A shared field named after a decision (e.g. server/client "owned", "required") is a smell: name the observation and derive the decision where it is made. Never coin a term the compiler does not already use; a new concept gets a `CONTEXT.md` entry first.
- Keys on `node.extra` say who may use them: a symbol key is one module's private state and is never exported; a fact any other module reads is a string field declared on its node kind's extra (`MarkoTagExtra`, `FunctionExtra`, or `NodeExtra` for an expression root).
- The translator has no `MARKO_DEBUG` checks: its published build drops them, so a check guards only local development. Design the invariant out instead: derive the value from what makes it true, type it so a violation does not compile, or leave misuse no path.
- Gather in analyze, act in translate. There are currently zero Babel `traverse` calls in the translator; keep it that way. No whole-program scan (`forEachSection`, a `getBindings()` or `getReadsByExpression()` loop) exists only to link a runtime feature, collect a set, or record a decision after the fact: what needs a feature pulls it in by reference where its code is emitted, or the step that already decides it does. Extend the fact that exists (`Section`, a binding's reads/aliases/sources, `node.extra`, reasons, tag-name and known-tag analysis), and after adding one, check what else can use it. Compile a template the same wherever it renders: no special case for a position (inside `@catch`) or one tag when the fact is general (any change handler, not only `<let>`'s).
- Analyze facts settle once. `Binding.reads` and `Binding.pruned` are complete only once `finalizeReferences` runs at program analyze `exit`, and reasons once `solveReasons` follows, so tag and expression analyze visitors never read them (read an expression's references through `getReferencedBindings`/`getLazyBindings`, which finalize sets). The exception: a known tag's call site reads its callee's params tree during analyze, complete for another template or a `<define>` called from outside its body; a recursive tag waits for program exit (`analyzeRecursiveTags`). A fact about the template is a field (`Section`, `Binding`, `node.extra`, the program's extra), written once it is final, never un-set, and never read for a fact it was not built for. `createAnalysisState` holds analyze scratch and memoized decisions; `createOutputState` holds what one output builds; the `…SectionState` forms key either by section.
- Record one fact per field. A union or enum whose members each combine answers to independent questions makes readers re-derive them and lets a new member slip into negative tests. Drop detail only where no reader needs it (re-walking reads to recover it means too much went), and never copy what a binding or section carries (merged sources, the reverse of `branchExpr` ↔ body). A decision derived only from analysis facts is memoized once per analysis, keyed by the analyzed root section every output's clone shares.
- A template decides only what it knows. A decision depending on a param belongs to the caller, which reads the callee's analysis; a child guessing about its callers over-links features. A child-side or program-wide fallback is only for a truly unknown template (a dynamic tag's input, a `<return>` to an unknown caller). A compile-time condition (`state` sources, "some caller") that can differ per instance because a param or caller decides is a write guard, not a static choice.
- A program-wide effect (`isInteractive`, an imported registration) follows the reason that needs it, never a feature's presence. Only an unconditional reason makes a template a bundle root: a value written only while a caller changes params ships with that caller, which imports the template.
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

- `callRuntime("_name", ...args)` (`util/runtime.ts`) references runtime helpers with automatic imports; DOM helpers listed in `pureDOMFunctions` get `/*@__PURE__*/`. Purity comes only from that list, never added or stripped per call site (grep a diff for `leadingComments` and `addComment`).
- Validate early: core tags share their checks and wording from `util/assert.ts` (`assertOnlyValueAttr`, `assertHasBody`, `assertHasVar`, `assertNoSpreadAttrs`, …), while `assertNoArgs` / `assertNoParams` / `assertNoVar` / `assertAllowedAttributes` come from `@marko/compiler/babel-utils`. Compile errors use `path.buildCodeFrameError` with backticked names and a markojs.com docs link — `util/assert.ts` is the canonical style.
- `util/marko-config.ts` provides `isOutputHTML` / `isOutputDOM` / `isOptimize`.
- `util/optional.ts` (`Opt`/`Sorted` list algebra) underpins reference tracking; a list a `Sorted` instance builds (`bindingUtil`, `propsUtil`, `sectionUtil`, `sourcesUtil`) is looked up by binary search, so it is typed `SortedOpt` and only that instance can write it (`push`/`concat` results do not type-check into one). Work on these lists with its helpers (`forEach`, `some`, `reduce`, `filter`, the `Sorted` utils): build-then-`reverse` and dedupe-on-add are smells; `util/known-tag.ts` holds the custom/dynamic tag input contracts. Native element work lives in `visitors/tag/native-tag.ts` (with `common/helpers.ts` and `util/tag-facts.ts`).

## Runtime conventions

- **`_name` exports** are runtime API called by generated code — public to codegen, not to app authors. Renames must update `callRuntime` call sites and `pureDOMFunctions`. A new helper joins its family's shape (`_<kind>_resume`) and reuses CONTEXT.md's words.
- **`MARKO_DEBUG`** gates all validation, descriptive names, and detailed error messages (`if (MARKO_DEBUG) { ... }`); builds strip these. Write for the optimized build: debug-only code never leaves it a temporary, `!`, branch or helper, so return directly. Debug differs from production only in names, validation and messages, never in behavior, so a page that works in one build works in the other. Production errors: `throw MARKO_DEBUG ? new Error(msg) : new Error()`. It is `true` for code loaded through the `~ts` register hook; fixture bundles define it per mode (`false` under optimize). Runtime error helpers live in `common/errors.ts`.
- **`.debug.ts` pairs**: source imports the `.debug` module (e.g. `common/types.ts` imports `./constants/accessor-prop.debug`); the production build remaps `X.debug` → `X.ts`. Both files must export identical member names with unique string values. `src/__tests__/debug-pairs.test.ts` checks every pair because the types cannot (each module's `Value` is `typeof import("./<itself>")` and `translator/util/get-accessor-enums.ts` casts `as any`): a member added to one half would type-check and be `undefined` in an optimize build. A runtime record that needs readable debug keys uses a pair, extending the module for the object type that owns the property (repeated short values compress better).
- **Optional feature enablement** (tree-shakable runtime API) has two patterns:
  - **`src/{dom,html}/**/*.feat.ts`** are compiler-injected side-effect modules for behavior a referenced import cannot keep alive (catch handling, controllable registration). The build emits them as extra entries of their runtime's bundle — a shared chunk keeps one state instance, so they import runtime internals directly. A feature body is direct registry/property assignments (plus at most one installer call, e.g. `installCatch`); the compiler emits it once per program (typed by `DOMRuntimeFeature`): `linkRuntimeFeature` from analyze (the page entry imports it when the template's module never loads, the dom module otherwise), or `importRuntimeFeature` for a need only translate decides. `lazy.feat` is the exception: `translator/util/entry-builder.ts` › `builder.build` imports it (via `getRuntimeFeatureImport`) into a resuming entry that reaches a lazy import, since resume needs its latch even when no bundled template references lazy runtime.
  - **Definition-site wrappers** gate behavior on a helper's own retention: `export const _if = /*@__PURE__*/ withBranches(...)`.
  - Latches are `let`s written only by their enabler (`branchesEnabled`, `catchEnabled`) so bundlers fold latch and guarded code away together; object-property flags defeat that analysis and re-inflate resume bundles.
  - Never statically import control-flow or a `.feat` module from a main-graph module (queue, resume, load) — it fuses the feature into every bundle.
  - Base helpers and the writer take no feature-only params, hooks, or flags (a feature-only param goes last). A `.feat` imports the features it always needs.
- **Size idioms** (client runtime): inline a helper, `const`, or `let` used once, and repeat a short member read rather than binding it (gzip favors repetition). Prefer truthiness with `0`/`1` over `undefined`/booleans, default params, `||=`, `for (let i = n; i--;)`, and `else` over an early `return`. Give every parameterless arrow an unused parameter, consistently, since `e=>` minifies a byte under `()=>`: `(_?: never) =>` where callers pass nothing, else typed as what they pass; generated client code takes `getUnusedParamIdentifier()` (not an IIFE, which the minifier inlines only bare), and the inlined runtimes a free letter. Tell nodes apart with `nodeType >`/`<` against the `NodeType` enum (a marker is `> NodeType.Element`), never the DOM's constants. Apply an idiom everywhere at once, and where two forms build the same, leave the existing one.
- **Weighing bytes**: measure min and brotli on the optimized build (`build:sizes`). Brotli usually decides, but a clear min drop with negligible brotli change is a win, and a per-fixture brotli change within ±3 B is noise (take the smaller min). A byte costs more the more often an app pays it: once (the runtime), per template (generated code), per rendered instance (serialized data, per loop row). A fixture's delta shows only the one-time cost, so project per-template savings to 1,000 templates: a few bytes per template against a one-time runtime cost wins even if fixture pages grow. Watch for wins at the median that grow the smallest pages, and judge a `dom/` hoist by `sizes.json` across split builds (a lazy chunk may have to import what it hoists).
- **Hot paths** (SSR writer, serializer, resume, and any walk or apply step, which is O(n) over what it touches): never `delete`, copy with spread/rest, `splice`/`unshift`/`reverse`, allocate per call or per moved item without a measured need (spreading objects to compare, splitting the same string each run), take rest params per tag, or create a promise or closure unconditionally. Never post-process output with string `replace`/`split`/`indexOf`; the serializer appends valid JavaScript. Keep object shapes consistent; put cheap checks first.
- **Effects** carry no order (CONTEXT.md _Effect_): each runs once its run's renders are done, so the DOM it reads is final. Never spend bytes or work holding an effect order, and prove an effect change by when and how often each effect runs, never by log order; a fixture asserting an order is a finding.
- **Wire bytes**: before serializing a link or field, derive it from what the client already knows (walk and insertion order, id order). Rare tuple slots go last so trailing-empty trimming drops them. Keys the compiler generates (accessors, entry keys) are identifier-safe in optimized output, so the serializer writes them unquoted; only a user-supplied name that is not (`data-x`, `--var`) may force quotes.
- **Existing mechanisms**: use the runtime's own (`queueRender`, `queueEffect`, `queueAsyncRender`; `common/opt.ts` `toArray`/`forEach`/`push`/`concat` over an open-coded `Array.isArray`) rather than raw `queueMicrotask`/`setTimeout`, a new queue, or an observer. Work around no browser behavior with hacks (temporary attributes, focus juggling, guessing a browser's order); verify a browser claim with a probe in both Chromium and Firefox first.
- Named/top-level functions use `function` declarations; arrows only for closures that must capture or for wrapped feature helpers (smaller output). Extract non-capturing closures into named file-level functions.

## Testing

Fixture-based snapshot tests driven by `src/__tests__/main.test.ts`. Fixtures live in `src/__tests__/fixtures/`, plus `fixtures-interop/` (Marko 5 ↔ 6 mixing, suite name `translator-interop`). A dir suffixed `.skip` is ignored.

From the repo root:

```sh
pnpm test                                                            # whole suite, fanned across CPU cores
pnpm test -- --grep "runtime-tags/translator <fixture> "             # one fixture (note trailing space)
pnpm run test:update -- --grep "runtime-tags/translator <fixture> "  # regenerate its snapshots
pnpm test -- --grep "translator-interop"                             # interop suite (run after base suite passes)
```

Iterate scoped, then run `pnpm test` for everything; it fans across cores and reports every failure. Repeating a grep as `pnpm run test:serial -- --grep "..."` runs it in one process, with `bail: true` and live output, for a debugger or a clean stack trace.

### Fixture anatomy

```
fixtures/<name>/
  template.marko    # entry (required); custom tags under tags/
  test.ts           # optional: export const config: TestConfig = { ... }
  sizes.json        # generated compiled-size tracking
  __snapshots__/    # generated + auto-pruned by test:update; never edit or delete by hand
    dom.bundle[.debug].js       # compiled CSR output
    html.bundle[.debug].js      # compiled SSR output
    render[.debug].md           # per-step rendered HTML + granular mutation log + `## Console` output
    writes[.debug].html         # SSR stream chunks (joined by <!-- FLUSH -->)
    diagnostics[.debug].md      # debug-only meta.diagnostics (warnings/deprecations)
    error-compile-{html,dom}[.debug].txt   # expected compile failure (error_compiler)
    {ssr,csr}.error[.debug].txt            # expected render failure (error_html/error_dom)
```

Adding or removing a recoverable diagnostic or deprecation therefore fails a `diagnostics.md` snapshot in every fixture that carries one.

`TestConfig` (see `main.test.ts`): `steps` (`[initialInput, ...]` where later steps are input updates, `(container) => {}` interactions, or async `Wait`/`Flush`/`Throws` controls), `error_compiler` (expect compile failure), `error_html` / `error_dom` (expect a render failure), `equivalent: false` (separate `render-ssr`/`render-csr` snapshots), `embedded`, `load_order` / `reject_load` (lazy-chunk ordering and failure), `fix_guide`, `skip_optimize` / `skip_dom` / `skip_html` / `skip_csr` / `skip_ssr`, `skip_parity` (debug intentionally logs a diagnostic optimize cannot), `runtime_id`. Each fixture runs in `debug` and `optimize` modes; CSR only runs in `debug`.

To add a fixture: create the dir + `template.marko` (+ `test.ts` with steps exercising the behavior), run `test:update` scoped to it, then **read the generated snapshots as part of your change** — the mutation log in `render.md` shows update granularity (an unexpected extra `UPDATE:`/re-render is a regression), and the `.bundle.js` diff shows generated-code cost: lost or added `/*@__PURE__*/`, two ids or registrations for one act, a helper kept by force, anything that grew (a fixture's `files` sizes count unminified code, so annotations show there). Name a fixture for the behavior it pins, not the repro that found it; it fails without the change, uses current syntax (never deprecated features), and gets async values from `__tests__/utils/resolve.ts` (`resolveAfter`, `rejectAfter`). The summary names each changed snapshot family and why it changed.

In a patch fixture's inputs, `SECRET_…` marks a value the page must never send: the ssr test fails when the document's scripts or a patch carry one the page doesn't render (`UNRENDERED_…` marks one that may ship unrendered, such as a `false` class key).

## Workflows

**New/changed core tag** (see the `<show>` tag commit for a full example):

1. `translator/core/<tag>.ts` + register in `core/index.ts` (and `util/is-core-tag.ts`), and give it an entry in `util/tag-facts.ts`.
2. Runtime helpers in `src/dom/` / `src/html/`, exported from `src/dom.ts` / `src/html.ts`; add to `util/runtime.ts` lists as needed.
3. Several small fixtures covering static values, dynamic updates, nesting, and interaction with `<for>`/`<if>`.
4. `pnpm run change` — user-facing changes need a changeset.
5. Update `cheatsheet.md` (the LLM syntax reference shipped in the published package) when the change affects user-facing syntax, idioms, or guidance. Keep it dense: a line earns its place only by preventing a real mistake.
6. Expect broad snapshot/`sizes.json` churn and an update to `packages/runtime-class/test/taglib-lookup/fixtures/getTagsSorted/expected.json` (interop taglib lookup).

**Changing generated output**: iterate with `pnpm run compile -- -o dom -d file.marko` (and `-o html`), then `test:update` and audit snapshot diffs — output shape changes ripple through hundreds of fixtures; verify a sample by hand, don't rubber-stamp.

**Changing runtime behavior**: find the covering fixtures by grepping `__tests__/fixtures` for the runtime helper or syntax; extend `steps` before touching the runtime so the mutation log captures the before/after.

## Gotchas

- `translator/util/bindings.ts` imports `toAccess` from `html/serializer.ts` — serializer key encoding changes affect the translator.
- Adding an accessor enum member: keep the `src/common/constants/*[.debug].ts` pair in lockstep (same members, char vs. readable string values).
- Size regressions count as review findings: check the fixture `sizes.json` diffs and root `.sizes.json` (updated by the pre-commit hook).
- Language semantics questions (what a tag/attribute should do) are answered by the docs, not inferred: <https://markojs.com/llms.txt>.
