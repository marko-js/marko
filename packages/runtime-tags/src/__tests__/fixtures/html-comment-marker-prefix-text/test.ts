import type { TestConfig } from "../../main.test";

function click(document: Document) {
  document.querySelector("button")!.click();
}

// The comments spell the button text's resume comment (debug and optimized
// accessors); SSR escapes them, and snapshots hide CSR's marker-shaped ones.
export const config: TestConfig = {
  steps: [{}, click, click],
  equivalent: false,
};
