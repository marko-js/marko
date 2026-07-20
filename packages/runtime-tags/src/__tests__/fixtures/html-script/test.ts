import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document
    .querySelector<HTMLScriptElement>(`script[type="importmap"]`)!
    .click();
}

export const config: TestConfig = {
  steps: [{}, click, click, click],
};
