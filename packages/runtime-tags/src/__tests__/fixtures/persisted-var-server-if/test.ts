import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A server-fed return driving a structural test: frames select the
// branch while client state inside stays live.
export const config: TestConfig = {
  persisted: true,
  steps: [{ n: 1 }, click, { n: 3 }, click, { n: 1 }],
};
