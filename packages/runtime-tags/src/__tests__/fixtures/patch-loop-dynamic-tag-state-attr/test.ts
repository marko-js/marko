import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A row a patch adds renders its dynamic tag with the state it reads.
export const config: TestConfig = {
  patches: true,
  steps: [{ items: [1] }, { items: [1, 2] }, click, { items: [1, 2, 3] }],
};
