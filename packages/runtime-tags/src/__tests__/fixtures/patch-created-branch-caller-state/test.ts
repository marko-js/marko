import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch a patch creates reads a param its caller passes client state, before
// and after the client changes it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { open: false },
    { open: true },
    click,
    { open: false },
    click,
    { open: true },
    click,
  ],
};
