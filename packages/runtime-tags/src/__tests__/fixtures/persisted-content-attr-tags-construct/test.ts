import type { TestConfig } from "../../main.test";

// A constructed branch with a child fed a static attribute tag and static
// body: both arrive as content records through the fed renderer entries.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "a" },
    { show: true, title: "b" },
    { show: true, title: "c" },
  ],
};
