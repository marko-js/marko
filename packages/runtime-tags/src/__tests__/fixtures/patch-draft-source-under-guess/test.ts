import type { TestConfig } from "../../main.test";

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// A patch changes a draft's source while an act holds a guess: the guess
// stays shown, and the new source shows when the act ends.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { x: 1 },
    async (document: Document) => {
      document.querySelector("button")!.click();
      await wait(30);
    },
    { x: 2 },
    (document: Document) => {
      if (document.querySelector("button")!.textContent !== "5") {
        throw new Error("guess dropped by a patch");
      }
    },
    () => wait(700),
  ],
};
