import type { TestConfig } from "../../main.test";

// A function a `<let>` holds that also carries a template as its `content`,
// called by a hole: the client calls the function it keeps, also once the init
// switches to another with the same content.
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
