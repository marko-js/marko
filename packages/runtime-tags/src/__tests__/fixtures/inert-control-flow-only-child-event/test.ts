import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector<HTMLDivElement>("#target")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click],
};
