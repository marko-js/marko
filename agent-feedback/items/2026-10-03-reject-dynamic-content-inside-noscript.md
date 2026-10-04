---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/tag-facts.ts › nativeElementFacts
---

# Reject dynamic content inside a `<noscript>`

With scripting enabled the HTML parser keeps a `<noscript>`'s body as raw text, so the nodes and resume markers Marko writes inside it are never elements or comments to the client: a client render and a resumed page both fail to find them. Content there only shows when scripts are off, where client code never runs, so report a compile error for anything client code would address inside one.

Check: a fixture with `<let/n=0/><noscript><span>${n}</span></noscript><button onClick() { n++ }>inc</button>` and steps `[{}, click]` fails in `csr` and `ssr` with `TypeError: Cannot read properties of undefined (reading 'data')`.
