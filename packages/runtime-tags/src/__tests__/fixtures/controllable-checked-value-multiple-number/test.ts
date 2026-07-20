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

function reset(document: Document) {
  document.querySelector<HTMLButtonElement>("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click0, click1, click2, reset],
};
