import type { TestConfig } from "../../main.test";

// A range with a constant `from` and `step` keys each row by its value: patches
// pair and create rows by that key, which a row's handler reads as `i`.
export const config: TestConfig = {
  patches: true,
  steps: [
    { n: 5 },
    { n: 9 },
    clickLast(".from"),
    clickLast(".step"),
    { n: 3 },
    clickLast(".from"),
    clickLast(".step"),
  ],
};

function clickLast(selector: string) {
  return (document: Document) => {
    document
      .querySelector(selector)!
      .querySelector<HTMLButtonElement>("button:last-child")!
      .click();
  };
}
