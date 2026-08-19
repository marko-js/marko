import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A body handed down two levels inside client-owned structure delivers as
// a fill.
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
