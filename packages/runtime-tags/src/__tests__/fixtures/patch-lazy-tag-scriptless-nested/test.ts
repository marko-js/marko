import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A scriptless page never loads its templates' modules: a lazy child a
// flush creates inside a nested tag's branch composes into the branch's
// shell, and the entry registers the child's loader.
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
