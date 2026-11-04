import type { TestConfig } from "../../main.test";

// An `<await>` of a constant in an `<if>` a patch creates: its body's effect
// reads the value the flush seeds, once per creation.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: true }, { show: false }, { show: true }],
};
