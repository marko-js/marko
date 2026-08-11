import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

export const config: TestConfig = {
  // SSR resumes the rebuilt formatter, CSR builds it from source; that gap is
  // what the serializer warns about.
  equivalent: false,
  skip_optimize: true,
  steps: [{}, click],
};
