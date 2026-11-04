import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A `<define>` called directly with a server value and rendered dynamically
// with client state: the dynamic instance's join with a template value stays
// current after a patch, though the body's direct call passes no state.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a", dyn: true }, click, { title: "b", dyn: true }, click],
};
