import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An input two of a tag's written joins read: it is written in place where
// either join's other members may be the client's.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a", c: "c", d: "d" },
    { a: "A", c: "c", d: "d" },
    click,
    { a: "A", c: "C", d: "D" },
    click,
  ],
};
