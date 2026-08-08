import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A branch chain over a server value nested in client-owned structure:
// the chain registers at its last branch yet still classifies after its
// enclosing section (outer-first ordering).
export const config: TestConfig = {
  persisted: true,
  steps: [{ on: true }, click, { on: false }, { on: true }],
};
