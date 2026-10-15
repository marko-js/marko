---
type: bug
impact: med
effort: low
site: packages/runtime-tags/src/translator/util/known-tag.ts › analyzeKnownTagParams
---

# Tie a `<define>` call's body to the param after its arguments

A `<define>` call with arguments passes its input (the body as `content`, and any attribute tags) after them: the server render does for a direct call, and a dynamic tag (`<${Tag}(n)>body</>`) passes the body the same way in both outputs. `analyzeKnownTagParams` hands `setTagContentDerives` the first param (`paramsTree.props[0]`) rather than the one at the argument count, so a body read through that input looks unread; with the first param unread too, the body's renderer is elided and the DOM compile of a direct call crashes in `writeAttrsToSignals`. Only server-only templates can use a body next to arguments. The derives belong to the param at `tag.node.arguments.length`.

Check: `pnpm run compile -- -o dom -d x.marko` with `<let/n=1/><define/X|a, opts|><${opts.content}/></define><X(n)>hi</X><button onClick() { n++ }/>` throws "Property callee of CallExpression expected node to be of a type [...] but instead got undefined"; the same define called as `<const/Tag=input.other ? "div" : X/><${Tag}(n)>hi ${n}</>` compiles and passes the body to `_dynamic_tag`.
