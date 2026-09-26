---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/attrs.ts › _attrs
---

# Claim a spread input, details or dialog change handler by key in SSR

The `input` and `details`/`dialog` cases of `html/attrs.ts › _attrs` claim a controllable only when its handler is truthy (`data.checkedChange`, `data.checkedValueChange`, `data.valueChange`, `data.openChange`), while `dom/controllable.ts › _controllable_input` and `_controllable_open` claim on `"checked" in` / `"checkedChange" in` and the matching `checkedValue`, `value` and `open` pairs. `assertHandlerIsFunction` accepts a falsy handler, so a spread such as `{ valueChange: 0 }` renders `valuechange="0"` on the server and no attribute on the client, and a checkbox spread `{ checkedValueChange: 0 }` is also checked only on the client. Direction: use the client's `in` tests in `_attrs` (server-only, no client bytes), as its `select`/`textarea` case does, then compare the checkbox's `checked` in both renders.

Check: fixture `<input ...input.a/>` + `<input type="checkbox" ...input.b/>` + `<input type="checkbox" ...input.c/>` + `<details ...input.d>x</details>` with `equivalent: false` and steps `[{ a: { valueChange: 0 }, b: { checkedChange: 0 }, c: { checkedValueChange: 0 }, d: { openChange: 0 } }]`: `render-ssr.debug.md` shows `valuechange="0"`, `checkedchange="0"`, `checkedvaluechange="0"` and `openchange="0"`, while `render-csr.debug.md` shows none of them and `checked=""` on the third input.
