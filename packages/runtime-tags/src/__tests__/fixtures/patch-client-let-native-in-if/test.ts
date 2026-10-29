import type { TestConfig } from "../../main.test";

// A `<let>`'s native tag renders in an `<if>` a patch toggles: the client keeps
// the name.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a", more: true },
    { tag: "i", label: "b", more: true },
    { tag: "i", label: "c", more: false },
    { tag: "i", label: "d", more: true },
  ],
};
