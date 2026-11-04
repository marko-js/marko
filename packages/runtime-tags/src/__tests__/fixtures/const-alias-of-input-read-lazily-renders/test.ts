import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, clickLog, clickChange, clickLog],
};

function clickLog(document: Document) {
  document.querySelector<HTMLButtonElement>(".log")!.click();
}

function clickChange(document: Document) {
  document.querySelector<HTMLButtonElement>(".change")!.click();
}
