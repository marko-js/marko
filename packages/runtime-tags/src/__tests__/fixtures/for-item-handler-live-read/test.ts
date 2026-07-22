import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  (document.querySelector(selector) as HTMLButtonElement).click();

// The item-reading click handler registers once at branch setup; after relabeling
// item 1 (same key, new object), clicking it must log the fresh label from the
// live item slot — a guard that once-registered handlers still read current data.
export const config: TestConfig = {
  steps: [{}, click("button.relabel"), click("li button.show")],
};
