import type { TestConfig } from "../../main.test";

// patch-created-row-returned-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { tag: "span", rows: [{ id: 1 }] },
    { tag: "span", rows: [{ id: 1 }, { id: 2 }] },
  ],
};
