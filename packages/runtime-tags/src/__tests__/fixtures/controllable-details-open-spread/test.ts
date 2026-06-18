import type { TestConfig } from "../../main.test";

function toggle(container: Element) {
  const details = container.querySelector<HTMLDetailsElement>("details")!;
  details.open = !details.open;
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle, toggle],
};
