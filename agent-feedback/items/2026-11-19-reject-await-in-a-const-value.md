---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/core/const.ts › analyze
---

# Reject `await` in a `<const>` value

`<const/x=await load()/>` compiles without an error into `const x = await load();` inside the template's non-async renderer (`_template(id, input => { … })`), so the html output is invalid JavaScript and the module fails to parse when it loads. `<await>` is how a template waits on a promise, so `await` in a tag's attribute value should be a compile error naming `<await>`, or the renderer must become async. A diagnostic is the smaller change.

Check: compile `static async function load() { return 1; }` then `<const/x=await load()/>` and `<div>${x}</div>` with `pnpm run compile -- -o html <file>`: the output contains `const x = await load();` inside `input => { … }`, and `node --check` on that module reports `SyntaxError: Unexpected reserved word` at that `await`.
