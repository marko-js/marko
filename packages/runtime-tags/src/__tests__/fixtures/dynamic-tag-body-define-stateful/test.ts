import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

export const config: TestConfig = {
  steps: [{ on: true, note: "b" }, toggle, toggle],
};
