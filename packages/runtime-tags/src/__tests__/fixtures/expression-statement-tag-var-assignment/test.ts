import type { TestConfig } from "../../main.test";

function clickUp(document: Document) {
  document.querySelector<HTMLButtonElement>(".up")!.click();
}

function clickDown(document: Document) {
  document.querySelector<HTMLButtonElement>(".down")!.click();
}

function clickChange(document: Document) {
  document.querySelector<HTMLButtonElement>(".change")!.click();
}

export const config: TestConfig = {
  steps: [
    {},
    clickChange,
    clickUp,
    clickChange,
    clickChange,
    clickDown,
    clickChange,
    clickChange,
  ],
};
