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

Attribute type text and documentation are exposed directly on taglib attribute
definitions (`nativeType` and `description`). Language tooling validates these
types and incorporates them into native-element checking in the consumer's
existing extracted script, retaining global HTML and event attributes.
Primitive types, literals and their unions are preserved; unsupported types,
including unresolved named references and JSDoc expressions, become `unknown`.
No handwritten or generated `.d.marko` files or runtime wrappers are needed.

`TagDefinition.filePath` points to the real manifest for navigation.
`TagDefinition.browserImport` records the browser-only registration module.
`taglib.clearCaches()` clears discovery and manifest metadata so edited manifests
can be rediscovered.
