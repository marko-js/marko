import type { TestConfig } from "../../main.test";

function clickOuter(container: Element) {
  container.querySelector<HTMLButtonElement>("button#outer")!.click();
}

function clickMiddle(container: Element) {
  container.querySelector<HTMLButtonElement>("button#middle")!.click();
}

function clickInner(container: Element) {
  container.querySelector<HTMLButtonElement>("button#inner")!.click();
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
