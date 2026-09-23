import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

function clickFirstBox(document: Document) {
  document.querySelector<HTMLButtonElement>(".box")!.click();
}

function clickLastBox(document: Document) {
  const boxes = document.querySelectorAll<HTMLButtonElement>(".box");
  boxes[boxes.length - 1].click();
}

export const config: TestConfig = {
  steps: [{}, clickFirstBox, toggle, clickLastBox, clickFirstBox, toggle],
};
