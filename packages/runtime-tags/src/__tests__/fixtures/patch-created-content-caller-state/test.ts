import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Content a patch creates from its shell reads a param its caller passes client
// state.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    click,
    { show: false },
    click,
    { show: true },
    click,
  ],
};
