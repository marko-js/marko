import type { TestConfig } from "../../main.test";

function clickClass(c: Element) {
  (c.querySelector("#class") as HTMLButtonElement).click();
}

function clickTags(c: Element) {
  (c.querySelector("#tags") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickTags, clickClass, clickTags],
};
