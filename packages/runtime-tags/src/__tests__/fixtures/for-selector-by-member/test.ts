import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  // A function `by` returning a static member chain (`item.user.id`) is the
  // unique key, so `selected === row.user.id` should optimize.
  steps: [{}, clickSelect(0), clickSelect(2), clickSelect(0)],
};
