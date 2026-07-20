import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")?.click();
}

export const config: TestConfig = {
  skip_csr: true,
  steps: [{}, click, click],
};
