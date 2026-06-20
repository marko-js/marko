import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  // `i` is the range loop's unique key, so `selected === i` should optimize the
  // same as a `by`-keyed loop.
  steps: [{}, clickSelect(0), clickSelect(3), clickSelect(0)],
};
