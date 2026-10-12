---
type: perf
impact: low
effort: med
site: packages/runtime-tags/src/translator/util/signals.ts › writeRegisteredFns
---

# Keep registered functions driven only by the template's input with the callers that can drive them

A registered function that closes over the template (its factory reads the scope) and that client code reads only when the template's input changes (its reason holds only the template's own params) is registered by `writeRegisteredFns` as `_resumed.<id> = factory` whenever the module loads, so a page rendering the template at its root bundles the factory and what it closes over for nothing. Build on the caller-kept content registrations (`2026-10-12-keep-input-driven-content-registrations-with-their-callers.md`): export the factory under its register id, wrapped in a pure `_resume(id, factory)` so whatever keeps the factory registers it, and let callers keep it through the same register module or load entry. A function exported from the template, or one closing over nothing of the template, stays registered by its module, since any importer may call it.

Check: a fixture whose `template.marko` is `<const/format=(v) => input.prefix + v/>`, `<child fmt=format value=input.value/>`, `<let/n=0/>`, `<button.inc onClick() { n++ }>${n}</button>`, with `tags/child.marko` `<span class="out">${input.fmt(input.value)}</span>`, rendered with `{ prefix: "p", value: "v" }`: its page bundle still holds `const $format = ($scope) => (v) => $scope.f + v; _resumed.a0 = $format;` (1,291 B brotli).
