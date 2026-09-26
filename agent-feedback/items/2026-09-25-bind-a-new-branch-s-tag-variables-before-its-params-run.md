---
type: bug
impact: high
effort: med
site: packages/runtime-tags/src/dom/renderer.ts › setupBranch
---

# Bind a new branch's tag variables before its params run

A known child's tag variable is bound by `_var`, which `translator/util/known-tag.ts` emits into the section setup, and `setupBranch` only queues that setup as a render. `control-flow.ts › loop`, `_await_promise`'s `resolveAwait`, `_dynamic_tag` (content rendered with params) and `renderCatch` create the branch and then call its params synchronously, so the child's input Signal makes its first `_return` while `scope[childAccessor][AccessorProp.TagVariable]` is still unset, and that value is lost until the child returns again. On the client every `<child/v x=item/>` inside a `<for>`, an `<await>` body, or content rendered through `<${input.content} value=…/>` leaves `v` undefined; SSR is correct, but rows added after resume are empty too. Direction: have setup run before params for a newly created branch (queue the params behind the setup, or run the setup synchronously when params follow), or bind `_var` at walk time for `BeginChildWithVar`.

Check: fixture with `tags/child.marko` = `<return=input.x/>` and `template.marko` = `<let/list=["a", "b"]/>` `<button onClick() { list = [...list, "c"] }/>` `<for|item| of=list><child/v x=item/><p>${v}</p></for>`, `equivalent: false`, steps `[{}, (d) => d.querySelector("button")!.click()]`: `render-csr.debug.md` renders every `<p>` empty, and `render-ssr.debug.md` shows `a`, `b` and then an empty third `<p>`. Adding `tags/wrap.marko` = `<${input.content} value="w"/>` with `<wrap|{ value }|><child/v x=value/><p.wrap>${v}</p></wrap>`, and `<await|value|=resolveAfter("a", 1)><child/v x=value/><p.await>${v}</p></await>` (importing `resolveAfter` from `"../../utils/resolve"`) with a `wait` step before the click, leaves `.wrap` and `.await` empty in CSR as well.
