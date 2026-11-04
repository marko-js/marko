import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// The same registered content under two owners, one passing client state into its
// intersection: only that owner's tag entry hands the argument.
export const config: TestConfig = {
  patches: true,
  steps: [
    { a: "a1", x: "x1" },
    { a: "a2", x: "x2" },
    click,
    { a: "a3", x: "x3" },
  ],
};
