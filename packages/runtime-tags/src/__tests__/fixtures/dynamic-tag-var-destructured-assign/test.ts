import type { TestConfig } from "../../main.test";

const increment = (document: Document) => {
  document.querySelector("button")!.click();
};

export const config: TestConfig = {
  steps: [{ a: true }, increment, increment],
};
