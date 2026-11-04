import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Registered content whose intersection sits in a branch its owner's client state
// selects: the tag entry hands the argument, and the value read beside it ships.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a1", x: "x1" },
    { a: "a2", x: "x2" },
    toggle,
    toggle,
    { a: "a3", x: "x3" },
  ],
};
