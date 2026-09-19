import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A dynamic lazy site whose interactive child a flush creates before its
// module is resident: the entry rides the child's channel, so the shell's
// effects resolve against the landed module.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    { show: true, label: "c" },
  ],
};
