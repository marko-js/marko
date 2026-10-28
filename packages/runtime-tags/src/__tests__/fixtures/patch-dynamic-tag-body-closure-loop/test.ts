import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

// A flush grows an attribute tag loop whose content an unresolved tag renders.
export const config: TestConfig = {
  patches: true,
  steps: [{ n: 1 }, { n: 2 }, toggle],
};
