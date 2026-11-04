import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A function a tag's text calls closes over three of its inputs: each one's fill
// ships where the other two may be the client's (website app-code-block).
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
