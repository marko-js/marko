import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, click, click, click],
};

function click(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")!.click();
}
