import type { TestConfig } from "../../main.test";

// Same as interop-self-interactive-tags-to-class but the Class API child is a
// split component (browser logic in component-browser.js), like ebay-button.
function clickClass(document: Document) {
  (document.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  equivalent: false,
  steps: [{}, clickClass, clickClass],
};
