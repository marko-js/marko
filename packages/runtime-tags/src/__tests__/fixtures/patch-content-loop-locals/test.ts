import type { TestConfig } from "../../main.test";

const click = (document: Document) => {
  document.querySelector<HTMLButtonElement>("button")!.click();
};

// Attribute tag `<for>` content holds its loop param as a local closure; an
// item a patch creates must carry it for the client's own recompute.
export const config: TestConfig = {
  patches: true,
  steps: [
    { labels: ["a", "b"], show: false },
    { labels: ["a", "b", "c"], show: true },
    click,
    { labels: ["c"], show: false },
    click,
  ],
};
