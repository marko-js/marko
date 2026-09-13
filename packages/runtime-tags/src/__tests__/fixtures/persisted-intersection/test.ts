import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  persisted: true,
  // The final step drops `title`: an intersection fill changing to
  // undefined must overwrite the live value, not be elided.
  steps: [{ title: "First" }, click, { title: "Second" }, click, {}, click],
};
