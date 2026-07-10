# Cleanup

Duplication, dead code, inconsistencies, refactor opportunities. Format and rules: [README.md](README.md).

## Compile-time diagnostics: a pass over wording, code frames, and missed validations

`packages/compiler/src/babel-utils/assert.js:48` | 2026-07-10 | impact:med | effort:med

A cluster of diagnostic-quality gaps found while probing translator edge
cases; each is small, together they define the unhappy path:

- `assertNoAttributeTags` says "Tag not support nested attribute tags"
  (grammar) and, unlike the `core/if.ts` house style, carries no docs link
  (`packages/compiler/src/babel-utils/assert.js:48`).
- Assigning to a readonly binding via a change handler shorthand
  (`checked:=c` on a non-let) reports the readonly error without a code
  frame (`packages/runtime-tags/src/translator/core/const.ts:79`).
- "Invalid duplicate value attribute." (`translator/core/script.ts:79` and
  friends) has no location, tag name, or docs link.
- A lowercase `<define/foo>` used as `<foo/>` suggests "Did you mean
  `<for>`?" — the fuzzy matcher only consults core tags, producing a
  misleading hint for a plausible user mistake.
- The `<for>` "requires either an `of=`, `in=`, `to=`..." message omits the
  supported `until` attribute (`translator/core/for.ts:96`).
- `<effect=5/>` (any non-callable value in a function-typed core-tag
  position) passes compile and dies at runtime with `5 is not a function`;
  `translator/core/let.ts:88`'s `computeNode` pattern shows how to
  const-check these at translate time.

Suggest one sweep aligning all core-tag errors to the `core/if.ts` template:
code frame, backticked names, docs link, and compile-time rejection of
statically-known-invalid values.
