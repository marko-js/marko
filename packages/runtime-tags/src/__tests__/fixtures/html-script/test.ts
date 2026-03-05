import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("script")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
