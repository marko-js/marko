import type { TestConfig } from "../../main.test";

// An array built from a `<let>` names the native tag rendered: the client keeps
// the name and the patch fills its attribute.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
  ],
};
