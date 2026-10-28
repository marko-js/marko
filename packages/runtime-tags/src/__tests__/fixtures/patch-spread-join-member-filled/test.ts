import type { TestConfig } from "../../main.test";

// A spread joining a server value with one filled for other reads (the
// placeholder's): the fill's run leaves it and its script to the patch's entry.
export const config: TestConfig = {
  patches: true,
  steps: [
    { which: true, id: "a" },
    { which: true, id: "b" },
    { which: false, id: "c" },
    { which: true, id: "d" },
  ],
};
