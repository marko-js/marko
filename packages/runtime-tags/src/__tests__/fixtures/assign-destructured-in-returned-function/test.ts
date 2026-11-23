import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) =>
      document.querySelector<HTMLButtonElement>(".show")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>(".set")!.click(),
  ],
};
