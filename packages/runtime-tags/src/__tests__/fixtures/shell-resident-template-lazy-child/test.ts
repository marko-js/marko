import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// The plain twin of patch-shell-resident-template-lazy-child: a dynamic tag
// names templates, one with a lazy child.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ which: true, label: "a" }, { which: false, label: "b" }, wait],
};
