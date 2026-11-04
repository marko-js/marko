import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body passes its own param, which its call passes client state,
// to another whose branch a patch creates: that branch inits from its owner.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    click,
    { show: true },
    click,
    { show: false },
    { show: true },
  ],
};
