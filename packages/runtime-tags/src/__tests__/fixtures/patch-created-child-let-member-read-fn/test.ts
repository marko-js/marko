import type { TestConfig } from "../../main.test";

// A created child's never-assigned `<let>` renders only the function member of
// the object it holds: its seed `{ fn }` names the function by id.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
  ],
};
