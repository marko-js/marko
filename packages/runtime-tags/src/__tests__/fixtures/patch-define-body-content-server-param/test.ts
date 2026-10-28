import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body renders its content with a param the call passes from the
// page's input: the content's fill can't ship, as the server owns that param.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: 1, y: "y" }, click, { x: 2, y: "y" }, { x: 1, y: "z" }],
};
