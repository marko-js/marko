import type { TestConfig } from "../../main.test";

function toggle(document: Document) {
  document.querySelector<HTMLButtonElement>("#toggle")!.click();
}

// A body handed to a tag the compiler cannot resolve reaches the document,
// so the client renders it later: the page loads the modules registering it.
export const config: TestConfig = {
  patches: true,
  steps: [{ depth: 0 }, toggle],
};
