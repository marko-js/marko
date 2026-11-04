import type { TestConfig } from "../../main.test";

// A same-input patch leaves paired rows' constant holes alone; a new row gets its own.
export const config: TestConfig = {
  patches: true,
  // Renders server module state (a static counter), which a client render
  // counts on its own.
  skip_csr: true,
  skip_fresh_render: true,
  steps: [
    { items: [{ id: "a" }, { id: "b" }] },
    { items: [{ id: "a" }, { id: "b" }] },
    { items: [{ id: "a" }, { id: "b" }, { id: "c" }] },
  ],
};
