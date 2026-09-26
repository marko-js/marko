import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>(".count")!.click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click],
};
