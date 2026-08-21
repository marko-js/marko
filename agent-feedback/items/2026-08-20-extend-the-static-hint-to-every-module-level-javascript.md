---
type: dx
impact: high
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › knownWrongTags
---

# Extend the `static` hint to every module-level JavaScript statement

`core/const.ts` and `core/let.ts` end their errors with "For a one time module level value, prefix a plain JavaScript statement with `static`", but the same mistake spelled with any other statement keyword falls through to `tagNotFoundError` and gets a nearest-name suggestion that points away from the fix: `function fmt(n) {}` reports ``Did you mean `<section>`?``, `type Row = {}` reports ``Did you mean `<style>`?``, `async function go() {}` reports ``Did you mean `<aside>`?``, and `declare const D: string` gets no hint at all. `knownWrongTags` is already the curated-pointer hook for tag names that mean something else, so `function`/`type`/`interface`/`async`/`declare`/`enum` belong in it with the `static` sentence, and a JS keyword should suppress the did-you-mean rather than measure edit distance against HTML tags. `var v = 1` is the silent case: `<var>` resolves, so it compiles to `<var v=1></var>` with no diagnostic. `packages/runtime-tags/cheatsheet.md` golden rule 10 already documents the gap as "an error that never says `static`".

Check: `pnpm run compile -- -o html -d x.marko` on a root-level `function fmt(n) {}` prints ``Unable to find entry point for [custom tag](…) `<function>`. Did you mean `<section>`?`` and on `var v = 1;` emits `<var v=1></var>` with no diagnostic; each should carry the `prefix a plain JavaScript statement with static` sentence `<const>` gives, with no HTML did-you-mean for a JS keyword.
