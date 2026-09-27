---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/html/compat.ts › compat.render
---

# Server render a lazy Tags tag under a Class page

Under a Class page (a Tags template rendered through `html/compat.ts › compat.render`), a Tags template that imports a child `with { load: "render" }` makes the server write only the empty `<!--F#…--><!--F/-->` fragment markers: no HTML and no resume data for the lazy child, and no error. The client then renders the child from scratch once its chunk loads, so the page shifts and any server-only work in the child is skipped. Either render it through the compat path like a Tags page does, or document the limitation at the site.

Check: add a `fixtures-interop` fixture whose `template.marko` is a Class component rendering `<tags-child/>` and `<init-components/>`, with `components/tags-child.marko` = `// use tags` + `import Lazy from "<tags-lazy>" with { load: "render" }` + `<Lazy/>` and `components/tags-lazy.marko` = `// use tags` + `<button id="tags" onClick() { console.log(1) }>go</button>`. Run `pnpm run test:update -- --grep "translator-interop <name> "`: `writes.debug.html` holds `<!--F#1--><!--F/-->` with no button, and the SSR render log inserts `#tags` only on the first update.
