import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// As `patch-fill-if-effect-hole`, the hole reading a local computed from the
// value: the same registration carries the branch's effect.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: true, label: "a" },
    click,
    { show: true, label: "b" },
    click,
    { show: true, label: "c" },
  ],
};
