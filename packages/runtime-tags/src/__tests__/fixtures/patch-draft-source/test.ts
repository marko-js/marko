import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A patch changes a draft's source: with no guess held, it shows.
export const config: TestConfig = {
  patches: true,
  equivalent: false,
  steps: [
    { x: 1 },
    { x: 2 },
    (document: Document) => document.querySelector("button")!.click(),
    wait,
    { x: 3 },
  ],
};
