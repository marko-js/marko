import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A dynamic lazy site whose interactive child a flush creates before its
// module is resident: the flush waits for the module, so the shell's
// effects resolve against it.
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
