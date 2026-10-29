import type { TestConfig } from "../../main.test";

// An object member names the native tag a `<let>` holds, also rendered as text:
// the client keeps the name.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { tag: "b", label: "a" },
    { tag: "i", label: "b" },
  ],
};
