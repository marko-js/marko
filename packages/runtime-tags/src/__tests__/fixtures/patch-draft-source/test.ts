import type { TestConfig } from "../../main.test";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// A patch changes a draft's source: with no guess held, it shows.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { x: 1 },
    { x: 2 },
    async (document: Document) => {
      document.querySelector("button")!.click();
      await wait(30);
    },
    { x: 3 },
  ],
};
