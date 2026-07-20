import type { TestConfig } from "../../main.test";

const clickOuter = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#outer")!.click();
};

const clickInner = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#inner")!.click();
};

const clickCount = (document: Document) => {
  document.querySelector<HTMLButtonElement>("#count")!.click();
};

export const config: TestConfig = {
  steps: [
    {},
    clickCount,
    clickCount,
    clickInner,
    clickInner,
    clickCount,
    clickOuter,
    clickOuter,
    clickCount,
  ],
};
