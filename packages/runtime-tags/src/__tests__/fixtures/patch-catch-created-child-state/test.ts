import type { TestConfig } from "../../main.test";

const click = (container: Document) => {
  container.querySelector("button")!.click();
};

// A `@catch` a patch creates passes page state to a child: the catch's setup
// renders the client's count, so the patch seeds no server value for it.
export const config: TestConfig = {
  patches: true,
  steps: [{ msg: "a" }, click, { fail: true, msg: "b" }],
};
