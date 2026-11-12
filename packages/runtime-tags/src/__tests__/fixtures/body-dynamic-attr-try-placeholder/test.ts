import type { TestConfig } from "../../main.test";
import { flush } from "../../utils/resolve";

function click(document: Document) {
  document.querySelector("button")?.click();
}

export const config: TestConfig = {
  equivalent: false,
  skip_csr: true,
  steps: [{}, flush, flush, click],
};
