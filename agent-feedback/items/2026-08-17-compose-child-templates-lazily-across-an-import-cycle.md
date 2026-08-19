---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/translator/util/structure.ts › resolveRef
---

# Compose child templates lazily across an import cycle

Mutually recursive custom tags (`tags/a-tag` renders `b-tag`, which renders `a-tag`) compile per template, but the DOM output's static template-string composition (`const $template$1 = ((_w0) => `...${_w0}...`)($template$2)`) references the sibling's module-level const across the import cycle, so the bundler's concatenation order throws `Cannot access '$template$1' before initialization` at module evaluation, before any render. The composition should be lazy (or bail to a runtime reference) when the child resolves through a cycle. Mode-agnostic: reproduces with `persisted: false`.

Check: two tags rendering each other behind a depth guard; bundle the page and import the dom bundle: eval throws.
