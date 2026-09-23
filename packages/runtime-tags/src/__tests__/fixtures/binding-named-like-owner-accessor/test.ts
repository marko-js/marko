import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, clickInc, clickMul, clickInc],
};

function clickInc(document: Document) {
  document.querySelector<HTMLElement>(".inc")!.click();
}

function clickMul(document: Document) {
  document.querySelector<HTMLElement>(".mul")!.click();
}
