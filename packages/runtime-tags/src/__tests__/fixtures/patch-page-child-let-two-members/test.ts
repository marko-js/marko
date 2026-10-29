import type { TestConfig } from "../../main.test";

// An object a `<let>` holds with two function members, called with patched
// input: the client keeps both as the init changes.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { label: "a", alt: false },
    { label: "b", alt: false },
    { label: "c", alt: true },
  ],
};
