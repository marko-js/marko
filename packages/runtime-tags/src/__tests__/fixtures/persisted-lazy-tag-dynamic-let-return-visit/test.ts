import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A dynamic lazy site whose child owns state leaves and returns with its
// module resident: the composed child seeds its state and stays interactive.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: true, label: "a" },
    wait,
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
  ],
};
