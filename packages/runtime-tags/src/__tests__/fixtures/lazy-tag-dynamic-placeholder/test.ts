import type { TestConfig } from "../../main.test";
import { flushRAF, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [
    {},
    flushRAF,
    wait,
    incClick,
    wait,
    toggleClick,
    wait,
    toggleClick,
    wait,
  ],
  equivalent: false,
};

function toggleClick(document: Document) {
  (document.querySelector(".toggle") as HTMLElement).click();
}

function incClick(document: Document) {
  (document.querySelector(".inc") as HTMLElement).click();
}
