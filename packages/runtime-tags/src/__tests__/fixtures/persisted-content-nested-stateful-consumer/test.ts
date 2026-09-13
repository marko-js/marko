import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A scriptless page's body handed on inside the child's OWN stateful branch
// to a grandchild that renders it: the pass-through read is stateful, so the
// body stays registered (no record) and the client toggle can render it.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    click,
    { title: "b", note: "y" },
    click,
    { title: "c", note: "z" },
    click,
  ],
};
