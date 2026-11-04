import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A scope a patch creates holds an `<await>` the client settles, and inside its
// body another of the body's own state: both build from their shells.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false, label: "a" }, { show: true, label: "b" }, wait, wait],
};
