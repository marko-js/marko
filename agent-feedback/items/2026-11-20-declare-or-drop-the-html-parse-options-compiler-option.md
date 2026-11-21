---
type: unclear
impact: low
effort: low
site: packages/compiler/src/babel-plugin/parser.ts › createMarkoBuilder
---

# Declare or drop the undocumented `htmlParseOptions` compiler option

`createMarkoBuilder` reads `file.markoOpts.htmlParseOptions.preserveWhitespace` to preserve whitespace across a whole template, but `config.d.ts` does not declare `htmlParseOptions`, `src/config.ts` gives it no default, and no test or marko-js repo sets it, so the parser casts the config to read it. Either declare it (typed, defaulted and tested) or remove the read.

Check: `git grep -n htmlParseOptions` lists only `packages/compiler/src/babel-plugin/parser.ts`.
