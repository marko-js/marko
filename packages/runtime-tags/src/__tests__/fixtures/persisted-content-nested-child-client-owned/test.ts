import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A body handed down a level into a grandchild's OWN client-owned branch:
// the child publishes the fact through, so the body delivers as a fill.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { title: "a", note: "x" },
    { title: "b", note: "y" },
    click,
    { title: "c", note: "z" },
    click,
    { title: "d", note: "w" },
  ],
};
