import type { TestConfig } from "../../main.test";

// A `<let>`'s native tag name also renders as text and an attribute: the client
// keeps the name.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
  ],
};
