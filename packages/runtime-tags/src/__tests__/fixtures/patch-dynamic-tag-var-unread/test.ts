import type { TestConfig } from "../../main.test";

// A dynamic tag whose variable nothing reads: the client registers no fill for
// it, so the entry must not name one.
export const config: TestConfig = {
  patches: true,
  steps: [
    { which: true, a: "a" },
    { which: true, a: "b" },
    { which: false, a: "c" },
  ],
};
