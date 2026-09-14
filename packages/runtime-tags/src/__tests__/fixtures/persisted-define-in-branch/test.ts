import type { TestConfig } from "../../main.test";

// A branch rendering a sibling define: its shell composes the define body,
// so a patch revealing the branch constructs it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, suffix: "1" },
    { show: true, suffix: "1" },
    { show: true, suffix: "2" },
    { show: false, suffix: "2" },
  ],
};
