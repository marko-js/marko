import type { TestConfig } from "../../main.test";

// A static body a child renders inside its own branch: the branch
// constructs on the client from the body.s content record.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false },
    { show: true },
    { show: true },
    { show: false },
    { show: true },
  ],
};
