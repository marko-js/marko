import type { TestConfig } from "../../main.test";

// The document rendered the `@catch` (a sync throw); a patch whose body
// renders cleanly rebuilds the try, and a later throw catches again.
export const config: TestConfig = {
  patches: true,
  // A patch re-renders a caught `<try>` from the server, which recovers;
  // a client render keeps its `@catch`.
  skip_csr: true,
  steps: [
    { message: "x", boom: true },
    { message: "ok" },
    { message: "y", boom: true },
  ],
};
