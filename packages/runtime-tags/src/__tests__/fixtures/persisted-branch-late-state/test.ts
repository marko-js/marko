import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// State reaching only a later branch still classifies the WHOLE chain
// client-owned, and the middle arm's server value fills fresh on cycle.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, click, { title: "b" }, click, { title: "c" }, click],
};
