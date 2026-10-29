import type { TestConfig } from "../../main.test";

// A definition called in an `<await>` input gives its promise: patches settle its
// body, whose call takes later input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, v: "a", w: "1", items: ["a", "b"] },
    { show: false, v: "b", w: "2", items: ["c"] },
    { show: true, v: "c", w: "3", items: ["d", "e"] },
  ],
};
