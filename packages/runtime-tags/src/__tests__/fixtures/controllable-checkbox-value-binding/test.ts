import type { TestConfig } from "../../main.test";

// Binding `value` on an input whose type is attribute-backed (checkbox, radio,
// hidden, …) is a mistake — user interaction can never change `value` — so
// debug builds emit a `console.error` from both runtimes, captured under
// `## Console`. The types here are dynamic; statically-known types are a
// compile error instead (see `error-checkbox-value-binding`). Debug-only, so
// optimize is skipped; the server's static-typed path has no type to check,
// so the SSR and CSR consoles differ.
export const config: TestConfig = {
  skip_optimize: true,
  equivalent: false,
  steps: [{ checkboxType: "checkbox", hiddenType: "hidden" }],
};
