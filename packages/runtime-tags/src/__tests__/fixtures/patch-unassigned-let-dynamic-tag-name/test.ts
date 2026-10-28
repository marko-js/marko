import type { TestConfig } from "../../main.test";

// An unassigned `<let>` names a dynamic tag whose body reads changing input.
export const config: TestConfig = {
  patches: true,
  steps: [
    { v: "a", w: "1" },
    { v: "a", w: "2" },
  ],
};
