# Marko 6 (runtime & translator)

## Architecture

The package is organized into four layers:

| Directory         | Purpose                                                               |
| ----------------- | --------------------------------------------------------------------- |
| `src/common/`     | Types, constants, and utils used by both DOM / HTML runtimes          |
| `src/html/`       | SSR runtime: streaming HTML, serialization                            |
| `src/dom/`        | CSR runtime: reactivity, DOM manipulation, resumability               |
| `src/translator/` | Babel-based compiler that transforms `.marko` into ssr/csr javascript |

Runtime entries are `src/html.ts` and `src/dom.ts`.
The compiler/translator entry is `src/translator/index.ts`. The translator is further organized into:

- `core/` — implementations for built-in tags (`if`, `for`, `let`, etc.)
- `visitors/` — AST traversal visitors (program, tag, attribute, etc.)
- `util/` — shared compiler utilities (signals, sections, walks, references, etc.)
- `interop/` — Marko 5 compat layer

Note: publish aliases `@marko/runtime-tags` and `marko`@6.

## Naming Conventions

### Underscore-prefixed runtime API (`_name`)

Functions exported as part of the runtime API (functions called from compiler-generated code) use a leading underscore prefix:

```ts
export function _let(...) { ... }
export function _attr(...) { ... }
export function _text(...) { ... }
```

These are **not** "private" in the traditional sense. The underscore means these are internal runtime API entry points which are public to generated code, but not meant for direct use by application authors.

### Internal object properties via accessor enums

Internal properties on runtime objects (renderers, pending renders, closure signals, etc.) use enum-based computed keys defined in `src/common/accessor.ts` / `src/common/accessor.debug.ts`:

```ts
renderer[RendererProp.Id];
render[PendingRenderProp.Scope];
closureSignal[ClosureSignalProp.Index];
```

Each unique object type gets its own enum so all enums can start from `"a"`, `"b"`, `"c"` — maximizing gzip compression. The debug variants use descriptive strings (`"id"`, `"scope"`, etc.) swapped in by the `remap-debug` build plugin.

## `MARKO_DEBUG` Pattern

Debug-only code is gated behind the `MARKO_DEBUG` global constant. The build tooling strips these blocks in production, so they have zero runtime cost.

```ts
if (MARKO_DEBUG) {
  if (!element) {
    throw new Error("Expected element to exist");
  }
}
```

This pattern is used for:

- **Validation and assertions** — checking invariants that should hold in production
- **Descriptive names** — providing readable accessor/property names during development
- **Error messages** — detailed diagnostics that would bloat production bundles

Any file with `.debug.*` will also be replaced with an adjacent non dedbug counter part.
e.g.

- `accessor.ts` — production values (single characters: `"a"`, `"b"`, `"c"`)
- `accessor.debug.ts` — development values (readable strings: `"ConditionalScope"`, `"LoopScopeArray"`)

## Function Style

### `function` declarations vs arrow functions

- **Named exports and top-level functions**: use `function` declarations
- **Inline callbacks, closures, and anonymous functions**: use arrow functions
- **Extract closures when possible**: if a closure does not need to capture local state, prefer a hoisted file-level `function` declaration with a self-documenting name
- **Balance performance and readability**: keep inline closures only when they must close over local values, or when extraction would make the call site less clear

### Self-modifying functions

Some initialization functions replace themselves after first invocation to become no-ops or change behavior:

```ts
export let _enable_catch = () => {
  _enable_catch = () => {}; // no-op after first call
  // ... actual setup code ...
};
```

### Monkeypatching via wrapper pattern

Functions are sometimes wrapped by reassigning the module-level binding:

```ts
runRender = ((runRender) => (render) => {
  // ... wrapper logic ...
  runRender(render);
})(runRender);
```

## State and Reactivity

### Signal pattern

Signals are functions with the signature `(scope: Scope, value: unknown) => void`. They are the core reactivity primitive:

```ts
type SignalFn = (scope: Scope, value: unknown) => void;
```

### Scope objects

Scopes are plain objects with dynamic property access via computed string keys built from enum prefixes and accessor indices:

```ts
scope[AccessorProp.Id];
scope[AccessorPrefix.BranchScopes + nodeAccessor];
```

### Section state (translator)

The translator uses a `createSectionState()` factory to create getter/setter pairs for per-section compiler state:

```ts
const [getSignals, setSignals] = createSectionState<Signal[]>(
  "signals",
  () => [],
);
```

## Translator Conventions

### Visitor phases

Core tag definitions follow a multi-phase visitor pattern with `analyze`, `translate`, and `migrate`:

```ts
export default {
  analyze(tag) { ... },
  translate: translateByTarget({
    html(tag) { ... },
    dom(tag) { ... },
  }),
  migrate(tag) { ... },
} as Tag;
```

### `callRuntime()`

All references to runtime functions from generated code go through the `callRuntime()` helper, which handles import management:

```ts
callRuntime("_if", condition, body);
```

### Assertion helpers

The translator provides assertion functions for tag validation:

```ts
assertNoArgs(tag);
assertNoParams(tag);
assertNoSpreadAttrs(tag);
```

These produce compiler errors with source locations via `buildCodeFrameError`.

## Error Handling

- Debug-only validation wrapped in `if (MARKO_DEBUG)` blocks
- Translator errors include source locations via Babel's `buildCodeFrameError`
- Descriptive error messages with documentation links in the translator
- Runtime errors in production are minimal — most validation happens at compile time

## Testing

- **Fixture-based**: test fixtures contain `.marko` templates with expected output
- **Multi-mode snapshots**: separate expected output for CSR (`dom.expected/`), SSR (`html.expected/`), and resume/hydration
- **Snapshot directories**: `__snapshots__/` alongside test fixtures
- **Test files**: `test.ts` files co-located with fixture templates

```sh
npm test -- --grep "runtime-tags.*" # all tests (uses mocha)
npm test -- --grep "runtime-tags.* <fixture> " # specific fixture
npm test -- --grep "runtime-tags.* <fixture> compile" # compiled outputs only
npm test -- --grep "runtime-tags.* <fixture> render" # render outputs only

npm test -- --grep "runtime-tags.*" --update # all tests snapshot update
npm test -- --grep "runtime-tags.* <fixture> " --update # fixture snapshot update

npm test -- --grep "translator-interop.*" # interop tests (run after the base tags runtime tests pass)
```

Prefer running specific fixtures when possible. Running the entire suite takes time!
