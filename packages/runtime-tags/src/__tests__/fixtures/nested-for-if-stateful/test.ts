import type { TestConfig } from "../../main.test";

let buttonIndex = 0;

function click(container: Element) {
  container.querySelectorAll("button")[buttonIndex].click();
  buttonIndex = (buttonIndex + 1) % 3;
}

export const config: TestConfig = {
  steps: [{}, click, click, click, click, click, click, click, click, click],
};
