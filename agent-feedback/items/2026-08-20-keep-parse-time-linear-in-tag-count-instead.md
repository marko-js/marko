---
type: perf
impact: med
effort: med
site: packages/compiler/src/babel-plugin/parser.js › enterTag
---

# Keep parse time linear in tag count instead of paying Babel's sibling-key walk per tag

`enterTag` appends every parsed tag with `currentBody.pushContainer("body", node)[0]`, and Babel's `pushContainer` calls `updateSiblingKeys`, which walks every path already cached for that container — so a body of N tags costs O(N²). Text nodes do not pay it (`pushContent` pushes straight onto `node.body`); only tags do, and they are the common case. Compiling one `<p>…</p>` per line takes 82 ms at 1k tags, 493 ms at 4k, 4536 ms at 16k (82 → 284 µs per tag), and a `--cpu-prof` of the 16k run attributes 60% of self time to `updateSiblingKeys` in `@babel/traverse`'s `path/modification.js` (32% at 8k). `output: "source"` shows the same curve, so this is the parse phase, not codegen or the translator — `htmljs-parser` itself is linear. `enterTag` only needs the new node's `NodePath`, so pushing the node and taking the path without the container bookkeeping (or inserting a whole body at once) should flatten it.

Check: time `pnpm run compile -- -o html -d` on generated templates of 1k/2k/4k/8k/16k sibling `<p>` tags — the marginal cost per tag climbs from 82 µs to 284 µs; it should stay flat.
