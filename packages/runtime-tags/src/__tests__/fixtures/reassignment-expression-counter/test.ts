import type { TestConfig } from "../../main.test";

function addTwo(container: Element) {
  container.querySelector<HTMLButtonElement>("#addTwo")!.click();
}

function triple(container: Element) {
  container.querySelector<HTMLButtonElement>("#triple")!.click();
}

function cube(container: Element) {
  container.querySelector<HTMLButtonElement>("#cube")!.click();
}

export const config: TestConfig = {
  steps: [{}, addTwo, triple, cube],
};
