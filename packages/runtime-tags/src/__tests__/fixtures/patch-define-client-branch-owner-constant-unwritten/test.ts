import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `<define>` constant read in a branch on a param every call passes client
// state: the page ships it for the client, so no patch writes it.
export const config: TestConfig = {
  patches: true,
  steps: [{}, {}, click, {}],
};
