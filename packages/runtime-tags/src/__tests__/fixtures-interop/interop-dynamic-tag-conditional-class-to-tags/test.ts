import type { TestConfig } from "../../main.test";

function clickTags(c: Element) {
  (c.querySelector("#tags") as HTMLButtonElement).click();
}

function toggle(c: Element) {
  (c.querySelector("#class") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickTags, toggle, toggle],
};
