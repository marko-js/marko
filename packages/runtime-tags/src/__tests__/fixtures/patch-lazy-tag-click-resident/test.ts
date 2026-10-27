import assert from "node:assert/strict";

import type { TestConfig } from "../../main.test";
import { release, wait } from "../../utils/resolve";

const clickBody = (document: Document) => {
  document.body.click();
};

const clickButton = (document: Document) => {
  const button = document.querySelector<HTMLButtonElement>("button")!;
  button.click();
  assert.equal(button.dataset.seen, "c");
};

// A returning click-triggered site whose module is resident (an earlier
// click loaded it): the flush still runs the loader once, wiring the
// child's input signals, then composes the child whole.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  hold_load: ["child"],
  steps: [
    { show: false, title: "a" },
    { show: true, title: "b" },
    clickBody,
    release,
    wait,
    { show: false, title: "b" },
    { show: true, title: "c" },
    wait,
    clickButton,
  ],
};
