---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/placeholder.ts › translate
---

# Separate a tag body's leading text from static text rendered before it

When a child template renders static text right before `<${input.content}/>` and the body it receives starts with `${…}`, the server writes both texts back to back with nothing between them, so the browser parses one text node and the body's resume marker claims all of it. The first update after resume then replaces the whole node, deleting the child's static text; the client render keeps it. The same text split works within one template because the placeholder there knows its static neighbor; across a tag body boundary neither side does. The server needs a separator (as between adjacent text in one section) wherever a body's leading placeholder can follow text its caller wrote.

Check: a fixture with `tags/child.marko` `-- hello\n<${input.content}/>`, template `<child>\n  ${input.n}\n</child>` and steps `[{ n: 2 }, { n: 3 }]` fails `pnpm run test:update` with a render.md conflict: the resumed page logs `UPDATE: ::text "hello2" => "3"`, the client render keeps `hello3`.
