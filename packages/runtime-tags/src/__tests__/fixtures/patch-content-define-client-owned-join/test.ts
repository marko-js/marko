import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` hole joining a param its call site feeds from state with a
// root param: the client renders it, so the patch keeps the root param fresh.
export const config: TestConfig = {
  patches: true,
  steps: [{ suffix: "a" }, click, { suffix: "b" }, click, { suffix: "c" }],
};
