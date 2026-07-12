import type { TestConfig } from "../../main.test";

function clickTags(container: Element) {
  (container.querySelector("#tags") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickTags, clickTags],
};
