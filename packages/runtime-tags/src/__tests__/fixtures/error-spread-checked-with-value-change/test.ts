import type { TestConfig } from "../../main.test";

// `checked` makes an `<input>` checkable and a checkable's value is never
// user-editable, so both runtimes must name the pair rather than blaming
// serialization (SSR) or the handler's type (CSR).
export const config: TestConfig = {
  error_html: true,
  error_dom: true,
  skip_optimize: true,
  steps: [{ attrs: { checked: true, value: "x", valueChange: () => {} } }],
};
