import type { TestConfig } from "../../main.test";

function inc(document: Document) {
  document.querySelector<HTMLButtonElement>("#inc")!.click();
}

export const config: TestConfig = {
  steps: [{ b: true }, inc],
};
