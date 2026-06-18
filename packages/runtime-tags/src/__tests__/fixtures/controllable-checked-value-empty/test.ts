import type { TestConfig } from "../../main.test";

// `null`/`undefined`/`""` are treated as the same empty value, so a `value=""`
// checkbox bound to a void value renders/hydrates as checked (and stays checked
// since unchecking sets the binding to `undefined`, which still matches `""`).
// The `value=""` attribute must be present and consistent between SSR and CSR.
// This is a degenerate case (`value=""` on a checkbox is an anti-pattern); the
// point of the fixture is SSR/CSR consistency of the collapsed empty handling.
function toggle(container: Element) {
  container.querySelector("input")!.click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle],
};
