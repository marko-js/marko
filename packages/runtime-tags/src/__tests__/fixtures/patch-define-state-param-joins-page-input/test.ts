import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A `<define>` body joins a param its call passes client state with page
// input: the page ships the param, as the client renders the join a patch changes.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: "a" }, { x: "b" }, click, { x: "c" }, click],
};
