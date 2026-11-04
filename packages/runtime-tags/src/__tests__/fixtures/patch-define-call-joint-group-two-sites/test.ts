import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.n")!.click();
};

// Two calls group the same params differently, one a spread of server input:
// what the calls pass for a param is each call's own value for it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { x: 1, y: "a", row: { a: 7, b: 8 } },
    click,
    { x: 2, y: "b", row: { a: 7, b: 9 } },
    click,
    { x: 3, y: "c", row: { a: 6, b: 9 } },
  ],
};
