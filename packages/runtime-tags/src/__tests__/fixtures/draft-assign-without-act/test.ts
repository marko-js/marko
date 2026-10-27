import type { TestConfig } from "../../main.test";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const config: TestConfig = {
  // The debug-only warning is the point.
  skip_parity: true,
  steps: [
    {},
    async (document: Document) => {
      document.querySelectorAll("button")[0].click();
      await wait(50);
    },
    async (document: Document) => {
      document.querySelectorAll("button")[1].click();
      await wait(100);
    },
  ],
};
