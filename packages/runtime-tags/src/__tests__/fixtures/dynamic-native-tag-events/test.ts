import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector<HTMLElement>(".A")!.click();
}

export const config: TestConfig = {
  steps: [{}, click, click],
};
