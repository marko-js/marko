import type { TestConfig } from "../../main.test";

const click = (selector: string) => (document: Document) =>
  (document.querySelector(selector) as HTMLButtonElement).click();

// After relabeling item 1 (same key), the once-registered handler must log the
// fresh label — a guard that it reads the live item slot, not a stale capture.
export const config: TestConfig = {
  steps: [{}, click("button.relabel"), click("li button.show")],
};
