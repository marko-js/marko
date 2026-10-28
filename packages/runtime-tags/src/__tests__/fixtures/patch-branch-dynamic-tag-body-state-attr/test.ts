import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created dynamic tag's body writes the state attribute it reads.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false, tag: "p" },
    { show: true, tag: "p" },
    click,
    { show: true, tag: "div" },
  ],
};
