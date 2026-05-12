# Runtime-Class Lazy API Plan

## Problem

The interop test suite (`translator-interop` in `src/__tests__/main.test.ts:45-48`) is
blocked because the runtime-class translator (`marko/translator`) does not handle two
compiler options used by runtime-tags for lazy loading:

1. **`output: "server-entry"`** — the primary blocker. `createLinkedRunner` compiles every
   entry template with this output mode, causing the class translator to crash.

2. **`linkAssets`** — needed for lazy imports inside class-based templates (not yet tested
   in interop fixtures, lower priority).

## Scope

Runtime-class only needs **SSR asset registration and injection**. Runtime-tags' lazy
signal/scope machinery (`_lazy_signal`, `_lazy_setup`, `_lazy_renderer`, `readyId`,
sub-template import splitting) does not apply — class hydration is component-based
(registry + `$MC`), not scope/signal-based.

No compiler changes needed — `config.d.ts` already defines `"server-entry"` output and
`linkAssets`.

---

## Implementation

### 1. `server-entry` Output — Translator

**File**: `packages/runtime-class/src/translator/index.js`

Add a branch in `translate.Program.enter` before the existing `hydrate` check (line 233):

```js
if (file.markoOpts.output === "server-entry") {
  const { linkAssets } = file.markoOpts;
  const templateId = file.metadata.marko.id;

  linkAssets?.onAsset("entry", file.opts.filename, templateId);

  const relPath = resolveRelativePath(file, file.opts.filename);

  path.node.body = [
    t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier("_runtime"))],
      t.stringLiteral(linkAssets?.runtime ?? ""),
    ),
    t.importDeclaration(
      [t.importDefaultSpecifier(t.identifier("_template"))],
      t.stringLiteral(relPath),
    ),
    t.importDeclaration(
      [t.importSpecifier(t.identifier("withEntry"), t.identifier("withEntry"))],
      t.stringLiteral("marko/src/runtime/helpers/with-entry.js"),
    ),
    t.exportAllDeclaration(t.stringLiteral(relPath)),
    t.exportDefaultDeclaration(
      t.callExpression(t.identifier("withEntry"), [
        t.identifier("_template"),
        t.identifier("_runtime"),
        t.stringLiteral(templateId),
      ]),
    ),
  ];

  path.skip();
  return;
}
```

Mirrors runtime-tags' `server-entry` at `program/index.ts:163-199` minus
`hydrateInit`/`ready()` (no scope-blocking needed for class hydration).

---

### 2. `withEntry` and `withAssets` Helpers

**New file**: `packages/runtime-class/src/runtime/helpers/with-entry.js`

`Object.create(template)` inherits all render methods from `renderable.js`. Each method
falls back to `this._` when `renderFunc` is falsy (`renderable.js:35`), so overriding `._`
on the wrapper intercepts all render paths.

```js
"use strict";

const flushHereAndAfter = require("../../core-tags/core/__flush_here_and_after__");

exports.withEntry = function withEntry(template, runtime, assetId) {
  const orig = template._;
  const wrapped = Object.create(template);
  wrapped._ = function renderWithEntry(input, out) {
    const g = out.global;
    runtime.add(g, assetId);

    if (out.isSync()) {
      const prepend =
        runtime.print(g, "head-prepend") +
        runtime.print(g, "head") +
        runtime.print(g, "body-prepend");
      if (prepend) out.write(prepend);
      orig.call(this, input, out);
      const append = runtime.print(g, "body");
      if (append) out.write(append);
    } else {
      flushHereAndAfter(
        {
          renderBody(asyncOut) {
            const prepend =
              runtime.print(g, "head-prepend") +
              runtime.print(g, "head") +
              runtime.print(g, "body-prepend");
            if (prepend) asyncOut.write(prepend);
          },
        },
        out,
      );
      orig.call(this, input, out);
      flushHereAndAfter(
        {
          renderBody(asyncOut) {
            const append = runtime.print(g, "body");
            if (append) asyncOut.write(append);
          },
        },
        out,
      );
    }
  };
  return wrapped;
};

exports.withAssets = function withAssets(template, runtime, assetId) {
  const orig = template._;
  const wrapped = Object.create(template);
  wrapped._ = function renderWithAssets(input, out) {
    runtime.add(out.global, assetId);
    orig.call(this, input, out);
  };
  return wrapped;
};
```

**Important**: `renderBody` must NOT call `asyncOut.end()` — `__flush_here_and_after__`
manages the async out lifecycle itself (see its `onLast` callback at line 11-13, 35-41).

---

### 3. Lazy Import Detection — Analyzer

**File**: `packages/runtime-class/src/translator/index.js`

After the block that sets `tag.node.extra.tagNameImported` (line 129), add:

```js
if (isLazyImport(binding.path.parent)) {
  tag.node.extra.tagNameLazy = true;
}
```

Add helper at bottom of file:

```js
function isLazyImport(importDecl) {
  return (
    Array.isArray(importDecl.attributes) &&
    importDecl.attributes.some(
      (a) =>
        (a.key.type === "Identifier" ? a.key.name : a.key.value) === "lazy" &&
        a.value.value === "load",
    )
  );
}
```

Inlined from runtime-tags' `isLazyImportDecl` (`import-declaration.ts:102-109`).

---

### 4. Lazy Tag Translation — Custom Tag

**File**: `packages/runtime-class/src/translator/tag/custom-tag.js`

