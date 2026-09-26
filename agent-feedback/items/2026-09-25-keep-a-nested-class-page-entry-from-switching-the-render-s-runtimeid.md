---
type: bug
impact: low
effort: low
site: packages/runtime-class/src/runtime/helpers/load-tag.js › withPageAssets
---

# Keep a nested class page entry from switching the enclosing render's runtimeId

`withPageAssets` assigns `g.runtimeId = runtimeId` before it computes `hasAssets`, so a Marko 5 page entry compiled with a `runtimeId` and rendered inside another page's render rewrites the shared `$global.runtimeId` for the rest of the stream. The outer page's later component comments (`@internal/components-beginComponent`, `@internal/components-endComponent`) and its init-components global (`@internal/components-entry` › `getInitComponentsCodeFromData`, `$MC` becomes `$X_C`) switch to the nested id, so the outer page's client never finds its components; in an interop page the shared `$global` also switches the Marko 6 `State.commentPrefix`. The MARKO_DEBUG conflict check misses it because it only compares when the outer id is not `DEFAULT_RUNTIME_ID`. Direction: compute `hasAssets` before the runtimeId block, apply the override only when `!hasAssets`, and in MARKO_DEBUG report a nested entry whose compiled runtimeId differs, as `packages/runtime-tags/src/html/assets.ts` › `withPageAssets` does.

Check: in a directory inside the repo, `node -r ~ts` a CommonJS script that requires `@marko/compiler/register`, wraps a class template `<span>inner</span>` as `withPageAssets("inner", template, () => "", "X")` (from `packages/runtime-class/src/runtime/helpers/load-tag.js`) and a class template `<div><child/><${input.inner}/><child/></div>` (with `components/child.marko` a class component with state) as `withPageAssets("outer", template, () => "")`, then renders the outer one with `{ inner }`: the output has `<!--M#s0-1-->` before the nested page, `<!--X#s0-3-->` and `<!--X/-->` after it, and ends with `$X_C=(window.$X_C||[])`.
