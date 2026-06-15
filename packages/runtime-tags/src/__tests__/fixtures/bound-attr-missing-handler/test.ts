import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click],
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
