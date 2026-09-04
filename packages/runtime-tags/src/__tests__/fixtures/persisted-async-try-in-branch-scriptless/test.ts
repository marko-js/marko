import type { TestConfig } from "../../main.test";

// A scriptless branch holding a `<try>` constructs from its shell: the
// pending replay stays out of the envelope (patch entries carry the body).
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, value: "x" },
    { show: true, value: "x" },
  ],
};
