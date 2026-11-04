import type { TestConfig } from "../../main.test";

const pickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".mode")!.click();
};
const assign = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".set")!.click();
};

// The child's own state picks its `<return>` handler, so a patch leaves the
// paired child the handler the client picked.
export const config: TestConfig = {
  patches: true,
  steps: [{}, pickB, {}, assign],
};
