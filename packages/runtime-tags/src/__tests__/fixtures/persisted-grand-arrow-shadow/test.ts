import type { TestConfig } from "../../main.test";

const toggle = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button.outer")!.click();
};

// A call whose callee is a tracked local arrow recomputes client-side;
// only untracked callees are inert.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, toggle, { title: "b" }, toggle, { title: "c" }],
};
