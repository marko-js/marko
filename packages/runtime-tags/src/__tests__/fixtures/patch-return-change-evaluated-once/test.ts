import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The `<return>` handler's slot and its patch bind share one evaluation,
// which the server's paragraph counts (a client render shows it before the read).
export const config: TestConfig = {
  patches: true,
  skip_csr: true,
  steps: [{}, click, {}, click],
};
