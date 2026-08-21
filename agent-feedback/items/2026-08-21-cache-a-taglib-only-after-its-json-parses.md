---
type: bug
impact: high
effort: low
site: packages/compiler/src/taglib/loader/loadTaglibFromFile.js › loadFromFile
---

# Cache a taglib only after its JSON parses; today a fixed `marko-tag.json` never reloads

`loadFromFile` runs `cache.put(filePath, taglib)` before `jsonFileReader.readFileSync(filePath)`, so a malformed `marko-tag.json` leaves an empty `Taglib` in the module-level cache. The parse error surfaces once; every later lookup in the same process takes the `if (!taglib)` early exit and returns that empty taglib with no error at all, so the tag silently stops existing and the consuming template reports `Unable to find entry point for custom tag <legacy-panel>` — pointing at the file that used the tag rather than the file that is broken. Repairing the JSON does not clear it: only `taglib.clearCaches()` does, which is why a dev server has to be restarted after a taglib typo and why the symptom outlives its cause. Move the `cache.put` after `loadTaglibFromProps` succeeds (or key the entry on mtime/content so a repaired file re-reads), and carry the parse position into the message — `json-file-reader.js` already attaches `Expected ',' or '}' after property value in JSON at position 52 (line 1 column 53)` as `cause` while `Unable to parse JSON file at path "…"` says none of it.

Check: with a malformed `marko-tag.json`, `loader.loadTaglibFromFile(f)` throws `Unable to parse JSON file at path "…"`; rewrite the file to valid JSON and call it again in the same process — it returns a taglib whose `tags` keys are `[]`, and only returns `["legacy-panel"]` after `taglib.clearCaches()`. Expect the second call to return the tag.
