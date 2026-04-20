# Marko 5 (runtime & translator)

## Architecture

The package is organized into four layers:

| Directory              | Purpose                                                                |
| ---------------------- | ---------------------------------------------------------------------- |
| `src/runtime/helpers/` | Shared runtime helpers (class/style values, dynamic tags, attr-tags)   |
| `src/runtime/html/`    | SSR runtime: streaming HTML output, helpers, hot reload                |
| `src/runtime/vdom/`    | CSR runtime: virtual DOM, morphdom reconciliation, component lifecycle |
| `src/translator/`      | Babel-based compiler that transforms `.marko` into SSR/CSR JavaScript  |

The compiler/translator entry is `src/translator/index.js`.

Note: published as both `marko@5` and `@marko/runtime-class`.

## Naming Conventions

### Triple-underscore prefix (`___name`)

All internal properties and methods on runtime objects use a triple-underscore prefix:

```js
this.___state;
component.___queueUpdate();
exports.___batchUpdate = batchUpdate;
```

The build step mangles these names into short single-character identifiers.

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

- **HTML (SSR)** — `src/runtime/html/index.js` creates a `Template` produces `AsyncStream`. Output is HTML strings piped to a Node.js stream.
- **VDOM (browser)** — `src/runtime/vdom/index.js` creates a `Template` produces `AsyncVDOMBuilder`. Output is a virtual DOM tree reconciled via local morphdom .

Both stacks share `src/runtime/renderable.js`, which mixes `render()`, `renderSync()`, `renderToString()`, and `mount()` into `Template.prototype`.

## Error Handling

- Compile-time errors use Babel's `path.buildCodeFrameError(message)` to include source locations
- Most validation happens at compile time; runtime errors in production are minimal

## Testing

### Test structure

```
test/
  translator/              # Snapshot tests for compiler output
  components-pages/        # Full page hydration (ssr + csr) tests
  components-browser/      # jsdom-based browser component tests
  components-server/       # SSR rendering tests
  morphdom/                # morphdom unit tests
  vdom-create/             # VNode construction unit tests
  async-stream/            # AsyncStream unit tests
```

### Translator tests

Each fixture has a `template.marko` input and a `snapshots/` directory:

```
fixtures/<name>/
  template.marko
  snapshots/
    vdom-expected.js
    html-expected.js
    htmlProduction-expected.js
    hydrate-expected.js
    cjs-expected.js
    generated-expected.marko
```

### Running tests

```sh
npm test -- --grep "runtime-class.*"             # all tests
npm test -- --grep "runtime-class.* <fixture> "  # specific fixture
npm test -- --grep "runtime-class.*" --update    # update snapshots
```
