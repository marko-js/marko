# Marko 5 (runtime & translator)

## Architecture

Main directories:

| Directory                     | Purpose                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------- |
| `src/runtime/components/`     | Component class, state, lifecycle, update queue, registry                       |
| `src/runtime/html/`           | SSR runtime: `AsyncStream`, HTML helpers, hot reload                            |
| `src/runtime/vdom/`           | CSR runtime: virtual DOM, `AsyncVDOMBuilder`, vendored morphdom                 |
| `src/runtime/helpers/`        | Helpers compiled templates import; `tags-compat/` is the Marko 6 interop bridge |
| `src/core-tags/`              | Built-in tags                                                                   |
| `src/node_modules/@internal/` | Modules with a server `index.js` and a browser `index-browser.js`; change both  |
| `src/translator/`             | Class API Babel translator                                                      |

The compiler/translator entry is `src/translator/index.js`, but the package's exported translator (`src/translator.js`) wraps it with `createInteropTranslator` from `@marko/runtime-tags/translator`, so Marko 5 projects can mix in Marko 6 (Tags API) components. Interop spans both packages: the translator wrapper in `packages/runtime-tags/src/translator/interop/`, the Class side of each boundary in `src/translator/` (e.g. `tag/util.js` › `getAttrs`), and the runtime bridge in `src/runtime/helpers/tags-compat/`, which loads runtime-tags' `compat.feat`. Interop fixtures live in `packages/runtime-tags/src/__tests__/fixtures-interop/` (suite `translator-interop`), not under `test/`.

Note: the package is private (named `marko`); `scripts/publish-alias.mts` publishes it as `marko` under the `m5` dist-tag.

Compiled templates import runtime helpers by string path (`marko/src/runtime/...`, emitted across `src/translator/`), so a source search for importers misses those uses.

`src` mixes ESM and CommonJS `.js` with no `"type"`, so Node warns `MODULE_TYPELESS_PACKAGE_JSON` under `-t class`. Accepted: Marko 5 is in maintenance and `src` ships in `files`, so a `{"type":"module"}` marker would force converting every CJS file.

## Naming Conventions

### Triple-underscore prefix (`___name`)

All internal properties and methods on runtime objects use a triple-underscore prefix:

```js
this.___state;
component.___queueUpdate();
exports.___batchUpdate = batchUpdate;
```

The build step mangles these names into short identifiers.

### `MARKO_DEBUG` pattern

Debug-only code is wrapped in string-compared conditionals that tree-shake in prod:

```js
// eslint-disable-next-line no-constant-binary-expression
var complain = "MARKO_DEBUG" && require("complain");
if ("MARKO_DEBUG") {
  complain("Deprecated: ...");
}
```

The build step replaces `"MARKO_DEBUG"` with `false` and dead-code-eliminates the branches.

## Output Modes

- **HTML (SSR)**: `src/runtime/html/index.js`, whose `Template` renders into an `AsyncStream` of HTML strings.
- **VDOM (browser)**: `src/runtime/vdom/index.js`, whose `Template` renders into an `AsyncVDOMBuilder` tree that the vendored `src/runtime/vdom/morphdom/` reconciles.

Both stacks share `src/runtime/renderable.js`, which mixes `render()`, `renderSync()`, `renderToString()`, and `mount()` into `Template.prototype`.

## Testing

### Test structure

Each directory under `test/` is one suite; `test/translator/` holds the snapshot tests for compiler output.

### Translator tests

Each fixture has a `template.marko` (or the `templateFile` its `test.js` names) and a `snapshots/<mode>-expected.*` per mode in `test/translator/index.test.js`, or `<mode>-error-expected.txt` when that compile throws.

### Running tests

From the repo root:

```sh
pnpm test -- --grep "translator/fixtures <fixture> "            # one translator fixture
pnpm run test:update -- --grep "translator/fixtures <fixture> " # regenerate its snapshots
```
