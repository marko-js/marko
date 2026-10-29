import type { TestConfig } from "../../main.test";

// A `<let>` holds a native tag name the init switches: the client keeps the
// first name, and the patch fills its attributes.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
    { tag: "i", label: "c" },
  ],
};
