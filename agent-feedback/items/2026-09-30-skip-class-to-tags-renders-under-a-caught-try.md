---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/html/compat.ts › compat.render
---

# Skip a class-to-tags render whose enclosing tags `<try>` already caught

`compat.render` gives each class-to-tags render a new parentless `Boundary`, so the writer cannot see the tags `<try>` around the class component. When class content settles after that `<try>`'s `@catch` fired, the tags child still renders into the render's shared `State`: its HTML is dropped with the class output (`_await` skips the aborted boundary), but its effects, parked in `completeChunks`, stream through `onFlush` and run in the browser for nodes that never arrived. The class `out` a tags-to-class render creates could carry the tags chunk it renders in, so `compat.render` can skip, or parent its boundary to, an aborted one.

Check: an interop fixture under `fixtures-interop/` with `steps: [{}, wait]` logs `"caught body effect"` in `render-ssr.debug.md` › `## Console` while "grandchild" never renders:

```marko
// template.marko
// use tags
import { rejectAfter, resolveAfter } from "../../utils/resolve";

<try>
  <@catch|err|>caught ${err.message}</@catch>
  <class-child value=resolveAfter("class", 2)/>
  <await|v|=rejectAfter(new Error("ERROR!"), 1)>${v}</await>
</try>
<await|done|=resolveAfter("done", 3)>${done}</await>

// components/class-child.marko
// use class
<await(input.value)>
  <@then|value|>
    <div id="class-await">${value}</div>
    <tags-grandchild/>
  </@then>
</await>

// components/tags-grandchild.marko
// use tags
<script>console.log("caught body effect")</script>
<div>grandchild</div>
```
