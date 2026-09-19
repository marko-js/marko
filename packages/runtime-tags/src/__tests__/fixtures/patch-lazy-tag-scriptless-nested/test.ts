import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A scriptless page never loads its templates' modules, so the entry
// registers the load wiring of a lazy site a flush creates inside a
// nested tag's branch.
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
