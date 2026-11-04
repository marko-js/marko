import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A created call of a stateful body with no params writes nothing: no init.
export const config: TestConfig = {
  patches: true,
  steps: [
    { show: false },
    { show: true },
    click,
    { show: false },
    { show: true },
  ],
};
