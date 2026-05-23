import type { TestConfig } from "../../main.test";
import { rafFlush, wait } from "../../utils/resolve";

export const config: TestConfig = {
  steps: [{}, rafFlush, wait, incClick, toggleClick, toggleClick, wait],
  equivalent: false,
};

function toggleClick(container: Element) {
  (container.querySelector(".toggle") as HTMLElement).click();
}

function incClick(container: Element) {
  (container.querySelector(".inc") as HTMLElement).click();
}
