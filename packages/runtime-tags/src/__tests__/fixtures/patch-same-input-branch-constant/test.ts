import type { TestConfig } from "../../main.test";

// A same-input patch leaves a paired branch's constant hole alone.
export const config: TestConfig = {
  patches: true,
  // Renders server module state (a static counter), which a client render
  // counts on its own.
  skip_csr: true,
  skip_fresh_render: true,
  steps: [{ show: true }, { show: true }, { show: true }],
};
