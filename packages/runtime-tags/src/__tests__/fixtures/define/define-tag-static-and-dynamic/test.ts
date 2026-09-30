import type { TestConfig } from "../../../main.test";
import { click } from "../../../utils/steps";

function clickLastBox(document: Document) {
  const boxes = document.querySelectorAll<HTMLButtonElement>(".box");
  boxes[boxes.length - 1].click();
}

export const config: TestConfig = {
  steps: [
    {},
    click(".box"),
    click("#toggle"),
    clickLastBox,
    click(".box"),
    click("#toggle"),
  ],
};
