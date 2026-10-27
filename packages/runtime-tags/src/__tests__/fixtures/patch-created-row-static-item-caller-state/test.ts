import type { TestConfig } from "../../main.test";

const relabel = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".l")!.click();
};

// Static rows a patch creates, joined with the caller's state: each created row
// takes its item as a seed under the caller's group.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false }, { show: true }, relabel, { show: true }],
};
