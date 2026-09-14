import type { TestConfig } from "../../main.test";

// A constant fed to a child inside a constructed branch: the construct
// still needs the value the shell's hole renders.
export const config: TestConfig = {
  persisted: true,
  steps: [{ show: false }, { show: true }],
};
