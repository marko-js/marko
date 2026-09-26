---
type: bug
impact: low
effort: low
site: packages/runtime-tags/src/html/assets.ts › withPageAssets
---

# Keep a nested page entry from switching the enclosing render's runtimeId

`withPageAssets` assigns `g.runtimeId = runtimeId` before its `g.__flush__` check, so a page entry compiled with a `runtimeId` and rendered inside another page's render rewrites the shared `$global.runtimeId` for the rest of the stream. `State.commentPrefix` and `State.runtimePrefix` read it on every call, so the outer page's later resume comments, its walker runtime call and its resume payload all switch prefix (from `M` to the nested entry's id), and the outer page's client never resumes. The MARKO_DEBUG conflict check misses it because it only compares when the outer id is not `DEFAULT_RUNTIME_ID`. Direction: apply the override only on the top-level branch, and report in MARKO_DEBUG a nested page whose compiled runtimeId differs from the enclosing render's.

Check: `node -r ~ts` a script in the repo root that imports `_template`, `_html`, `_text_resume`, `_scope_id`, `_scope`, `_script` and `withPageAssets` from `./packages/runtime-tags/src/html.ts`, wraps an inner `_template("inner", () => _html("<span>inner</span>"), 1)` with `withPageAssets(inner, () => "", "inner", "X")` and an outer `_template("outer", …, 1)` with `withPageAssets(outer, () => "", "outer")`, where the outer renderer (with `id = _scope_id()`) writes `_html(_text_resume(id, "#text/0", "a"))`, calls the wrapped inner page with `{}`, writes `_html(_text_resume(id, "#text/1", "b"))`, then calls `_scope(id, { v: 1 })` and `_script(id, "outer_effect")`. `String(outer.render({}))` has `<!--M_$1 #text/0-->` before the nested page and `<!--X_$1 #text/1-->` after it, and ends with the walker called as `("X")("_")` and `X._.r=[_=>[1,{v:1}],"outer_effect 1"]`.
