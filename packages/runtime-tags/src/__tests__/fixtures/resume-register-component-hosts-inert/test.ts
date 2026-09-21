import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { card: true },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#inc")!.click(),
  ],
};
