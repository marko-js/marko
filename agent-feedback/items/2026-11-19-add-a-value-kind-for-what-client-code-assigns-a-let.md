---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/evaluate.ts › getIdentifierKind
---

# Add a value kind for what client code may assign a `<let>` so a tag name it holds is known from its writes

`getValueKind` reads a `<let>` as unknown, so `<${Tag}>` over a `<let>` is always a dynamic tag whose templates are unknown, and its body registers (`_content_resume`) even when every write is a native name, or is the template it starts as and `null`. The same names written in place give a pure `_content`. A `<let>`'s settled kind, its value's kind joined with every assignment's (unknown where a change handler or a destructuring writes it), would tell a client-picked name that can become a given template from state that is only cleared, and its nullish bit is what the item on marking a `<let>` non-nullable asks for. This is the cross-binding part, a real addition: `analyzeTagNameType` runs before every assignment is seen, so the readers of a name's templates must ask it once analysis is done.

Check: `pnpm run compile -- -o dom -d` on `<let/Tag="div"/><${Tag}>Hello</><button onClick() { Tag = "section" }/>` emits `_content_resume(…, "Hello")`, and on `<${input.on ? "div" : "section"}>Hello</>` a pure `_content(…, "Hello")`; the same holds for `<let/Tag=Frame/>` with `Tag = null` against `<${input.on ? Frame : null}>Hello</>`, `Frame` a `.marko` default import.
