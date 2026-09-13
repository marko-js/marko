import type { TestConfig } from "../../main.test";

// A `content=` renderer with no client registration: writes inside it
// still pair through the site's branch.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { mode: 1, note: "one" },
    { mode: 1, note: "two" },
    { mode: 0, note: "three" },
    { mode: 1, note: "four" },
  ],
};
