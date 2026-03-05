import type { TestConfig } from "../../main.test";

let buttonNum = 0;

function click(container: Element) {
  container.querySelectorAll("button")![buttonNum++].click();
}

function reset() {
  buttonNum = 0;
}

export const config: TestConfig = {
  steps: [{}, click, click, click, click, reset],
};
