import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A structural param fed through a nested child from client-owned
// structure: fills keep it current and the grandchild re-selects.
export const config: TestConfig = {
  patches: true,
  steps: [{ o: false }, click, { o: true }, click, { o: false }, { o: true }],
};
