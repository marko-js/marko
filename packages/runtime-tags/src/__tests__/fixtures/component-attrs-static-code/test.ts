import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelectorAll("button")!.forEach((button) => button.click());
}

export const config: TestConfig = {
  steps: [{}, click],
};
