import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#inc")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
  ],
};
