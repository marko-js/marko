import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The click leaves both values equal to what the server rendered, so the
// resumed markup stays in place as it does after a client render.
export const config: TestConfig = {
  steps: [{}, click],
};
