import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { note: "" },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("button")!.click(),
  ],
};
