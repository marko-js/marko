import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A client-fed return driving a structural test is client-owned structure:
// the selection recomputes client-side through the return signal and frames
// never speak it, so patches can no longer diverge from the live branch.
export const config: TestConfig = {
  persisted: true,
  steps: [{}, click, {}, click],
};
