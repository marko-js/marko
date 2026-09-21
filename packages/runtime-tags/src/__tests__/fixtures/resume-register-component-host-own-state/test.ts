import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { card: true },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#toggle")!.click(),
  ],
};
