import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A call passes a function reading state to a `<define>` body's structural
// param: the client owns the branch, and a patch fills the param it reads.
export const config: TestConfig = {
  patches: true,
  steps: [{ label: "a" }, click, { label: "b" }, click, { label: "c" }, click],
};
