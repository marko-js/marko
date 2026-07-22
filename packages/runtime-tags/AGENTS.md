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
- Never retain an AST node or `NodePath` across phases, including inside `node.extra`: nodes are cloned between phases. Store durable metadata/ids and resolve current nodes within the current phase.
- Never make output-specific decisions before `translate`. Branch on `dom`/`html` only while translating.

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
- Validate early with `assertNoArgs` / `assertNoParams` / `assertNoSpreadAttrs` (`util/assert.ts`). Compile errors use `path.buildCodeFrameError` with backticked names and a markojs.com docs link — `core/if.ts` is the canonical style.
- `util/marko-config.ts` provides `isOutputHTML` / `isOutputDOM` / `isOptimize`.
- `util/optional.ts` (`Opt`/`Sorted` list algebra) underpins reference tracking; `util/known-tag.ts` holds native HTML tag/attribute metadata.

## Runtime conventions

- **`_name` exports** are runtime API called by generated code — public to codegen, not to app authors. Renames must update `callRuntime` call sites and `pureDOMFunctions`.
- **`MARKO_DEBUG`** gates all validation, descriptive names, and detailed error messages (`if (MARKO_DEBUG) { ... }`); builds strip these. It is `true` in tests via the `~ts` register hook. Runtime error helpers live in `common/errors.ts`.
- **`.debug.ts` pairs**: source imports the `.debug` module (e.g. `common/types.ts` imports `./accessor.debug`); the production build remaps `X.debug` → `X.ts`. Both files must export identical member names — mirror any accessor enum change in `accessor.ts` **and** `accessor.debug.ts` (the other pair is `html/inlined-runtimes[.debug].ts`).
- **Self-modifying functions**: features like `_enable_catch` or `enableBranches` reassign module-level bindings on first call so unused features cost nothing. Preserve this pattern; don't "simplify" it away.
- Named/top-level functions use `function` declarations; arrows only for closures that must capture. Extract non-capturing closures into named file-level functions.

## Testing

Fixture-based snapshot tests driven by `src/__tests__/main.test.ts`. ~800 fixtures in `src/__tests__/fixtures/`, plus `fixtures-interop/` (Marko 5 ↔ 6 mixing, suite name `translator-interop`). A dir suffixed `.skip` is ignored.

```sh
npm test -- --grep "runtime-tags/translator <fixture> "  # one fixture (note trailing space)
npm run test:update -- --grep "runtime-tags/translator <fixture> "  # regenerate its snapshots
npm test -- --grep "translator-interop"                  # interop suite (run after base suite passes)
```

Run scoped; the full suite is slow and `bail: true` stops everything at the first failure anyway.

### Fixture anatomy

```
fixtures/<name>/
  template.marko    # entry (required); custom tags under tags/
  test.ts           # optional: export const config: TestConfig = { ... }
  sizes.json        # generated compiled-size tracking
  __snapshots__/    # generated + auto-pruned by test:update; never edit or delete by hand
    dom.bundle[.debug].js       # compiled CSR output
    html.bundle[.debug].js      # compiled SSR output
    render[.debug].md           # per-step rendered HTML + granular mutation log
    writes[.debug].html         # SSR stream chunks (joined by <!-- FLUSH -->)
```

`TestConfig` (see `main.test.ts`): `steps` (`[initialInput, ...]` where later steps are input updates, `(container) => {}` interactions, or async `Wait`/`Flush`/`Throws` controls), `error_compiler` (expect compile failure), `equivalent: false` (separate `render-ssr`/`render-csr` snapshots), `skip_optimize` / `skip_dom` / `skip_html` / `skip_csr` / `skip_ssr`, `runtime_id`. Each fixture runs in `debug` and `optimize` modes; CSR only runs in `debug`.

To add a fixture: create the dir + `template.marko` (+ `test.ts` with steps exercising the behavior), run `test:update` scoped to it, then **read the generated snapshots as part of your change** — the mutation log in `render.md` shows update granularity (an unexpected extra `UPDATE:`/re-render is a regression), and the `.bundle.js` diff shows generated-code cost.

## Workflows

**New/changed core tag** (see the `<show>` tag commit for a full example):

1. `translator/core/<tag>.ts` + register in `core/index.ts` (and `util/is-core-tag.ts`).
2. Runtime helpers in `src/dom/` / `src/html/`, exported from `src/dom.ts` / `src/html.ts`; add to `util/runtime.ts` lists as needed.
3. Several small fixtures covering static values, dynamic updates, nesting, and interaction with `<for>`/`<if>`.
4. `npm run change` — user-facing changes need a changeset.
5. Update `cheatsheet.md` (the LLM syntax reference shipped in the published package) when the change affects user-facing syntax, idioms, or guidance.
6. Expect broad snapshot/`sizes.json` churn and an update to `packages/runtime-class/test/taglib-lookup/fixtures/getTagsSorted/expected.json` (interop taglib lookup).

**Changing generated output**: iterate with `npm run compile -- -o dom -d file.marko` (and `-o html`), then `test:update` and audit snapshot diffs — output shape changes ripple through hundreds of fixtures; verify a sample by hand, don't rubber-stamp.

**Changing runtime behavior**: find the covering fixtures by grepping `__tests__/fixtures` for the runtime helper or syntax; extend `steps` before touching the runtime so the mutation log captures the before/after.

## Gotchas

- `translator/util/references.ts` imports `toAccess` from `html/serializer.ts` — serializer key encoding changes affect the translator.
- Adding an accessor enum member: keep `accessor.ts` / `accessor.debug.ts` in lockstep (same members, char vs. readable string values).
- Size regressions count as review findings: check the fixture `sizes.json` diffs and root `.sizes.json` (updated by the pre-commit hook).
- Language semantics questions (what a tag/attribute should do) are answered by the docs, not inferred: <https://markojs.com/llms.txt>.
