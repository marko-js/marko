import type { TestConfig } from "../../main.test";

function toggle(container: Element) {
  (container.querySelector("#toggle") as HTMLButtonElement).click();
}

function reverse(container: Element) {
  (container.querySelector("#reverse") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, toggle, toggle, reverse],
};
