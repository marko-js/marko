---
type: bug
impact: med
effort: low
site: packages/runtime-class/src/runtime/helpers/tags-compat/runtime-dom.js › create5to6Renderer
---

# Recognize a `<define>` value in the dom compat dynamic tag

With a Marko 5 class component on the page, the dom compat patch wraps every dynamic tag value that `domCompat.isRenderer` rejects as a Marko 5 renderer. `create5to6Renderer` looks for the renderer under `_`, `render` and `renderer`, but not `content`, so a `<define>` value (`{ content }`) chosen by a dynamic tag in a tags child, such as `<${input.which ? A : B}/>`, reaches the class runtime's dynamic tag, which reports `Invalid dynamic tag value`. The html side already reads `tag.content` (`runtime-html.js › getRenderer`'s `isMarko6(tag._ || tag.content || tag)`); the dom side should too. A direct `<${A}/>` is unaffected because analysis resolves it to the define.

Check: a `fixtures-interop` fixture whose `template.marko` is `class {}` with `<tags-define which=true/>` and `<init-components/>`, and whose `components/tags-define.marko` is `<define/A><b>a</b></define>`, `<define/B><i>b</i></define>`, `<${input.which ? A : B}/>`, fails `pnpm run test:update -- --grep "translator-interop <name> "` in debug csr, debug ssr and optimize ssr with `Error: Invalid dynamic tag value`.
