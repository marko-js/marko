import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  // An unkeyed `of` loop's unique key is the index param, so `selected === i`
  // should optimize too.
  steps: [{}, clickSelect(0), clickSelect(2), clickSelect(0)],
};
