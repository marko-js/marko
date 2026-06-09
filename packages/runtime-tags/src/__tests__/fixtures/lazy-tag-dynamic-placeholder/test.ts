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

function toggleClick(container: Element) {
  (container.querySelector(".toggle") as HTMLElement).click();
}

function incClick(container: Element) {
  (container.querySelector(".inc") as HTMLElement).click();
}
