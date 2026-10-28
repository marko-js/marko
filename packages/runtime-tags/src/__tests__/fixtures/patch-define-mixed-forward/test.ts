import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body joins a param its call feeds from state with one it feeds
// from a template param: the client renders the join, and a patch fills it.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: 1 }, { x: 2 }, click, { x: 3 }],
};
