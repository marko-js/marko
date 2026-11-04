import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Holes the client owns keep its values across a patch.
export const config: TestConfig = {
  patches: true,
  steps: [{ n: 1 }, click, { n: 2 }],
};
