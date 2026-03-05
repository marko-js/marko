import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("style")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
