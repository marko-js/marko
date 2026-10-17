import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// The branches a template creates as it mounts set up inside its setup, so
// their effects run before its own, as a static child's do and as on resume.
export const config: TestConfig = {
  equivalent: false,
  steps: [{}, click, click],
};
