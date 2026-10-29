import type { TestConfig } from "../../main.test";

// A `<let>` holds a void native tag name the init switches: the client keeps
// the first name.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "input", label: "a" },
    { tag: "br", label: "b" },
  ],
};
