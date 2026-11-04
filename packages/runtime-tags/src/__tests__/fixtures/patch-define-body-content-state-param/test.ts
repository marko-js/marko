import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` body renders its content with a param the call passes from the
// caller's state: the content's fill ships, so the call links its patcher.
export const config: TestConfig = {
  patches: true,
  steps: [{ y: "1" }, click, { y: "2" }, click, { y: "3" }],
};
