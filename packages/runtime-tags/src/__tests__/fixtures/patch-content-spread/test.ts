import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A spread that may carry `content` on a native tag: the set patches as
// attributes and the content as an `AttrContent` entry.
export const config: TestConfig = {
  patches: true,
  steps: [
    { title: "a", attrs: { class: "c1" } },
    { title: "b", attrs: { class: "c2", "data-x": 1 } },
    click,
    { title: "c", attrs: { class: "c3" } },
  ],
};
