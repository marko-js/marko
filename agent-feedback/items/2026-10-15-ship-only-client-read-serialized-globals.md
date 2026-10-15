---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/html/writer.ts › getFilteredGlobals
---

# Ship only the serialized globals client code can read

`getFilteredGlobals` writes every key `$global.serializedGlobals` names on every page that resumes anything, though most `$global` reads render only on the server; `@marko/run` serializes `url` and `params` by default, so every page pays for both. Analysis can classify each `$global` read by its top-level key: client code reads it when it sits in an effect or a registered function, in a section the client may create, or in an expression whose other sources can change. Each rendered template would then register the keys it (and any template the client may render from it) reads, and the writer would serialize only registered keys not yet written, at the first flush writing resume data, so a template streamed in later sends its keys with that flush. A dynamic tag whose name analysis cannot enumerate counts every key; the common shape of that, a component rendering its own input (`<${input.content}/>` in an `<if>`, attribute tags in a `<for>`), can be narrowed by recording those input props on the template and having each known caller count what it passes for them.

Check: render `<let/count=0/><h1>${$global.brand}</h1><button onClick() { count++; document.title = $global.locale + count }>${count}</button>` with `$global: { brand: "Marko", locale: "en", url: new URL("https://example.com/a/very/long/path?with=query"), serializedGlobals: ["brand", "locale", "url"] }`; the written resume script holds `brand`, `locale` and `url`, though only `locale` is read on the client.
