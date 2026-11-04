import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Body content a `<define>` renders inside a branch its call site feeds
// from state: the flush patches the content when the body renders it and
// fills its server values when the body withholds it.
export const config: TestConfig = {
  patches: true,
  steps: [{ title: "a" }, { title: "b" }, click, { title: "c" }, click],
};
