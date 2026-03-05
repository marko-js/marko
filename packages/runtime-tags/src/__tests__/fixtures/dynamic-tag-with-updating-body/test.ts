import type { TestConfig } from "../../main.test";

function count(container: Element) {
  container.querySelector<HTMLButtonElement>("#count")!.click();
}

function changeTag(container: Element) {
  container.querySelector<HTMLButtonElement>("#changeTag")!.click();
}

export const config: TestConfig = {
  steps: [{}, count, changeTag, count],
};
