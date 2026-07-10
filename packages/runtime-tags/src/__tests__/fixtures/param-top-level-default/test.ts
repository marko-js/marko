import type { TestConfig } from "../../main.test";

function clickX(container: Element) {
  (container.querySelector("#x") as HTMLButtonElement).click();
}

function clickY(container: Element) {
  (container.querySelector("#y") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickX, clickY],
};
