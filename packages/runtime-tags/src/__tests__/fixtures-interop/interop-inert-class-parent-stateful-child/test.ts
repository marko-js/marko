import type { TestConfig } from "../../main.test";

function clickClass(container: Element) {
  (container.querySelector("#class") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClass, clickClass],
};
