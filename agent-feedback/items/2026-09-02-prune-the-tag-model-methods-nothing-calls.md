---
type: cleanup
impact: low
effort: low
site: packages/compiler/src/taglib/loader/Tag.js › Tag
---

# Prune the tag-model methods nothing calls

`Tag#toString`, `Tag#hasAttribute`, `Tag#hasNestedTags`, `Tag#toJSON` and `Tag#setTaglib` have no caller in this repo — `Tag#getAttribute` and `Tag#forEachAttribute` do (via `packages/runtime-class/src/translator/tag/util.js` and `tag/attribute/index.js`), which is what makes the unused half easy to miss. `Taglib#getAttribute` is in the same position, as are the whole `Transformer` class (`taglib/loader/Transformer.js`, constructed nowhere) and `Property` (`taglib/loader/Property.js`), both of which survive only as re-exports from `taglib/loader/types.js`.

These objects are handed to compiler plugins and to @marko/language-tools, so whether they are removable is a question about external consumers rather than about this repo; confirming that is the work.

Check: `rg -n '\.setTaglib\(|\.hasNestedTags\(|\.hasAttribute\(' packages/*/src` returns no hit against a taglib `Tag`, and coverage over the full suite leaves each of those methods unhit.
