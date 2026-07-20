import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  embedded: true,
  skip_csr: true,
  steps: [{}, click, click, click],
};
