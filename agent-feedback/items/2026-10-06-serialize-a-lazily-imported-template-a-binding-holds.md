---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/assets.ts › withLoadAssets
---

# Serialize a lazily imported template that a written binding holds

A template imported with `load` and held in a binding the server writes cannot resume. On the server, the `withLoadAssets` wrapper the import resolves to is not registered under the template's id, so a debug render aborts with `Unable to serialize "Tag"` and an optimized one leaves the binding out of the resume data. On the client, `_load_template` is `/*@__PURE__*/`, so the lazy template it registers is dropped from a resumed page whose only reference to it is the page setup. Direction: register the server wrapper under the template's id, and keep the client's `_load_template` registration when the server writes a reference, the way `registerImportedTemplate` keeps an eagerly imported template, without loading the template's module eagerly.

Check: fixture with `tags/child.marko` = `<span>${input.value}</span>` and `template.marko` = `import Child from "./tags/child.marko" with { load: "render" }` `<let/count=1/>` `<let/Tag=Child/>` `<${Tag} value=count/>` `<button onClick() { count++ }>inc</button>`, steps `[{}, (d: Document) => d.querySelector("button")!.click()]`: the debug ssr run throws `Unable to serialize "Tag"`. Its optimized run (`-g "<fixture> optimize"`) writes the scope without `Tag`, the click removes the `<span>`, and the page bundle has no `_load_template`.
