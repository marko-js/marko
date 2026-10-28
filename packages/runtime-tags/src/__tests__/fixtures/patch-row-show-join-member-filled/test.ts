import type { TestConfig } from "../../main.test";

// A `<show>` in a loop row joining the row's value with input filled for other
// reads (the placeholder's): the fill's run leaves the display to the patch's entry.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ k: 1, on: true }], id: "a" },
    { items: [{ k: 1, on: true }], id: "b" },
    { items: [{ k: 1, on: false }], id: "c" },
    { items: [{ k: 1, on: true }], id: "d" },
  ],
};
