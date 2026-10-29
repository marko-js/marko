import type { TestConfig } from "../../main.test";

// An object member names the template a `<let>` holds, which the init switches:
// the client keeps the first template.
export const config: TestConfig = {
  patches: true,
  skip_fresh_render: true,
  steps: [
    { alt: false, label: "a" },
    { alt: true, label: "b" },
  ],
};
