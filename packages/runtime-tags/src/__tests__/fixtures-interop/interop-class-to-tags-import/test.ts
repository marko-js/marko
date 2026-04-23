import type { TestConfig } from "../../main.test";

function clickClass(container: Element) {
  (container.querySelector("#class") as HTMLButtonElement).click();
}

function clickTags(container: Element) {
  (container.querySelector("#tags") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickTags, clickClass, clickTags, clickClass, clickTags],
};
