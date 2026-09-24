---
type: bug
impact: med
effort: med
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js › renderAndMorph
---

# Stop a client-rendered Class parent crashing when two Tags children render its bodies

When a Class parent renders on the client and passes bodies to two sibling Tags components that each render theirs (through `<${input.content}/>` or a spread onto a native tag), its first rerender throws `TypeError: Cannot read properties of null (reading 'firstChild')` from morphdom's `morphComponent`, because `component.___rootNode` is null for one of those children. One such child, or two bodies inside one child, rerenders fine, and so does the same page rendered on the server and resumed. Each body renders through `renderAndMorph`, the step this path adds per body, so start there when finding what leaves the sibling's root node unset.

Check: a `fixtures-interop` fixture with `skip_ssr: true`, a Class template holding state `n` with `<button id="class" onClick("inc")>${state.n}</button>`, `<tags-passthrough id="a">A ${state.n}</tags-passthrough>`, `<tags-passthrough id="b">B</tags-passthrough>` and `<init-components/>`, where `tags-passthrough` is `// use tags` plus `<div ...input><${input.content}/></div>`, with steps `[{}, clickClass]`, throws in `csr`.
