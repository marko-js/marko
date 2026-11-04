import type { TestConfig } from "../../main.test";

const reset = (document: Document) => {
  for (const b of document.querySelectorAll<HTMLButtonElement>(".reset")) {
    b.click();
  }
};

// patch-dynamic-tag-state-named-content without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [
    { bs: [1], note: "a" },
    reset,
    { bs: [1, 2], note: "b" },
    reset,
    { bs: [2], note: "c" },
  ],
};
