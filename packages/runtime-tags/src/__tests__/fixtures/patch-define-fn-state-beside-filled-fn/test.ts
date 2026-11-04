import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A call passes two functions a `<define>` body intersects, one reading client state and
// one reading server input: a patch binds the second, and the client re-runs it.
export const config: TestConfig = {
  patches: true,
  steps: [{ x: "a" }, click, { x: "b" }, click, { x: "c" }],
};
