import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A server import is absent from the client module, so its classes are server
// values a patch writes, in place and in the content it creates.
export const config: TestConfig = {
  patches: true,
  skip_csr: true,
  steps: [{ show: false }, { show: true }, click],
};
