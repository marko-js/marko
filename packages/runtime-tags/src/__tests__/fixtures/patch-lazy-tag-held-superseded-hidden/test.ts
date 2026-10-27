import type { TestConfig } from "../../main.test";
import { release, wait } from "../../utils/resolve";

// A flush held for a lazy module is superseded by a response that never
// names the module (the tag is hidden again): when the module lands, the
// held flush must not apply over the newer page.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["child"],
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: false, label: "c" },
    release,
    wait,
  ],
};
