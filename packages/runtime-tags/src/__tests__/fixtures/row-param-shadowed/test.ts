import type { TestConfig } from "../../main.test";

// patch-row-param-shadowed without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { items: [{ v: "a" }] },
    { items: [{ v: "b" }] },
    { items: [{ v: "b" }] },
  ],
};
