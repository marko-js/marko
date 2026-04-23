import type { TestConfig } from "../../main.test";

function click(container: Element) {
  (container.querySelector("button") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  skip_equivalent: true,
  steps: [{}, click, click, click],
};
