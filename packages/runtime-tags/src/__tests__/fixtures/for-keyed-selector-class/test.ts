import type { TestConfig } from "../../main.test";

const clickSelect = (n: number) => (container: Element) =>
  (container.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

const clickButton = (selector: string) => (container: Element) =>
  (container.querySelector(selector) as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {},
    clickSelect(0), // select the first row
    clickSelect(2), // move selection to the third row
    clickButton("button.rotate"), // reorder; selection stays with its key
    clickSelect(0), // select whatever is now first
    clickButton("button.remove"), // remove the selected row
    clickSelect(1), // select another row after removal
    clickButton("button.clear"), // clear the selection
  ],
};