Add `importNamed` to the imports from `@marko/compiler/babel-utils`.

After `tagIdentifier` is resolved and before the `marko_tag()` call (around line 72),
branch on output mode:

#### HTML output (SSR)

Same as before — wrap with `withAssets` to register the asset during server render:

```js
if (node.extra?.tagNameLazy && markoOpts.linkAssets) {
  const { linkAssets } = markoOpts;
  const childFile = loadFileForTag(path);
  if (childFile) {
    const assetId = childFile.metadata.marko.id;
    linkAssets.onAsset("lazy", childFile.opts.filename, assetId);

    const runtimeId = importDefault(
      file,
      linkAssets.runtime,
      "marko_asset_runtime",
    );
    const withAssetsFn = importNamed(
      file,
      "marko/src/runtime/helpers/with-entry.js",
      "withAssets",
      "marko_with_assets",
    );
    tagIdentifier = t.callExpression(withAssetsFn, [
      tagIdentifier,
      runtimeId,
      t.stringLiteral(assetId),
    ]);
  }
}
```

#### DOM output (CSR)

Replace the static import with a `lazyTag` wrapper backed by a dynamic `import()`:

```js
if (node.extra?.tagNameLazy && markoOpts.output === "dom") {
  const lazyTagFn = importDefault(
    file,
    "marko/src/runtime/helpers/lazy-tag.js",
    "marko_lazy_tag",
  );
  tagIdentifier = t.callExpression(lazyTagFn, [
    t.arrowFunctionExpression(
      [],
      t.callExpression(t.import(), [node.extra.relativePath]),
    ),
  ]);
}
```

The original static `import Child from "./child.marko"` should also be removed (or
converted to the dynamic form) so the bundler can code-split it into a separate chunk.

#### Hydrate output

No changes. The hydrate bundle includes all child templates statically via
`fileMeta.tags` — lazy children are bundled eagerly so they are available synchronously
when a parent component re-renders after hydration.

---

### 5. `lazyTag` Runtime Helper (CSR)

**New file**: `packages/runtime-class/src/runtime/helpers/lazy-tag.js`

Returns a template-like object whose `._` renderer handles the empty→loaded transition
using the existing component `forceUpdate()` cycle. No signal buffering or
scope/walker coordination — simpler than runtime-tags because class components own their
re-render lifecycle.

```js
"use strict";

module.exports = function lazyTag(load) {
  var realTemplate;
  var pending;
  var waiting = [];

  var lazy = {
    _: function lazyRenderer(input, out) {
      if (realTemplate) {
        realTemplate._(input, out);
        return;
      }

      // Render empty fragment as placeholder
      out.bf(out.___assignedKey, out.___assignedComponentDef?.___component);
      out.ef();

      // Track parent component for re-render on load
      var component = out.___assignedComponentDef?.___component;
      if (component && waiting.indexOf(component) === -1) {
        waiting.push(component);
      }

      if (!pending) {
        pending = load().then(function (mod) {
          realTemplate = mod.default || mod;
          var components = waiting;
          waiting = [];
          for (var i = 0; i < components.length; i++) {
            components[i].forceUpdate();
          }
        });
      }
    },
  };

  return lazy;
};
```

**How it works**:

1. First CSR render: `._` renders an empty `VFragment` (`bf`/`ef`), kicks off `import()`,
   and stores the parent component reference from `out.___assignedComponentDef`.
2. Import resolves: caches the real template, calls `forceUpdate()` on every parent
   component that rendered this lazy tag. `forceUpdate()` queues a re-render via
   `update-manager` → `___scheduleRerender()` → `___rerender()` → morphdom reconciles
   the empty fragment against the real child output.
3. Subsequent renders: delegates directly to `realTemplate._`.

**Why this is safe**:

- `out.___assignedComponentDef` is set by `out.c(componentDef, ...)` in `render-tag.js:14`
  right before calling the renderer — it's always the parent component's def.
- `forceUpdate()` is the standard class API for triggering re-renders; it batches via
  `update-manager` so multiple lazy tags resolving at once produce a single DOM update.
- Hydration never hits this path — the hydrate bundle includes the template statically,
  so `realTemplate` is never null during a hydration re-render.

---

## Files to Change

| File                                                       | Action                                                                                                                      |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `packages/runtime-class/src/translator/index.js`           | Add `server-entry` branch in `translate.Program.enter`; add `isLazyImport` helper; mark `tagNameLazy` in `analyze.MarkoTag` |
| `packages/runtime-class/src/translator/tag/custom-tag.js`  | Add lazy-wrap branch (html: `withAssets`, dom: `lazyTag`); add `importNamed` to imports                                     |
| `packages/runtime-class/src/runtime/helpers/with-entry.js` | **New**: `withEntry` and `withAssets` exports                                                                               |
| `packages/runtime-class/src/runtime/helpers/lazy-tag.js`   | **New**: `lazyTag` export for CSR lazy rendering                                                                            |

---

## Testing

Remove the TODO comment at `main.test.ts:45` once `server-entry` is implemented. The
existing interop fixtures don't use lazy imports, so steps 3–5 are not required to unblock
them.

## Known Limitations

- Sync SSR path calls `print(g, "head")` before template renders — lazy children registered
  during render are missed (same trade-off as vite's class-API entry)
- CSR lazy tag renders empty until the chunk loads (no loading/placeholder UI) — consistent
  with the runtime-tags approach but without await/placeholder propagation
