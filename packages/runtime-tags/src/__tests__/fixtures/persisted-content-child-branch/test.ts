import type { TestConfig } from "../../main.test";

// A dynamic body a child renders inside its own branch: the branch
// constructs on the client with the body's content record.
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
