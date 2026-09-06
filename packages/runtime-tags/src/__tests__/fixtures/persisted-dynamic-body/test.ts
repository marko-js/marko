import type { TestConfig } from "../../main.test";

// Body content on a server-owned dynamic tag: text changes patch through the
// content's own writes while the renderer stays paired.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { mode: "a", text: "one" },
    { mode: "a", text: "two" },
  ],
};
