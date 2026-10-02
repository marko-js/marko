import type { TestConfig } from "../../main.test";

// A `<let>` nothing reads still runs when something assigns it, or destructures
// it, though no part of it is read.
export const config: TestConfig = {
  steps: [
    { start: 0, x: { p: 1 }, label: "a" },
    (document: Document) => document.querySelector("button")!.click(),
  ],
};
