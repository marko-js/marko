---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › tagNotFoundError
---

# Suppress a did-you-mean that repeats the tag name that just failed

`tagNotFoundError` accepts any `closest` match with `distance(tagName, closestTag) < 4`, and 0 is under 4, so a tag that is present in the taglib but has no resolvable entry point suggests itself: a `marko.json` declaring `"<my-thing>"` with no template makes `<my-thing/>` report ``Unable to find entry point for [custom tag](…) `<my-thing>`. Did you mean `<my-thing>`?`` A suggestion identical to the input reads as a compiler malfunction and sends the reader looking for a typo instead of a missing renderer, and it is not exotic — the open item on `resolveMarkoFile` records the same shape for a relative child template that fails to parse. Case-only misses land in the same branch from the other side: `<DIV>x</DIV>` is edit distance 3 from both `div` and `a`, `closest` returns `a`, and the message never mentions that tag names are case-sensitive. Require `distance > 0`, and prefer a case-insensitive exact match over edit distance so an uppercase native tag is told what is actually wrong.

Check: with `marko.json` holding `{ "<my-thing>": { "attributes": { "*": "string" } } }`, `pnpm run compile -- -o html -d` on `<my-thing/>` prints ``Did you mean `<my-thing>`?`` and on `<DIV>x</DIV>` prints ``Did you mean `<a>`?``; expect the first suggestion dropped and the second replaced by a case-sensitivity note naming `<div>`.
