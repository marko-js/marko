import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A spread that may carry `content` on a native tag: the set patches as
// attributes and the content as a dynamic tag entry.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", attrs: { class: "c1" } },
    { title: "b", attrs: { class: "c2", "data-x": 1 } },
    click,
    { title: "c", attrs: { class: "c3" } },
  ],
};
