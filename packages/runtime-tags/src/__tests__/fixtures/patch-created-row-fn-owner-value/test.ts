import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A row a patch creates passes a child a function reading the page's value:
// the page's fill lands before the loop entry that creates the row.
export const config: TestConfig = {
  patches: true,
  steps: [
    { n: 0, label: "a" },
    { n: 1, label: "b" },
    click,
    { n: 1, label: "c" },
  ],
};
