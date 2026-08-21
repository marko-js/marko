---
type: bug
impact: high
effort: low
site: packages/compiler/src/babel-utils/tags.js › getTemplateId
---

# Escape rather than fold unusual characters in a template id, which collide today

`getTemplateId` builds its id with `relative(root, request).replace(/[^a-zA-Z0-9_$./-]/g, "/")`, so every character outside that set becomes a path separator and two different files can produce one id: `foo+bar.marko` and `foo/bar.marko` both yield `.../foo/bar.marko`, and with `optimize: true` both hash to one `_template("<id>", …)`. That id is the key of the resume registry (`dom/resume.ts › _resume` does `registeredValues[id] = obj`), so a collision silently cross-wires two templates in production rather than failing the build. `+` is not exotic — every `@marko/run` route file is `+page.marko`/`+layout.marko`, so those ids already carry a doubled slash with the `+` gone, and spaces, `[`, `(` and non-ASCII fold the same way. Encode the rejected characters instead of replacing them (or hash the untouched relative path), and while there declare the `getTemplateId` override the function honours in `config.d.ts`, which does not list it today.

Check: put `foo+bar.marko` and `foo/bar.marko` side by side, `pnpm run compile -- -o html` both, and compare the emitted `_template("…")` id — the two are byte-identical (as is `meta.id`, `…/foo/bar.marko` for both); expect distinct ids.
