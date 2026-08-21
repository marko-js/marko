---
type: bug
impact: med
effort: med
site: packages/runtime-tags/tags-html.d.ts › HTMLAttributes.content
---

# Render a string `content` as text, or drop `AttrString` from the attribute type

Every element inherits `content?: AttrString | Marko.Body | Marko.Template`, so `<button content="Save changes"/>` and `render(Tpl, { content: "Save" })` against `interface Input extends Marko.HTML.Button {}` both type-check, and then no path accepts the string: `html/writer.ts › normalizeServerRender` throws ``Invalid `content` attribute. Received string``, and a template that forwards it with `<${input.content}/>` treats the string as a tag name — `"Save changes"` throws `Invalid tag name`, while `"Save"` silently emits `<button><Save></Save></button>`. `Marko.Renderable` also lists `string`, and is referenced nowhere. Either make a string `content` render as text in both positions, or narrow the type; note the string arm is load-bearing for `interface Meta extends HTMLAttributes<HTMLMetaElement>`, which re-declares `content?: AttrString` and hits TS2430 if the base drops it.

Check: server-render `<button content="Save changes"/>` — ``Invalid `content` attribute. Received string`` today; and `<button><${input.content}/></button>` with `content: "Save"` emits `<button><Save></Save></button>`. Expect `<button>Save changes</button>` / `<button>Save</button>`, or a type that rejects the string at the call site.
