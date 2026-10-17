import type { TestConfig } from "../../main.test";
import { release, wait } from "../../utils/resolve";

const clickBody = (document: Document) => {
  document.body.click();
};

// A triggered load on a scriptless page: a flush creating the site loads
// the module itself (the trigger is the document's), and composes the
// child whole.
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
