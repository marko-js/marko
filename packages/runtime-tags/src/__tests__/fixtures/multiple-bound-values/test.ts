import type { TestConfig } from "../../main.test";

function clickAllButtons(container: Element) {
  container.querySelectorAll("button")!.forEach((item) => item.click());
}

export const config: TestConfig = {
  steps: [{}, clickAllButtons, clickAllButtons, clickAllButtons],
};
