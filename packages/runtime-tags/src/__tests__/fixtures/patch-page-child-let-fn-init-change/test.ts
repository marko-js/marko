import type { TestConfig } from "../../main.test";

// A function a `<let>` holds: the page ships its code, and the client keeps it
// as the init changes.
export const config: TestConfig = {
  patches: true,
  // The page keeps its `<let>`; a fresh render of the changed input is no reference.
  skip_fresh_render: true,
  steps: [
    { alt: false, more: false, label: "a" },
    { alt: false, more: true, label: "b" },
    { alt: false, more: false, label: "c" },
    { alt: true, more: true, label: "d" },
  ],
};
