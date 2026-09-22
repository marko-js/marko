import type { TestConfig } from "../../main.test";
import { release, wait } from "../../utils/resolve";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A flush held for a lazy module is superseded by the next response before
// the module lands: the held flush settles without applying, the new one
// applies alone once the module is released, and the page matches it.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["child"],
  steps: [
    { show: false, label: "a" },
    { show: true, label: "b" },
    { show: true, label: "c" },
    release,
    wait,
    click,
  ],
};
