import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A `<define>` body joins a param its call passes client state with an input
// its caller passes a constant: no patch changes the join, so the page ships no param.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: 1 }, click, { x: 2 }, click],
};
