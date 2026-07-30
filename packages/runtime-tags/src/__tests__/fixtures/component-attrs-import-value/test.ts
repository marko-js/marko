import type { TestConfig } from "../../main";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  steps: [{}, click],
  skip_csr: true,
  error_html: true,
};
