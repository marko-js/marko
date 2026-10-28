import type { TestConfig } from "../../main.test";

// A created scope's client row reads a request value: the client renders it from the
// scope's starting state, so no entry waits for that row's render.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
