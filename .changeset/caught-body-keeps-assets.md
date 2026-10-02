---
"@marko/runtime-tags": patch
---

Write the assets a lazily loaded tag needs where nothing removes them. Those found before the page's `<head>` renders go in it, or ahead of the first flush on a page without one, so a lazily loaded layout's assets no longer precede its doctype. After that they're written where the tag renders, and when that content may be removed (by a `@catch`, by the body replacing a `@placeholder`, or by client control flow), its stylesheets are also copied into the `<head>` so the tag stays styled when it renders again. A tag whose assets or load trigger a `@catch` dropped writes them again. Assets used to be written all at once where the first lazy tag rendered, so a `@catch` replacing that content could drop the page's entry script, and the stylesheets, modules and load triggers other instances of the tag needed. A load trigger now inserts its module into the `<head>`.
