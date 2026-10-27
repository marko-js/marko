import type { TestConfig } from "../../main.test";

// A dynamic tag's body a patch creates mounts its effect once, with no tag and
// inside a native one, with no entry of its own (nor one once paired).
export const config: TestConfig = {
  patches: true,
  steps: [
    { tag: "div" },
    { tag: null },
    { tag: "section" },
    { tag: "section" },
  ],
};
