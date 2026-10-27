import type { TestConfig } from "../../main.test";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const config: TestConfig = {
  steps: [
    {},
    async (document: Document) => {
      document.querySelectorAll("button")[0].click();
      await wait(30);
    },
    () => wait(100),
    async (document: Document) => {
      document.querySelectorAll("button")[1].click();
      await wait(100);
    },
  ],
};
