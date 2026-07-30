import type { TestConfig } from "../../main";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

export const config: TestConfig = {
  steps: [{ message: "hello" }, click, click],
};
