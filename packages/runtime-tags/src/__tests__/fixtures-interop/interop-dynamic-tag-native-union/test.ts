import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) =>
      (document.querySelector("#tags") as HTMLButtonElement).click(),
    (document: Document) =>
      (document.querySelector("#tags") as HTMLButtonElement).click(),
  ],
};
