---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/control-flow.ts › _dynamic_tag
---

# Keep a resumed Class API component passed as content mounted on the first update

A Tags child rendering `<div ...input><${input.content}/></div>`, given a Class component as `content=ClassThing` by a Tags parent, remounts that component on the parent's first update after resume and discards its state: click it to `thing 1`, update the parent, and it is back to `thing 0`, with a `REMOVE`/`INSERT` of its button in the mutation log. A client-only render keeps it (`thing 1`, then `thing 2` on the next click). The server serializes the branch's `ConditionalRenderer` key as the registered `class-thing.marko` reference, and the client keys the renderer by the id `create5to6Renderer` sets (`packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js`); the two need to compare equal after resume.

Check: a `fixtures-interop` fixture with `equivalent: false`, template `import ClassThing from "<class-thing>"`, `<let/n = 0/>`, `<button id="tags" onClick() { n++ }>${n}</button>`, `<tags-passthrough id="p" data-n=n content=ClassThing/>`, `<div id="other"><class-thing/></div>`, where `class-thing` is a counter button and `tags-passthrough` is the child above, and steps `[{}, clickThing, clickTags, clickThing]` clicking `#p .thing`: `render-ssr.md` shows `thing 0` after the tags click, `render-csr.debug.md` shows `thing 1`.
