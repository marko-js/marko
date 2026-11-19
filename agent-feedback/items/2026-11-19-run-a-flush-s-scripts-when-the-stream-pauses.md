---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/writer.ts › State.joinFlush
---

# Run a flush's scripts when the stream pauses inside `<svg>` or `<math>`

An in-order `<await>` inside `<svg>` or `<math>` (directly, in a child template, in passed `content`, or under a dynamic `svg`/`math` tag) pauses the stream inside foreign content, and `State.joinFlush` appends that flush's `<script>` and reorders there. The parser makes the `<script>` an svg or MathML element, which never runs (browsers also decode `&amp;` in it), so the page fails to resume with `Cannot read properties of undefined (reading '_')`, and a reorder's `<t>` children break out of the svg. Direction: an `<svg>` or `<math>` whose content may stream in order counts itself in the render context, and a flush that pauses inside one writes its reorders and scripts in `<mi><desc>…</desc></mi>`, an HTML integration point in svg (`desc`) and MathML (`mi`) alike, whose first statement moves the reorders and itself to the wrapper's place (about 125 B per such flush; other pages write the same bytes). A `<try>` catching a throw inside such an element must end the foreign content the throw left open, or later flushes stay wrapped. Same parser-context family as "Wrap reordered out-of-order content in a parser-context-legal container".

Check: add a fixture `<math><await|v| = resolveAfter(1, 1)><mn>${v}</mn></await></math><let/n=0/><button onClick() { n++ }>${n}</button>` with steps `[{}, flush, click]` and `equivalent: false`, then `pnpm run test:update -- --grep "runtime-tags/translator <fixture> "`: both `ssr` runs fail with `TypeError: Cannot read properties of undefined (reading '_')`.
