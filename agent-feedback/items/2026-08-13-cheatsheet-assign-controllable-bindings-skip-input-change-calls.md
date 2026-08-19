---
type: unclear
impact: med
effort: low
site: packages/runtime-tags/cheatsheet.md › Golden rules §7 controllable
---

# Cheatsheet: assign controllable bindings (skip `input.*Change` calls)

Controllable props document `value:=x` at the **call site**, but child tags often still write `input.openChange?.(false)`. Assignment on a controllable binding fires `*Change`:

```marko
<let/open:=input.open>
<button onClick() { open = false }>
```

Same for report-only pairs (`state`/`stateChange`). Prefer this over `input.openChange?.(false)`.

Runtime also supports `<const/{ open }=input>` (see `assign-destructured` fixtures). Under `@marko/type-check` in app tags that use `export interface Input { … }`, that destructure currently type-errors as `Property 'open' does not exist on type '{ value: Input; }'` while `<let/open:=input.open>` typechecks — either fix the `input` type for pattern bindings or document `:=` as the typed form.

Check: `mtc` both forms on a tag with `export interface Input { open?: boolean; openChange?: (v: boolean) => void }`.
