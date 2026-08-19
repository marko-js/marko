import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>(".toggle")!.click();
};

// A constructed child with its own stateful branch rendering a
// grandchild: the child's client code (bundled as usual) renders it, and
// server fills keep both levels current.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { show: false, title: "A" },
    { show: true, title: "A" },
    toggle,
    { show: true, title: "B" },
    toggle,
  ],
};
