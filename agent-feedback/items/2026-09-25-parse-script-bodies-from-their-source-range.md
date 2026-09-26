---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/script.ts › parse
---

# Parse a `<script>` body at the positions its text came from

`parse` concatenates the body's MarkoText values and hands the result to `parseBlock` at `body[0].start`, which assumes the values are one contiguous source slice. They are not: a concise `script --` block's text leaves out each line's indentation, and an escaped `\${` loses its backslash, so every later position (error code frames and source maps) shifts. `div` + `script --` + `  const a = 1;` + `  const b = ;` reports the error at 4:11, while the same body in `<script>…</script>` reports it at 3:13, the real column; `<script>` + `  const s = "\${x}"; const b = ;` + `</script>` reports 2:31 for a `;` at column 32. Build the code with each text node at its own offset (for example by filling the gaps between nodes from `file.code`) or parse `file.code.slice(start, end)`, and pin the concise case with an `error_compiler` fixture, whose snapshot records the code frame.

Check: `pnpm run compile -- -o html -d` on the four-line concise template `div` / `script --` / `  const a = 1;` / `  const b = ;` fails with a code frame at `4:11`; the `;` is at column 13.
