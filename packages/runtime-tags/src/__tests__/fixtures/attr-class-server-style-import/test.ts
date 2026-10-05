import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A server import is absent from the client module, which only resumes.
export const config: TestConfig = {
  skip_csr: true,
  steps: [{}, click],
};
