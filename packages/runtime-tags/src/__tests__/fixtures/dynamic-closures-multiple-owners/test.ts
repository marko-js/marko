import type { TestConfig } from "../../main.test";

function incrementInner(document: Document) {
  document.querySelector<HTMLButtonElement>("button.inner")!.click();
}

function incrementOuter(document: Document) {
  document.querySelector<HTMLButtonElement>("button.outer")!.click();
}

export const config: TestConfig = {
  steps: [{}, incrementInner, incrementOuter],
};
