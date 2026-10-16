import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// Each loop row a client render adds runs its script once, after its own row.
export const config: TestConfig = {
  steps: [{}, click, click],
};
