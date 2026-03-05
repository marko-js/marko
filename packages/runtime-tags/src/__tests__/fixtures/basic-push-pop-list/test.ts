import type { TestConfig } from "../../main.test";

function add(container: Element) {
  (container.querySelector("#add") as HTMLButtonElement).click();
}

function remove(container: Element) {
  (container.querySelector("#remove") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, add, add, remove, add],
};
