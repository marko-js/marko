import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A scriptless page with a lazy dynamic site: the entry registers the
// child's loader so the flush revealing it can load the module and apply.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    { show: false, label: "b" },
    { show: true, label: "c" },
  ],
};
