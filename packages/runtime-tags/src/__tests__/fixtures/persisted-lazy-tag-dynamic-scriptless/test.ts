import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A scriptless page with a lazy dynamic site: the entry still ships the
// ready channel so the flush revealing the child can apply.
export const config: TestConfig = {
  persisted: true,
  equivalent: false,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    wait,
    { show: false, label: "b" },
    { show: true, label: "c" },
  ],
};
