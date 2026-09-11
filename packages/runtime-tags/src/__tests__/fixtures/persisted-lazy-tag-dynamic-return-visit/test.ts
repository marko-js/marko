import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A dynamic lazy site leaves and returns with its module resident: the
// flush composes the child and its ready batch applies to it.
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
