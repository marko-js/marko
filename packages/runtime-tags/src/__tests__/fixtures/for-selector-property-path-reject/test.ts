import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  // The root `selected` is also read, but `selected.id` is not the loop key
  // closure value. This must keep the normal fan-out closure.
  steps: [{}, clickSelect(2), clickSelect(0)],
};
