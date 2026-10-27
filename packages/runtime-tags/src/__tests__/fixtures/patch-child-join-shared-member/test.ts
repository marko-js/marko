import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// An input two holes join: the patch writes a hole whose inputs are all the
// server's, the scope inits each other, and the input's fill re-runs neither.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, y: "a" },
    click,
    { x: 0, y: "b" },
    { x: 2, y: "c" },
    click,
    { x: 3, y: "d" },
  ],
};
