import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [
    { type: "h2" },
    (document: Document) =>
      document.querySelector<HTMLButtonElement>("#inc")!.click(),
  ],
};
