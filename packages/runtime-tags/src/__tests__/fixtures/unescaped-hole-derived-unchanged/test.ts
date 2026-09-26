import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The second click leaves both the `<const>` and the inline expression equal,
// so their markup stays in place.
export const config: TestConfig = {
  steps: [{}, click, click],
};
