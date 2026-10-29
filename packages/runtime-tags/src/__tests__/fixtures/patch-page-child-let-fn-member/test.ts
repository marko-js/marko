import type { TestConfig } from "../../main.test";

// An object a `<let>` holds, whose member a hole calls with patched input: the
// client keeps the object as the init changes.
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
