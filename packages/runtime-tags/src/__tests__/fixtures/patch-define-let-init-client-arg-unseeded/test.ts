import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector("button")!.click();
};

// A `<let>` in a `<define>` whose initial value every call passes client state:
// the client derives it, so a created scope takes no seed.
export const config: TestConfig = {
  patches: true,
  steps: [{}, click, {}, click],
};
