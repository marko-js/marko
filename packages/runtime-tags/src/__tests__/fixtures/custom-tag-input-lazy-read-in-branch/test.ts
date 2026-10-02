import type { TestConfig } from "../../main.test";

function inc(document: Document) {
  document.querySelector<HTMLButtonElement>(".inc")!.click();
}

function act(document: Document) {
  document.querySelector<HTMLButtonElement>(".act")!.click();
}

export const config: TestConfig = {
  steps: [{ show: true }, inc, inc, act],
};
