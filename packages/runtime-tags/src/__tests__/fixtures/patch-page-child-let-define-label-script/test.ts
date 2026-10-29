import type { TestConfig } from "../../main.test";

// The same with the page's module loaded: the content's held instances still
// take their text from each patch, which sends no fill for them.
export const config: TestConfig = {
  patches: true,
  steps: [
    { more: false, label: "a" },
    { more: true, label: "b" },
    { more: true, label: "c" },
  ],
};
