import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

const clickSelect = (n: number) => (document: Document) =>
  (document.querySelectorAll("button.select")[n] as HTMLButtonElement).click();

export const config: TestConfig = {
  steps: [
    {},
    clickSelect(0),
    click("button.toggle"),
    click("button.toggle"),
    clickSelect(2),
  ],
};
