import type { TestConfig } from "../../main.test";

// A hole with no request-derived source (a fresh number each render)
// renders once: a patch back to the same route ships nothing for it.
export const config: TestConfig = {
  patches: true,
  // Renders server module state (a static counter), which a client render
  // counts on its own.
  skip_csr: true,
  skip_fresh_render: true,
  steps: [{}, {}],
};
