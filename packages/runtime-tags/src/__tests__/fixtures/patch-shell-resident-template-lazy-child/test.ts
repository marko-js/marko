import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A dynamic tag names templates the page registers, one with a lazy child:
// that template's registered renderer leaves the child out, so its shell ships.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [{ which: true, label: "a" }, { which: false, label: "b" }, wait],
};
