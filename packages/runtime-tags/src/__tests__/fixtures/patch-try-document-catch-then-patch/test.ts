import type { TestConfig } from "../../main.test";

// The document rendered the `@catch` (a sync throw); a patch whose body
// renders cleanly rebuilds the try, and a later throw catches again.
export const config: TestConfig = {
  patches: true,
  steps: [
    { message: "x", boom: true },
    { message: "ok" },
    { message: "y", boom: true },
  ],
};
