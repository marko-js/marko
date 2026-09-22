---
type: bug
impact: med
effort: high
site: packages/runtime-tags/src/translator/util/translate-var.ts › translateVar
---

# Serialized rest bindings miss input updates after resume

When a rest destructure from a `<const>` tag var is hoisted to the owner
section for serialization (the `binding.excludeProperties` branch of
`translateVar`), an input update after SSR resume does not re-render the
elements the rest binding is spread onto, while CSR updates them correctly, so
the equivalent render snapshots diverge.

Check: in `fixtures/rest-alias-nested-scope/test.ts`, add a second step
`{ value: { foo: "baz", class: "test2" } }` and run
`pnpm test -- --grep "runtime-tags/translator rest-alias-nested-scope "` —
the debug csr mode fails because the resume-generated snapshot lacks the
update. Same behavior in `fixtures/dynamic-tag-spread-rest-in-custom-tag-body`
with a second step `{ button: { label: "Press", id: "second" } }`.
