---
type: bug
impact: low
effort: med
site: packages/runtime-tags/src/translator/visitors/tag/dynamic-tag.ts › needsCompat
---

# Load the compat layer for a Class API component a Tags template only imports as a value

`needsCompat` is set only when a Tags template uses a Class API component as a tag, so `import ClassThing from "<class-thing>"` passed on as `content=ClassThing` and rendered by a Tags child's `<${input.content}/>` renders nothing on the server or the client unless some Tags template also writes `<class-thing/>`. With that tag use the page registers the Class template (`s("…/class-thing.marko", _marko_template)`) and loads the compat runtime; with only the value import it does neither. Set it from the import of a Class API tag as well.

Check: a `fixtures-interop` fixture with template `import ClassThing from "<class-thing>"`, `<let/n = 0/>`, `<button id="tags" onClick() { n++ }>${n}</button>`, `<tags-passthrough id="p" data-n=n content=ClassThing/>` (`tags-passthrough` is `// use tags` plus `<div ...input><${input.content}/></div>`) snapshots `<div id="p" />` in `render.md`; adding `<class-thing/>` anywhere in the template renders the component inside `#p`.
