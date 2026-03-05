import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelectorAll("button")!.forEach((item) => item.click());
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
