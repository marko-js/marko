import type { TestConfig } from "../../main.test";

function clickUpdate(container: Element) {
  (container.querySelector("#update") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickUpdate],
};
