import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Body content compiles at the (client-owned) call site even when the
// child ignores it: the channel is checked where it is authored.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, click],
};
