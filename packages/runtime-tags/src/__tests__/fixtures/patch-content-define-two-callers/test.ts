import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// One `<define>` whose branch param one call site feeds from state and
// another from input: each instance's branch follows its own caller.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", open: true },
    { title: "b", open: false },
    click,
    { title: "c", open: true },
    click,
    { title: "d", open: true },
  ],
};
