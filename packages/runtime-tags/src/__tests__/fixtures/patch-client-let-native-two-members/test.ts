import type { TestConfig } from "../../main.test";

// Two members of the object a `<let>` holds name native tags: the client keeps
// both names.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
  ],
};
