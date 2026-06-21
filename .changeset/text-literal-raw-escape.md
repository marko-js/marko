---
"@marko/runtime-tags": patch
---

Fix text-only native tags (`<title>`, `<style>`, `<html-comment>`, etc.) corrupting dynamic text in the client build. When such a tag's body contained a placeholder, the compiler built the template literal's `raw` string escaping only backticks — not backslashes or `${`. Babel emits code from `raw`, so a backslash in the static text became a JS escape sequence at runtime (e.g. `\b` → backspace) and a literal `${` became a stray interpolation; the server (HTML) build used the correct escaper, so SSR and the hydrated client diverged. The compiler now reuses the shared `escapeTemplateRaw` helper for these literals.
