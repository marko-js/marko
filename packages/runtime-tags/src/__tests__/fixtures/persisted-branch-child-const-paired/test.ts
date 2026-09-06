import type { TestConfig } from "../../main.test";

// A constant fed to a child at the root and inside a branch: the setup
// seed re-ships per frame (the server cannot tell fresh from paired) and
// never clobbers the live value.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, note: "x" },
    { show: true, note: "y" },
    { show: true, note: "z" },
    { show: false, note: "w" },
    { show: true, note: "v" },
  ],
};
