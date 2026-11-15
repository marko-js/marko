import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// The click makes each row's `<try>` content throw after resume.
export const config: TestConfig = {
  steps: [{}, click],
};
