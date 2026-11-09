import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    {},
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#add")!.click(),
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#remove")!.click(),
  ],
};
