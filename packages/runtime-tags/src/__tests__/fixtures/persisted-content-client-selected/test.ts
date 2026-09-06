import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Body content a child renders inside a branch the call site selects from
// state: the frame patches the content when the child renders it and
// fills its server values when the child withholds it.
export const config: TestConfig = {
  persisted: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
