import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { depth: 1 },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#inc")!.click(),
  ],
};
