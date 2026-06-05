import type { TestConfig } from "../../main.test";

function click(container: Element) {
  container
    .querySelector<HTMLScriptElement>(`script[type="importmap"]`)!
    .click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
