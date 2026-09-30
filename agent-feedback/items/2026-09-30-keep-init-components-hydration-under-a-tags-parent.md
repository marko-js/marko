---
type: bug
impact: med
effort: low
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-html.js › writeClassAPIResultToTagsAPI
---

# Keep `<init-components>`'s class hydration data under a Tags API parent

`<init-components/>` moves the component defs from `out.___components` into `writer._data.componentDefs` and empties the list, expecting `___toString` to write them. When a Tags API template renders that class template as a child, `writeClassAPIResultToTagsAPI` reads only `_content`, `_scripts` and `out.___components`, so no `$MC` payload is written and every class component in the subtree stays dead after resume. Forward `writer._data?.componentDefs` into the class API writer, as the class-to-tags `TagsCompat` listener already does.

Check: a `fixtures-interop` fixture with Tags `template.marko` `<let/n=0/><class-root/>` and `components/class-root.marko` a stateful class rendering `<button id="class" onClick("increment")>${state.count}</button><init-components/>`, steps `[{}, click("#class")]`: the SSR writes carry no `$MC` and the click logs nothing; without `<init-components/>` it counts.
