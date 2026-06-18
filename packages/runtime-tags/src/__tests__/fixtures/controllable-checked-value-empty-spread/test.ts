import type { TestConfig } from "../../main.test";

// A one-way `checkedValue=""` provided through a spread must still be routed to
// the controlled-value logic. It is falsy, so the old truthy `data.checkedValue`
// guard dropped it — leaking a bogus `checkedValue` attribute and never
// computing `checked` on the server, while CSR did → hydration mismatch.
// With `v = ""` the `value=""` checkbox is checked; toggling `v` to "x" unchecks
// it (the binding no longer matches the empty value).
function toggle(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle],
};
