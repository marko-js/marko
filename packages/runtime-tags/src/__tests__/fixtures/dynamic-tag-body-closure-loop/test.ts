import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{ n: 1 }, { n: 2 }, toggle],
};
