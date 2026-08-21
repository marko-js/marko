---
type: bug
impact: med
effort: med
site: packages/runtime-tags/src/dom/controllable.ts › syncControllableFormInput
---

# Drive a controllable form element from `change` as well as `input`

`syncControllableFormInput` registers `delegate("input", handleChange)` and nothing for `change`, so a `change` event never reaches `valueChange`/`checkedChange`. A real user interaction fires both events, which hides the gap in a browser and leaves it a silent no-op anywhere only `change` is dispatched: `fireEvent.change(select, { target: { value: "c" } })` — dom-testing-library's documented idiom for a `<select>` — sets `select.value` and dispatches `change` but not `input`, so nothing reaches the handler and the component is left looking broken with no error and no warning. Programmatic writers that dispatch only `change` (password managers, third-party date/select widgets) fail the same way. Either delegate `change` beside `input`, deduping when the element already matches the `ControlledValue` slot so one interaction does not call the handler twice, or emit a `MARKO_DEBUG` diagnostic when a `change` lands on an element carrying a controllable handler.

Check: in `packages/runtime-tags/src/__tests__/fixtures/controllable-select/test.ts`, dispatch `new window.Event("change", { bubbles: true })` instead of `"input"` and run `pnpm test -- --grep "runtime-tags/translator controllable-select "` — the step renders no HTML block and no `## Change` section at all; it should produce the same `UPDATE: span::text "b" => "c"` the `input` dispatch does.
