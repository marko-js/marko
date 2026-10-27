import type { TestConfig } from "../../main.test";

// Rows a patch creates mount the effect of the child they compose, which its
// caller feeds from request data, once each.
export const config: TestConfig = {
  patches: true,
  steps: [
    { items: [] },
    { items: [{ name: "a" }, { name: "b" }] },
    { items: [{ name: "a" }, { name: "B" }] },
  ],
};
