import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  // `selected` starts at row 2, so the initial render (and resume) must already
  // mark it; the first change must clear that preset row before setting the new
  // one — exercising the create-path last-key initialization.
  steps: [{}, clickSelect(0), clickSelect(2)],
};
