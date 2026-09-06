import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-fed return driving a test is client-owned structure: the
// selection recomputes client-side and frames never speak it.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
