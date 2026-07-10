import type { TestConfig } from "../../main.test";

function clickClear(container: Element) {
  (container.querySelector("#clear") as HTMLButtonElement).click();
}

function clickInc(container: Element) {
  (container.querySelector("#inc") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClear, clickInc],
};
