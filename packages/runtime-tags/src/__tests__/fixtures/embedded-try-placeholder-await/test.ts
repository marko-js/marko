import type { TestConfig } from "../../main.test";
import { flush, wait } from "../../utils/resolve";

// The try's body streams hidden behind its placeholder until the await settles.
export const config: TestConfig = {
  embedded: true,
  skip_csr: true,
  steps: [{}, flush, wait, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
