import type { TestConfig } from "../../main.test";

function click0(document: Document) {
  document.querySelectorAll(`input`)[0]!.click();
}

function click1(document: Document) {
  document.querySelectorAll(`input`)[1]!.click();
}

function click2(document: Document) {
  document.querySelectorAll(`input`)[2]!.click();
}

export const config: TestConfig = {
  steps: [{}, click1, click2, click0],
};
