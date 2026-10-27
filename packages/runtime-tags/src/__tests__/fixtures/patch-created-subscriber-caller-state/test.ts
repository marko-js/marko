import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A nested branch a patch creates subscribes to a param its caller passes client
// state, rendering it though the client never changed it.
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
