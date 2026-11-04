import type { TestConfig } from "../../main.test";

const relabel = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".l")!.click();
};

// patch-created-row-static-item-caller-state without patches.
export const config: TestConfig = {
  equivalent: false,
  steps: [{ show: false }, { show: true }, relabel, { show: true }],
};
