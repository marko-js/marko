import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch a patch creates renders the dynamic tag state selects, keeping it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, label: "one" },
    { show: true, label: "two" },
    click,
    { show: true, label: "three" },
    { show: false, label: "four" },
    { show: true, label: "five" },
  ],
};
