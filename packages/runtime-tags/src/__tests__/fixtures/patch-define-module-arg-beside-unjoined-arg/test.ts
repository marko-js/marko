import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.toggle")!.click();
};

// Only the input a join reads with the module function pushes it: the title's
// fill run reaches no read of it.
export const config: TestConfig = {
  patches: true,
  steps: [
    { label: "a", title: "x" },
    { label: "b", title: "y" },
    click,
    click,
    { label: "c", title: "z" },
  ],
};
