# Native Lazy Loading and Compiler-Owned Entry Builds

Add lazy loading to `packages/runtime-tags`. Should support SSR, CSR and resume modes.
Refactor to support HTML page entry generation into the compiler (similar to `hydrate` output) so `packages/runtime-class` and `packages/runtime-tags` expose their own entry implementations instead of bundlers hard-coding wrapper source.

Initial focus only on `packages/runtime-tags`.

## User API

### Lazy Import

Annotate an import as lazy via the `lazy` import attribute. Only the `"load"` strategy is implemented initially.

```marko
import MyTemplate from "./my-template.marko" with { lazy: "load" }

<MyTemplate foo=bar/>
```

This causes the browser code for `./my-template.marko` to be split into its own entry. If conditionally rendered, the browser assets are only registered when the component is actually used:

```marko
<if=show>
  <MyTemplate/>
</if>
```

## Boundaries

### Compiler

- Owns the new `output: "server-entry"` mode for server page entry wrappers. (packages/runtime-tags/src/translator/visitors/program/index.ts:119-154)
- Receives `browserAsset` config which specifies bundler supplied runtime and asset linking code. packages/compiler/src/config.js:136-139

### Translators

- `packages/runtime-tags` exposes:
  - Uses browser asset resolution apis. (packages/runtime-tags/src/translator/visitors/program/index.ts:119-154 for server page entry, packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts:235-250 for lazy)
  - lazy known-tag HTML/DOM translation in packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts

### Bundlers (`@marko/vite`, others)

- Decide which templates are top-level entries.
- Generate browser asset manifests / virtual modules.
- Implement compiler hooks that map logical browser entry requests to concrete asset modules.
- Provide low-level hooks for adding opaque assets and printing pending assets.

Note: for testing purposes see `packages/runtime-tags/src/__tests__/utils/bundle.ts` which acts as a psuedo bundler integration.

---

## Architecture Overview

### Compiler Changes

| File / Area                       | Change                                          |
| --------------------------------- | ----------------------------------------------- |
| `packages/compiler/config.d.ts`   | Add `output: "server-entry"` and `clientAssets` |
| `packages/compiler/src/config.js` | Default `clientAssets` to `null`                |

### `packages/runtime-tags` Changes

| Area                                    | Change                                                                                                                            |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `translator/util/tag-name-type.ts`      | Detect `lazy` import attribute during analyze and mark the binding as lazy                                                        |
| `translator/visitors/tag/custom-tag.ts` | Branch on the `lazy` flag during HTML and DOM translate phases                                                                    |
| Module generation/resolution            | Generate `.lazy.js` virtual modules via `resolveVirtualDependency`; resolve browser asset modules via `clientAssets.resolve(...)` |

### Core Runtime Changes

| Area                       | Change                                                                                                      |
| -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| server-entry asset helpers | New compiler/translator-owned helpers that implement flush behavior on top of bundler `add` / `print` hooks |
| DOM runtime                | Export new `_lazy_signal` and `_lazy_render` helpers                                                        |
| DOM resume                 | Reuse existing `ready()` / `initEmbedded()` mechanism                                                       |

There is intentionally **no** core-owned browser asset shape in this proposal. Asset capture and rendering remain bundler-owned.

### `packages/runtime-tags/src/__tests__/utils/bundle.ts`

The `bundle.ts` file has been updated to properly inject asset related code and call the compiler with the new apis.
In theory no further changes are needed here, but be sure to review.

---

## Compiler Config

### New Entry Option

```ts
output?: "html" | "dom" | "migrate" | "source" | "hydrate" | "server-entry";
```

### New Browser Asset Hook

```ts
clientAssets?: {
  // when called with a client module id from the bundler, can return any babel `t.valueToNode` which should be used by the `runtime` to link assets.
  resolve(id: string): unknown;
  // is an importable module id whose exports implement the low-level bundler hooks below
  runtime: string;
};
```

This keeps the bundler responsible for manifest lookup, asset format, deduping, and low-level printing, while the compiler/translator own the higher-level entry and lazy flush behavior.

---

## Low-Level Bundler Hooks

Assets remain intentionally opaque. The compiler imports a bundler-provided runtime module and never inspects the asset payload itself.

### Bundler Contract

```ts
type clientAssetslot = "head-prepend" | "head" | "body-prepend" | "body";

export function add(g: Marko.Global, assets: unknown): void;

export function print(g: Marko.Global, slot: clientAssetslot): string;
```

Behavior:

- `add` stores bundler-defined opaque asset payloads on the current request and performs bundler-defined deduping
- `print` renders all newly pending assets for a given slot
- slot semantics are still shared (`head-prepend`, `head`, `body-prepend`, `body`), but how assets are represented and deduped is bundler-defined

Notes:

- The concrete asset payload is opaque and bundler-defined
- Bundlers are free to keep their current manifest shape and rendering logic
- Deduplication and printing are bundler-owned, not inferred by the compiler

---

