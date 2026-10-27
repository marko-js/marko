import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// A stylesheet module's classes are fixed for a build, so a patch writes them
// as static markup, in place and in the content it creates.
export const config: TestConfig = {
  patches: true,
  steps: [{ show: false, lit: false }, { show: true, lit: true }, click],
};
