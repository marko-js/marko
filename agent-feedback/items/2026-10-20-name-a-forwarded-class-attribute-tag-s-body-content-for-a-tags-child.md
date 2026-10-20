---
type: bug
impact: med
effort: med
site: packages/runtime-class/src/translator/tag/util.js › getAttrs
---

# Name a forwarded Class attribute tag's body `content` for a Tags child

A Class template names an attribute tag's body `content` only when it passes the tag straight to a Tags-API child (`getAttrs`' `renderBodyKey`). Forwarded through a Class component (`<class-middle><@foo>text</@foo></class-middle>`, where `class-middle` renders `<tags-child foo=input.foo/>`), the Tags child receives `{ renderBody }`, so `<div ...input.foo/>` writes a `renderbody` attribute holding the function's source, and a debug build throws ``The `renderBody` attribute cannot be a function.`` The Class-to-Tags boundary (`compat.render`) renames only a top-level `renderBody`. Have that boundary also name attribute tag bodies in the input `content`, the way a direct child receives them; the compat then converts each where the child renders it.

Check: a `fixtures-interop` fixture whose `template.marko` is `class {}`, `<class-middle><@foo>forwarded text</@foo></class-middle>` and `<init-components/>`, whose `components/class-middle.marko` is `class {}` then `<tags-child foo=input.foo/>`, and whose `components/tags-child.marko` is `// use tags` then `<div ...input.foo/>`, fails `pnpm run test:update -- --grep "translator-interop <name> "` in debug with ``The `renderBody` attribute cannot be a function.``
