---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/dom.ts › _attrs_partial
---

# Match a camelCase spread attribute key in the case the DOM reports

A spread key keeps its authored case, but the parser lowercases attribute names (on SVG and MathML too, except each language's own camelCase names like `viewBox`), so a key such as `tabIndex` never matches the name the DOM reports. Beside a lowercase static attribute (`<div ...rest tabindex=0>`), the skip object in `dom/dom.ts › _attrs_partial` and `html/attrs.ts › _attrs_partial` misses the key: the server writes `tabindex=0 tabIndex=5` and the parser keeps the first, while the client's `setAttribute("tabIndex")` overwrites the static value, so the renders differ and the first update after resume replaces the static value. On an SVG element the client's `dom/dom.ts › setAttribute` keeps the case while the server's `tabIndex=` parses to `tabindex`, so the two render different attributes. Every spread update in `dom/dom.ts › _attrs` and `_attrs_partial` also removes such an attribute, since `el.attributes[i].name` is never `in` the spread, and `attrsInternal` sets it again. The translator cannot know a spread's keys, so the fix is in the runtime: match keys in the case the element's namespace reports, measured with `build:sizes`, or a `MARKO_DEBUG` warning for camelCase spread keys if that costs floor bytes.

Check: fixture `<let/rest = input.rest/>` + `<button onClick() { rest = { tabIndex: 7 } }>update</button>` + `<div ...rest tabindex=0 readonly>hi</div>` with `equivalent: false` and steps `[{ rest: { tabIndex: 5 } }, (d) => d.querySelector("button").click()]`: `render-ssr.debug.md` shows `tabindex="0"` and logs `div[tabindex] "0" => "7"`, `render-csr.debug.md` shows `tabindex="5"`. Fixture `<svg ...input.rest/>` with `equivalent: false` and steps `[{ rest: { tabIndex: 1 } }]`: `render-ssr.debug.md` shows `tabindex="1"`, `render-csr.debug.md` shows `tabIndex="1"`. Fixture `<div ...rest>hi</div>` with a button setting `rest = { tabIndex: 2 }` and steps `[{ rest: { tabIndex: 1 } }, click]`: the update's `## Change` log shows `div[tabindex] "1" => "2"` and then `div[tabindex] null => "2"` (a removal and a re-add).
