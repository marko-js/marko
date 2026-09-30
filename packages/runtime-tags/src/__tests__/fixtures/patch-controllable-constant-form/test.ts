import type { TestConfig } from "../../main.test";

// A plain form with constant controls beside a patched hole.
export const config: TestConfig = {
  patches: true,
  steps: [{ note: "a" }, { note: "b" }],
};
