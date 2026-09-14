import type { TestConfig } from "../../main.test";

// A constant fed to a child whose own branch constructs: the setup entry
// on the fresh branch scope applies on its first render.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, note: "a" },
    { show: true, note: "b" },
    { show: true, note: "c" },
  ],
};
