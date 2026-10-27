import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelectorAll<HTMLButtonElement>("button")[1]!.click();
};

// A call in a branch the client renders from its own state passes a constant
// to a `<define>` body another consumer renders stateful: setup passes it.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, toggle, toggle, { label: "b" }],
};
