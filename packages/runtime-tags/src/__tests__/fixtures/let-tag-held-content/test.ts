import type { TestConfig } from "../../main.test";
import { wait } from "../../utils/resolve";

// A let holds the content it starts with, so that content registers once a
// dynamic input serializes the let.
export const config: TestConfig = {
  steps: [
    {},
    wait,
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
