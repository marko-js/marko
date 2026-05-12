import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector<HTMLButtonElement>("#increment")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
