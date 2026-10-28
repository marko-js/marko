import type { TestConfig } from "../../main.test";

// patch-row-show-join-member-filled without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ k: 1, on: true }], id: "a" },
    { items: [{ k: 1, on: true }], id: "b" },
    { items: [{ k: 1, on: false }], id: "c" },
    { items: [{ k: 1, on: true }], id: "d" },
  ],
};
