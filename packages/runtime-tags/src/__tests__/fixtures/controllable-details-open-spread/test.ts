import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  const details = document.querySelector<HTMLDetailsElement>("details")!;
  details.open = !details.open;
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle, toggle],
};
