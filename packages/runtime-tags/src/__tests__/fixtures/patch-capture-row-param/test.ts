import type { TestConfig } from "../../main.test";

// A loop row's param a function passed to a child captures.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [{ id: 1, label: "a" }] },
    { items: [{ id: 1, label: "b" }] },
    { items: [{ id: 1, label: "b" }] },
  ],
};
