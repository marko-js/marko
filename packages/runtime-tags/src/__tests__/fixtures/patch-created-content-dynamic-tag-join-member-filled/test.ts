import type { TestConfig } from "../../main.test";

// The same in content a flush creates: the tag's read is a hole the patch
// fills, so the content's shell names no subscribe the fill would re-run.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, which: true, id: "a" },
    { show: true, which: true, id: "b" },
    { show: true, which: false, id: "c" },
    { show: false, which: true, id: "d" },
    { show: true, which: true, id: "e" },
  ],
};
