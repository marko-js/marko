import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

// A body the page's renderer shows under its own state takes a patch's value
// while shown and once shown again.
export const config: TestConfig = {
  patches: true,
  steps: [{ depth: 0 }, { depth: 1 }, toggle, { depth: 2 }, toggle],
};
