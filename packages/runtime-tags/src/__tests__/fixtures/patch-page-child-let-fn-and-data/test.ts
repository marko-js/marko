import type { TestConfig } from "../../main.test";

// A hole renders a data member beside the function a `<let>` holds: the client
// keeps both, so the page keeps its `n` as the server's changes.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { label: "a", n: 1 },
    { label: "b", n: 1 },
    { label: "c", n: 2 },
  ],
};
