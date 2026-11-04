import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// An effect in a `<define>` whose every call joins client state with input for
// each arg: no patch fills either, so its render entry names no reads.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: 1, y: 2 }, { x: 3, y: 2 }, click, { x: 3, y: 5 }],
};