## Compiler-Owned Asset Flow

The compiler/translator layer owns the higher-level control flow used by top-level HTML entries and lazy SSR sites.

### High-level Helper API (SSR)

Two top level helpers for server rendering entry and lazy assets have been added to `packages/runtime-tags/src/html/assets.ts`. The translator will output code which calls these, these internal apis are provided with (and call) the bundler contract apis.

---

## Modules for Lazy Imports

For each lazy import, the translator generates one virtual browser module via `resolveVirtualDependency` and resolves one bundler-owned browser asset module.

### `child.lazy.js` (DOM chunk entry, virtual)

Generated by the translator: (packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts:235-251)

```js
import { ready } from "@marko/runtime-tags/dom";
export { default } from "./child.marko";
export * from "./child.marko";
ready("<templateId>");
```

- `ready(templateId)` uses the existing `getTemplateId` helper
- this is the module imported by the parent's DOM output
- the bundler code-splits it into its own browser chunk

### Lazy Browser Asset Module

For SSR asset registration, the compiler asks:

```ts
clientAssets.resolve(id);
```

The returned value is converted into a babel ast used as `assets` and ultimately provided to the bundler runtime apis.

---

## SSR Behavior

Lazy templates still render eagerly on the server. The only behavioral difference from a normal known tag is browser asset registration.

---

## CSR Behavior (DOM translate)

### Known-tag optimization preserved

Lazy tags remain classified as known tags. The compiler [statically analyzes](packages/runtime-tags/src/translator/util/tag-name-type.ts:212) the child template and generates per-attribute signal wiring, but each signal is wrapped with `_lazy*` helper.

### Generated DOM output (pseudo-code)

```js
import * as _ from "@marko/runtime-tags/dom";

const lazy_child_render = _._lazy_render("#text/0", () =>
  import("./child.lazy.js").then((mod) => [
    mod._template,
    mod._walks,
    mod._setup,
  ]),
);
const lazy_child_input_foo = _._lazy_signal(() =>
  import("./child.lazy.js").then((mod) => mod._child_input_foo),
);
const lazy_child_input_bar = _._lazy_signal(() =>
  import("./child.lazy.js").then((mod) => mod._child_input_bar),
);

// Parent signal wires into lazy-wrapped child signals:
const _x = _._let("x", (_scope, x) => {
  lazy_child_input_foo(_scope.child, x);
});

const _setup = (scope) => {
  lazy_child_render(scope);
};
```

Key properties:

- each `import("./child.lazy.js")` is deduplicated by the bundler
- after resolution, the wrapper switches to the real child signal
- `.then(mod => mod.specific_signal)` preserves tree-shaking (we CANNOT store / share the dynamic import, it must be duplicated per signal / renderer)
- the `_lazy_renderer` is special. It needs to work very similar to packages/runtime-tags/src/dom/control-flow.ts:51-226 however a key aspect is that it DOES NOT USE PARAMS (this is because params are the `_lazy_signals` which would be called manually). Another difference is that the renderer is not created eagerly like packages/runtime-tags/src/dom/control-flow.ts:228-246 but instead only once the load as finished.

---

## lazy DOM Runtime

### Behavior

1. Buffer latest values per scope with last-write-wins semantics
2. Propagate loading state (should be built upon shard / extracted logic from the existing `_await*` runtimes).

### Pure CSR flow

1. component renders for the first time
2. lazy renderer fires and triggers `import()`
3. subsequent input signals are also triggered and `import()`.
4. loading state propagates to nearest `<try>`
5. import resolves, buffered values replay (renderer will be first, so content is inserted)
6. if there is no ancestor `<try>`, nothing is shown until ready

### Hydration flow

1. SSR registers browser assets for `child.lazy.js`
2. browser loads the lazy chunk and `ready(templateId)` fires
3. resume unblocks child scopes
4. first reactive update resolves the import immediately from cache and self-replaces the signal
5. later updates go directly to the real signal

---

## Hydration / Resume

### DOM entry builder (`util/entry-builder.ts`)

For lazy-flagged templates, those imports are skipped so the lazy child stays out of the parent's DOM entry bundle.
packages/runtime-tags/src/translator/util/entry-builder.ts:103-107

### Resume blocking via `ready()`

Lazy templates reuse the existing `ready()` / `initEmbedded()` pattern:

1. SSR serializes the `templateId` as a ready gate for lazy child scopes
2. `child.lazy.js` calls `ready(templateId)` when evaluated
3. resume is blocked for the child's scopes until `ready()` runs
4. the ready ID is per-template, not per-instance

---

## Bundler Responsibilities After This Change

What stays in `@marko/vite`:

- linked-mode entry discovery
- dev/build manifest extraction
- browser asset linking via `clientAssets.resolve(...)`
- browser asset runtime implementation
- browser build inputs and chunking

What moves out of `@marko/vite`:

- handwritten top-level HTML entry templates
- ownership of when entry wrappers invoke the asset runtime
