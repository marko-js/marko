import type { TestConfig } from "../../main.test";

const pickB = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".mode")!.click();
};
const assign = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".set")!.click();
};

// The `<return>` handler comes from the parent's state, so a patch leaves the
// paired child the handler the client picked.
export const config: TestConfig = {
  patches: true,
  steps: [{}, pickB, {}, assign],
};
