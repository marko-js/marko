import type { TestConfig } from "../../main.test";

export const config: TestConfig = {
  steps: [{}, clickLog, clickChange, clickLog],
};

function clickLog(document: Document) {
  document.querySelectorAll<HTMLButtonElement>(".log")[1].click();
}

function clickChange(document: Document) {
  document.querySelector<HTMLButtonElement>(".change")!.click();
}
