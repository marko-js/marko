---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/visitors/program/pre-analyze.ts › normalizeBody
---

# Escape a static `&` that an escaped placeholder's text can complete into an entity

Static text is written as raw markup, so a text node ending in `&` (or `&` plus entity-name characters, eg `&co`) directly before an escaped placeholder lets the placeholder's escaped text finish a character reference. `<p>&${input.x}</p>` compiles to html `` `<p>&${_text_resume(…, input.x, ($sg__input_x) * 2)}</p>` ``, and `html/writer.ts › markText` writes the `<!>` separator only when the serialize guard is 2, so with `x: "copy;"` and nothing serialized the server writes `<p>&copy;</p>` and the browser shows `©`, while the client template `<p>&<!></p>` plus `_text` shows `&copy;`. The literal case `<p>&${"copy;"}</p>` folds to `&copy;` in both outputs, so the escaped placeholder's text is never shown as written. When a MarkoText matching `/&[#\w]*$/` precedes an escaped placeholder, write that `&` as `&amp;` at compile time (no runtime bytes), and add a fixture.

Check: a fixture dir under `packages/runtime-tags/src/__tests__/fixtures/` with `template.marko` of `<p>&${input.x}</p>` and a `test.ts` config of `steps: [{ x: "copy;" }]`, run through `pnpm run test:update -- --grep "runtime-tags/translator <fixture> "` writes `writes.html` as `<p>&copy;</p>` and `render.md` showing `©`, and the csr run fails with `Snapshot conflict: "render.debug.md" was written with different content by two tests.`
