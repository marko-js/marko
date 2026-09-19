import type { TestConfig } from "../../main.test";
import { release, wait } from "../../utils/resolve";

const clickBody = (document: Document) => {
  document.body.click();
};

// A triggered load is never a fed import, so a scriptless page's entry
// registers the site's load wiring: the child mounts on the trigger, and
// a returning site clones at once.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["child"],
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    clickBody,
    release,
    wait,
    { show: false, label: "b" },
    { show: true, label: "c" },
    wait,
  ],
};
