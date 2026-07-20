import type { TestConfig } from "../../main.test";

function clickOuter(document: Document) {
  document.querySelector<HTMLButtonElement>("button#outer")!.click();
}

function clickMiddle(document: Document) {
  document.querySelector<HTMLButtonElement>("button#middle")!.click();
}

function clickInner(document: Document) {
  document.querySelector<HTMLButtonElement>("button#inner")!.click();
}

export const config: TestConfig = {
  steps: [
    {},
    clickInner,
    clickMiddle,
    clickOuter,
    clickInner,
    clickMiddle,
    clickOuter,
    clickOuter,
  ],
};
