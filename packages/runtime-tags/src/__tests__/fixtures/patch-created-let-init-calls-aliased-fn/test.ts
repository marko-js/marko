import type { TestConfig } from "../../main.test";

// patch-created-let-init-calls-local-fn where an alias of the function renders:
// the alias reads its value, so a flush creating the scope seeds it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, v: "a", w: "1" },
    { show: true, v: "a", w: "2" },
    { show: true, v: "a", w: "3" },
  ],
};
