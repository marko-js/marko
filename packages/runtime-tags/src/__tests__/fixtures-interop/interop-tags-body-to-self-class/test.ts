import type { TestConfig } from "../../main.test";

// A Tags page whose only client work is a Class API component that hydrates
// itself and renders the body it is passed: the page resumes that body.
function clickClass(document: Document) {
  (document.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClass, clickClass],
};
