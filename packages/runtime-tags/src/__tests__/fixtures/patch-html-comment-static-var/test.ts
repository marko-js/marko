import type { TestConfig } from "../../main.test";

// A comment whose static text a tag variable reads renders no value: a patch
// creating it takes the text from its shell and writes no entry for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, name: "a" },
    { show: true, name: "b" },
  ],
};
