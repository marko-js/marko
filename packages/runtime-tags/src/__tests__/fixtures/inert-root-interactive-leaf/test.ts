import type { TestConfig } from "../../main.test";

// Only the interactive leaf is linked by the page entry; the inert root and
// layout stay out of the client bundle.
function bump(document: Document) {
  (document.querySelector(".counter") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, bump],
};
