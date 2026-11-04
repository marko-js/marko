import type { TestConfig } from "../../main.test";

// A Tags page whose only client work is a Class API component that hydrates
// itself on the input it is passed: the page still resumes the boundary's input.
function clickClass(document: Document) {
  (document.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClass, clickClass],
};
