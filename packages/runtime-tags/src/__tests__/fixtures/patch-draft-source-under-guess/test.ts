import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch changes a draft's source while an act holds a guess: the guess
// stays shown, and the new source shows when the act ends.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { x: 1 },
    (document: Document) => document.querySelector("button")!.click(),
    { x: 2 },
    (document: Document) => {
      if (document.querySelector("button")!.textContent !== "5") {
        throw new Error("guess dropped by a patch");
      }
    },
    (document: Document) => (document.defaultView as any).release(),
    wait,
  ],
};
