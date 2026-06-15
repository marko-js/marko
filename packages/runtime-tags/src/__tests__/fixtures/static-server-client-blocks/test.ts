import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click],
};

function click(container: Element) {
  container.querySelector("button")!.click();
}
