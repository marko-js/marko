import type { TestConfig } from "../../main.test";

// A child renders the native tag name it is handed: the name stays, and its
// attributes still reach the element.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { x: 1, y: "y" },
    { x: 2, y: "y" },
    { x: 1, y: "z" },
  ],
};
