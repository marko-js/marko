import type { TestConfig } from "../../main.test";

// The parent's registered `getChild` reads the template, but is written only
// while its caller changes `show`; the stateful child writes the template on
// every render, so the parent still ships to register it.
export const config: TestConfig = {
  steps: [{ show: true }, click],
};

function click(document: Document) {
  document.querySelector("button")!.click();
}
