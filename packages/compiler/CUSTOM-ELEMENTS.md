# Custom elements manifests

An installed dependency without `marko.json` can expose custom elements through
its `package.json` `customElements` field. Marko discovers
`custom-element-definition` exports in that manifest.

These tags compile as native elements, not Marko components. Their children,
attributes and events use native tag behavior. The module containing each
registration export is included only in the browser bundle, including the
client graph of an otherwise static server-rendered page. Server rendering does
not evaluate registration modules or require DOM globals.

Manifest module paths are physical paths relative to the package directory.
Marko imports those resolved files directly; neither `package.json` nor the
registration subpath needs to be publicly exported.

Attribute types are exposed as in-memory, declaration-only `.d.marko` files.
Primitive types, literals and their unions are preserved. Unsupported types,
including unresolved named references and JSDoc expressions, become `unknown`.
No runtime wrapper is generated or written into `node_modules`.

Language tooling can read these files with `getVirtualFile(filename)` and obtain
their real manifest location with `getVirtualFileOrigin(filename)`. They are
referenced by `TagDefinition.types`; `TagDefinition.browserImport` records the
browser-only registration module. `taglib.clearCaches()` clears both discovery
and generated declarations so edited manifests can be rediscovered.
