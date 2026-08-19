import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// A fed renderer inside client-owned structure delivers through its
// closure fill: the stored value re-renders the tag when the branch shows.
export const config: TestConfig = {
  persisted: true,
  steps: [
    { content: "div" },
    click,
    { content: "span" },
    click,
    { content: "em" },
    click,
  ],
};
