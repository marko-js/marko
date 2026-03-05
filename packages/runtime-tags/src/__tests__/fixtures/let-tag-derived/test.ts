import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{ a: 2 }, click, { a: 3 }, click],
};
