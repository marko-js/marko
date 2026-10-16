---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › isChangeableDynamicClosure
---

# Skip the subscribe id in a branch the server never renders

`isChangeableDynamicClosure` gives a dynamic closure's subscriber a resume id both outputs share: the dom's `_closure_get(…, id)` registers it, and the html's `_subscribe(…, id)` names it. Under a branch whose expression reads a `<let>` with a falsy literal initial value (`<let/open=false/>` around `<if=open>`), the server never renders the body. The html bundler drops it as dead code, so nothing names the id, and the dom registration ships for nothing: a few bytes per closure. Deciding it in the translator means evaluating a branch expression with each `<let>` at its initial value, which is sound only where no assignment can run during the server render (a function a `<const>` calls may assign one); weigh that analysis against the bytes.

Check: `define-tag-content-recursive`'s `__snapshots__/dom.bundle.js` registers `_closure_get(…, "a0")`, and its `html.bundle.js` never names `a0`, while `pnpm run compile -- -o html <fixture>/template.marko` still writes the `_subscribe` inside the branch.
