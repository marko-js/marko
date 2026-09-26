import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
};
