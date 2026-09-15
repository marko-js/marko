import type { TestConfig } from "../../main.test";
import { release, wait } from "../../utils/resolve";

// A patch creates the lazy child and the next removes it while its module
// is still loading: the first patch's deferred data is superseded, and a
// later patch creating the child again applies.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["child"],
  // The superseded guard warns in debug as it is dropped.
  skip_parity: true,
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: false, label: "b" },
    release,
    { show: true, label: "c" },
    wait,
  ],
};
