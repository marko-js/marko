---
type: perf
impact: med
effort: high
site: packages/runtime-tags/src/translator/visitors/tag/custom-tag.ts › analyze.enter
---

# Skip child client wiring for constant-input instances of client-inert tags

A custom-tag call site always emits the child's client wiring even when every input is a compile-time literal, so the child's dom module ships and its input signals re-run on every client-created instance. Compiling `<div><Icon name="a"/><Icon name="a"/></div>` to dom against an `icon.marko` that only maps a `static const` manifest onto an `<img>` emits `_Icon($scope.a); _tag_input_name($scope.a, "a")` twice plus the `./icon.marko` imports, on a page with zero dynamic content. The cross-file channel half-exists beside `childExtra.domExports?.setupEmpty`: have child analysis also export a "no client-observable behavior" flag and let an all-constant call site emit nothing, dropping the import too — a top-level side effect (`<style>`, `_script` resume, un-annotated `static`) otherwise retains the module. Purity of the child's inputs is not that flag: `_tag_input_name`'s `_attr($scope["#img/0"], "src", ...)` is a pure function of a constant input yet is the only thing that sets `src` when the child is created on the client (it lands in the branch content setup inside an `<if>`), so the flag has to prove the child adds nothing to the cloned DOM — no DOM writes, handlers, effects, or resume registrations — unless the call site also folds the constant into a specialized template.

Check: with that two-instance dom compile.
