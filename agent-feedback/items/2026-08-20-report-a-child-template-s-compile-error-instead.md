---
type: bug
impact: high
effort: med
site: packages/compiler/src/babel-utils/tags.js › resolveMarkoFile
---

# Report a child template's compile error instead of `<undefined>` on the parent tag

`resolveMarkoFile` wraps `___getMarkoFile` in a bare `catch (_) {}`, so a child template that fails to parse is indistinguishable from one that does not exist: `analyzeTagNameType` marks the parent tag unresolved and `custom-tag.ts › tagNotFoundError` blames the parent, while the child's message, file and line are dropped. The result is a build that only ever names the parent, so recovering the real error means bisecting components one build at a time. It also prints the tag as `<undefined>` for an imported PascalCase tag, because `analyzeTagNameType` reads `.value` off an `Identifier` name node and `getTagName` returns `undefined` for anything that is not a string literal. Narrow the catch to a missing file and rethrow the child's compile error (`CompileError`, or the `CompileErrors` that `merge-errors.js` throws when the child reports several), and fall back to `getStaticTagName` when `getTagName` has no name.

Check: with `tags/broken.marko` holding an `<if=true>…<else>…</if=oops>` mismatch, `pnpm run compile -- -o html -d parent.marko` on a parent of `import Page from "./tags/broken.marko"` + `<Page/>` prints ``Unable to find entry point for [custom tag](…) `<undefined>` `` at the `<Page/>` line (a relative `<broken/>` instead prints ``Did you mean `<broken>`?``), while compiling `tags/broken.marko` alone prints `The closing "if=oops" tag does not match the corresponding opening "else" tag`. Expect the parent build to surface the child's message and position, and never to print `<undefined>`.
