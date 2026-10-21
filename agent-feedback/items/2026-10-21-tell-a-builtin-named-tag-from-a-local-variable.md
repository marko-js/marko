---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/tag-name-type.ts › tagNotFoundError
---

# Tell a tag named like a built-in global from a local variable

`tagNotFoundError` and `analyzeTagNameType` test a tag name with `tag.scope.hasBinding`, which is also true for Babel's built-in globals (`Map`, `Date`, `Promise`, …). A `<Map/>` with no tag file therefore reports "Local variables must be in a dynamic tag unless they are PascalCase. Use `<${Map}/>` or rename to `Map`.", which is wrong on both counts, instead of "Unable to find entry point". `normalizeTag` in `visitors/program/pre-analyze.ts` already uses `scope.getBinding`, which only finds declared bindings; one shared `getTagNameBinding(tag)` (a string name matching `TAG_NAME_IDENTIFIER_REG`, then `getBinding`) would serve all three and keep the regex private.

Check: `printf '<Map/>\n' > map.tmp.marko && pnpm run compile -- -o dom map.tmp.marko` reports the local-variable message; `<Mapp/>` reports the expected "Unable to find entry point".
