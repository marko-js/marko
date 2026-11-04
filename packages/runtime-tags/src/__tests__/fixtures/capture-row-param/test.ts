import type { TestConfig } from "../../main.test";

// patch-capture-row-param without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ id: 1, label: "a" }] },
    { items: [{ id: 1, label: "b" }] },
    { items: [{ id: 1, label: "b" }] },
  ],
};
