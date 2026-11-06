---
type: cleanup
impact: low
effort: low
site: packages/runtime-tags/src/translator/util/structure.ts › trimTrailingExits
---

# Trim the walk comment along with the exits `trimTrailingExits` drops

`trimTrailingExits` removes trailing navigation codes from a `_content` renderer's walk string, then re-attaches the original leading comment, which still lists the removed codes. A dynamic tag body `<div><span>${input.name}</span></div>` compiles in dev to `/* next(2), get, out(2) */"E "`, and `out(2)` is no longer in the string. The comment only appears in debug output, but it is how a reader decodes a walk. Remove the trailing navigation entries (`next(n)`, `over(n)`, `out(n)`) from the comment along with the codes, or have `resolveStructure` produce the trimmed walk so the string and its comment come from one source.

Check: `pnpm run compile -- -o dom -d file.marko` on `<${input.tag}><div><span>${input.name}</span></div></>` prints `_content("…", "<div><span> </span></div>", /* next(2), get, out(2) */"E ", …)`.
