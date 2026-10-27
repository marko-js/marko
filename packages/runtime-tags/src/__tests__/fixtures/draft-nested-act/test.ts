import type { TestConfig } from "../../main.test";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const config: TestConfig = {
  steps: [
    {},
    async (document: Document) => {
      document.querySelector("button")!.click();
      await wait(50);
    },
  ],
};
