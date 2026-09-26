---
type: bug
impact: low
effort: low
site: packages/compiler/src/babel-utils/tags.js › getTagTemplate
---

# Resolve `getTagTemplate` for an imported tag against the template's directory

For a tag named by an imported identifier (`extra.tagNameImported`, set by `packages/runtime-tags/src/translator/util/tag-name-type.ts`), `getTagTemplate` returns `join(file.opts.filename, tagNameImported)`. That appends the request to the template's own file path (`/app/page.marko/foo.marko`) and never resolves a package request. The in-repo callers (`custom-tag.ts` and `dynamic-tag.ts` under `packages/runtime-tags/src/translator/visitors/tag/`) only test the result for truthiness. But `getTagTemplate` is public `@marko/compiler/babel-utils` API, typed as returning the template path, so a taglib hook that reads or loads it gets a file that does not exist. Direction: resolve it the way `loadFileForImport` does, with relative requests against `dirname(file.opts.filename)` and others through `markoModules.resolve`, and add a unit test.

Check: in a directory with `marko.json` `{ "translate": "./t.cjs" }`, `t.cjs` `const { getTagTemplate } = require("@marko/compiler/babel-utils"); module.exports = { MarkoTag(tag) { console.error(getTagTemplate(tag)); } };`, `foo.marko` `<div/>`, and `index.marko` `import Foo from "./foo.marko";` + `<Foo/>`, `pnpm run compile -- -o html -d <dir>/index.marko` prints `<dir>/index.marko/foo.marko`.
