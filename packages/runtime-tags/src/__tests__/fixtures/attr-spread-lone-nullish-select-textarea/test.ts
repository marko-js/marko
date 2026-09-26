import type { TestConfig } from "../../main.test";

// A lone spread that resolves to `null` renders an attribute-less `<select>`
// and `<textarea>` with nothing claimed, as it does on the client.
export const config: TestConfig = {
  steps: [{ attrs: null }],
};
