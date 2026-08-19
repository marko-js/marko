---
type: dx
impact: med
effort: med
site: packages/runtime-tags/src/translator/visitors/scriptlet.ts › translate.exit
---

# Diagnose cross-environment reads of a `server`/`client` scriptlet binding

When a scriptlet's `target` does not match the output, `translate.exit` replaces it with bare `var` declarations of its outer binding identifiers, so every cross-environment read compiles clean and silently evaluates to `undefined` — no compile error, no MARKO_DEBUG warning. `server function fmt(n) { return n + "!" }` with `<p>${fmt(input.n)}</p>` renders fine on the server but emits `var fmt;` plus `_text($scope["#text/0"], fmt(input_n))` for DOM, throwing `fmt is not a function` on the first client render. The translator already has the binding names it stubs and the reference paths at analyze, so it can raise a code frame naming the binding and its declaring environment. Any diagnostic must exempt `src/__tests__/fixtures/server-client/template.marko`, which deliberately reads both bindings from a `static` statement behind `typeof server_x === "undefined"`.

Check: `pnpm run compile -o dom -d` on that two-line template exits 0 with no diagnostic and writes `var fmt;` next to `fmt(input_n)`.
