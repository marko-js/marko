import type { TestConfig } from "../../main.test";

// A Tags page passes input to a Class API component with no class of its own,
// whose child hydrates on it: the child's input rides the Class runtime.
function clickClass(document: Document) {
  (document.querySelector("#class-api") as HTMLButtonElement).click();
}

export const config: TestConfig = {
  steps: [{}, clickClass, clickClass],
};
