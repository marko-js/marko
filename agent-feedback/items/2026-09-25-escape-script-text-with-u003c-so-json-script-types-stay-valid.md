---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/html/content.ts › _escape_script
---

# Escape `html-script` text with `\u003C` so JSON script types stay valid

`escapeScriptStr` (behind `_escape_script`) rewrites `</script`, `<script` and `<!--` as `\x3C…`, which is valid JavaScript but not JSON (`\x` is no JSON escape). So an `<html-script type="application/ld+json">` (or `importmap`, `speculationrules`) whose data contains `</script>` is served as invalid JSON (an import map fails to register), while a client render writes the raw text. `\u003C` is valid in JavaScript strings, template literals, regular expressions and JSON strings alike. Direction: emit `\u003C` in `escapeScriptStr` (it also feeds `html/assets.ts › writeTriggerScript`) and update `__tests__/html-content.test.ts`, which pins `\x3C`.

Check: fixture `<html-script type="application/ld+json">${JSON.stringify({ a: input.a })}</html-script>` with `equivalent: false` and `steps: [{ a: "</script>" }]`: `render-ssr.debug.md` shows `{"a":"\x3C/script&gt;"}`, which `JSON.parse` rejects, and `render-csr.debug.md` shows `{"a":"&lt;/script&gt;"}`.
