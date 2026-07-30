import type { TestConfig } from "../../main";

function clickA(document: Document) {
  document.querySelectorAll(`input`)[0]!.click();
}

function clickB(document: Document) {
  document.querySelectorAll(`input`)[1]!.click();
}

function clickC(document: Document) {
  document.querySelectorAll(`input`)[2]!.click();
}

export const config: TestConfig = {
  steps: [{}, clickB, clickC, clickA],
};
