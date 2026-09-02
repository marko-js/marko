---
type: bug
impact: med
effort: low
site: packages/compiler/src/taglib/loader/Taglib.js › Taglib#addAttribute
---

# Route a taglib-level pattern attribute into `patternAttributes`

`Tag#addAttribute` (`packages/compiler/src/taglib/loader/Tag.js`) pushes an attribute carrying a `pattern` onto `patternAttributes` and everything else onto `attributes`; `Taglib#addAttribute` skips that split and always writes `this.attributes[attribute.key]`. `Lookup` only ever matches patterns out of `patternAttributes` (`packages/compiler/src/taglib/lookup/index.js` › `Lookup#getAttribute` › `findAttributeForTag`, and `Lookup#forEachAttribute`), and `Lookup#addTaglib` merges `patternAttributes: taglib.patternAttributes` — permanently `[]`. So a global `"@data-*": { "pattern": true }` in a `marko.json` compiles its regexp, is stored under the literal key `"data-*"`, and then never matches anything. A tag-level `"@data-*"` works, which is what hides it. `Taglib#getAttribute` has the same pattern loop and no callers at all, so nothing in-repo notices.

Check: register a taglib with `{"@data-*": {"pattern": true, "type": "string"}, "<a-tag>": {"@x": "string"}}`, then `taglib.buildLookup(dir, "@marko/runtime-tags/translator")` — `getAttribute("a-tag", "x")` resolves and `getAttribute("a-tag", "data-id")` is `undefined`, with `lookup.merged.patternAttributes` empty.
