import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch a patch creates joins a param a call passes client state with a
// stable value: the page writes the param, which the join reads from its owner.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    click,
    { show: false },
    click,
    { show: true },
  ],
};
