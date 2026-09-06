import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "First" }, click, { title: "Second" }, click],
};
