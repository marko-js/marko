import type { TestConfig } from "../../main.test";

// A lone spread that resolves to `null`/`undefined`/`false` on a controllable
// element must render as an attribute-less `<input>`, not crash `_attrs`.
export const config: TestConfig = {
  steps: [{ attrs: null }],
};
