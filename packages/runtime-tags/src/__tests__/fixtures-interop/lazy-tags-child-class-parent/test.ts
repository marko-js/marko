import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector<HTMLButtonElement>("#inc")!.click();
}

// A Class template cannot lazy load a Tags one, so the import stays eager and
// the child still resumes from the page entry.
export const config: TestConfig = {
  steps: [{}, click],
};
