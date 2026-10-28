import type { TestConfig } from "../../main.test";

const open = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#open")!.click();
};

// A dynamic tag whose name never changes: a patch never creates its body, so
// the body registers no shell.
export const config: TestConfig = {
  patches: true,
  steps: [{}, {}, open],
};
