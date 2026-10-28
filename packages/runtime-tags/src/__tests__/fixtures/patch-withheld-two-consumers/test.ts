import type { TestConfig } from "../../main.test";

// Two consumers in a created row render one content: each instance fills.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", rows: [{ id: 1 }] },
    { label: "b", rows: [{ id: 1 }, { id: 2 }] },
  ],
};
