import type { TestConfig } from "../../main.test";

// A same-input patch leaves a paired branch's `<id>` alone.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [{ show: true }, { show: true }],
};
