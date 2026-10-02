import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) =>
      document.querySelector<HTMLButtonElement>(".outer")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("wrap button, button")!.click(),
  ],
};
